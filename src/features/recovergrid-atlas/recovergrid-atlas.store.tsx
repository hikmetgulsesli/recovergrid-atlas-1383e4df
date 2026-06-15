import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';
import {
  defaultPreferences,
  makeBlankDraft,
  sampleActivities,
  sampleRecords,
  type ActivityEvent,
  type AtlasRecord,
  type Preference,
  type RecordStatus,
  type Severity,
  type PipelineStage,
} from '../../__fixtures__/recovergrid-atlas.fixture';
import {
  loadPersistedState,
  savePersistedState,
  type PersistedAtlasState,
} from './recovergrid-atlas.repo';

export type Surface =
  | 'recordOperations'
  | 'recordEditor'
  | 'pipelineBoard'
  | 'settings'
  | 'emptyRecovery';

export interface AtlasState {
  records: AtlasRecord[];
  activities: ActivityEvent[];
  preferences: Preference;
  currentSurface: Surface;
  selectedRecordId: string | null;
  draftRecord: Partial<AtlasRecord> | null;
  searchQuery: string;
  statusFilter: RecordStatus | 'all';
  error: string | null;
  loading: boolean;
  lastSavedAt: number | null;
  tickCount: number;
}

export const initialAtlasState: AtlasState = {
  records: sampleRecords,
  activities: sampleActivities,
  preferences: defaultPreferences,
  currentSurface: 'recordOperations',
  selectedRecordId: null,
  draftRecord: null,
  searchQuery: '',
  statusFilter: 'all',
  error: null,
  loading: false,
  lastSavedAt: null,
  tickCount: 0,
};

export type AtlasAction =
  | { type: 'TICK' }
  | { type: 'NAVIGATE'; surface: Surface }
  | { type: 'SEARCH_RECORDS'; query: string }
  | { type: 'FILTER_BY_STATUS'; status: RecordStatus | 'all' }
  | { type: 'SELECT_RECORD'; id: string | null }
  | { type: 'CREATE_RECORD' }
  | { type: 'UPDATE_DRAFT'; field: keyof AtlasRecord; value: unknown }
  | { type: 'SAVE_RECORD' }
  | { type: 'CANCEL_EDIT' }
  | { type: 'RETRY_LOAD' }
  | { type: 'UPDATE_RECORD_STATUS'; id: string; status: RecordStatus }
  | { type: 'MOVE_RECORD_STAGE'; id: string; stage: PipelineStage }
  | { type: 'SAVE_PREFERENCES'; preferences: Partial<Preference> }
  | { type: 'RESET_PREFERENCES' }
  | { type: 'SHOW_EMPTY' }
  | { type: 'SHOW_ERROR' }
  | { type: 'CREATE_FIRST_RECORD' }
  | { type: 'CLEAR_FILTERS' }
  | { type: 'COPY_LOG' }
  | { type: 'CONTACT_SUPPORT' }
  | { type: 'IMPORT_FROM_CSV' }
  | { type: 'VIEW_DOCUMENTATION' }
  | { type: 'NOTIFICATIONS' }
  | { type: 'HELP_OUTLINE' }
  | { type: 'MANAGE_ALL' }
  | { type: 'RESET' }
  | { type: 'DISMISS_ERROR' }
  | { type: 'HYDRATE'; payload: Partial<AtlasState> };

function generateId(): string {
  return `RC-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function filterRecords(
  records: AtlasRecord[],
  query: string,
  statusFilter: RecordStatus | 'all',
): AtlasRecord[] {
  const q = query.trim().toLowerCase();
  return records.filter((r) => {
    const matchesQuery =
      !q ||
      r.id.toLowerCase().includes(q) ||
      r.title.toLowerCase().includes(q) ||
      r.summary.toLowerCase().includes(q) ||
      r.assignee.toLowerCase().includes(q);
    const matchesStatus = statusFilter === 'all' || r.status === statusFilter;
    return matchesQuery && matchesStatus;
  });
}

export function atlasReducer(state: AtlasState, action: AtlasAction): AtlasState {
  const now = Date.now();
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        tickCount: state.tickCount + 1,
      };

    case 'NAVIGATE':
      return {
        ...state,
        currentSurface: action.surface,
        error: null,
      };

    case 'SEARCH_RECORDS':
      return {
        ...state,
        searchQuery: action.query,
      };

    case 'FILTER_BY_STATUS':
      return {
        ...state,
        statusFilter: action.status,
      };

    case 'SELECT_RECORD': {
      const record = state.records.find((r) => r.id === action.id) ?? null;
      return {
        ...state,
        selectedRecordId: action.id,
        draftRecord: record ? { ...record } : null,
        currentSurface: record ? 'recordEditor' : state.currentSurface,
      };
    }

    case 'CREATE_RECORD':
      return {
        ...state,
        selectedRecordId: null,
        draftRecord: makeBlankDraft(),
        currentSurface: 'recordEditor',
      };

    case 'UPDATE_DRAFT': {
      if (!state.draftRecord) return state;
      return {
        ...state,
        draftRecord: {
          ...state.draftRecord,
          [action.field]: action.value,
        },
      };
    }

    case 'SAVE_RECORD': {
      const draft = state.draftRecord;
      if (!draft || !draft.title?.trim()) {
        return { ...state, error: 'Title is required to save a record.' };
      }
      const isNew = !draft.id || !state.records.some((r) => r.id === draft.id);
      const saved: AtlasRecord = {
        id: (draft.id as string) || generateId(),
        title: (draft.title as string) || 'Untitled Record',
        summary: (draft.summary as string) || '',
        status: (draft.status as RecordStatus) || 'detected',
        stage: (draft.stage as PipelineStage) || 'triage',
        assignee: (draft.assignee as string) || 'Unassigned',
        severity: (draft.severity as Severity) || 'medium',
        createdAt: (draft.createdAt as number) || now,
        updatedAt: now,
        notes: (draft.notes as string) || '',
        prReviewState: (draft.prReviewState as AtlasRecord['prReviewState']) || 'open',
        retryAttempts: (draft.retryAttempts as number) ?? 0,
        supervisorDecision: (draft.supervisorDecision as AtlasRecord['supervisorDecision']) || 'hold',
      };
      const records = isNew
        ? [saved, ...state.records]
        : state.records.map((r) => (r.id === saved.id ? saved : r));
      const activity: ActivityEvent = {
        id: `EVT-${now}`,
        recordId: saved.id,
        message: isNew ? 'Record created' : 'Record updated',
        timestamp: now,
      };
      return {
        ...state,
        records,
        activities: [activity, ...state.activities],
        selectedRecordId: saved.id,
        draftRecord: { ...saved },
        currentSurface: 'recordOperations',
        lastSavedAt: now,
        error: null,
      };
    }

    case 'CANCEL_EDIT':
      return {
        ...state,
        draftRecord: null,
        selectedRecordId: null,
        currentSurface: 'recordOperations',
        error: null,
      };

    case 'RETRY_LOAD':
      return {
        ...state,
        loading: true,
        error: null,
        currentSurface: 'recordOperations',
      };

    case 'UPDATE_RECORD_STATUS': {
      const records = state.records.map((r) =>
        r.id === action.id ? { ...r, status: action.status, updatedAt: now } : r,
      );
      return {
        ...state,
        records,
        activities: [
          {
            id: `EVT-${now}`,
            recordId: action.id,
            message: `Status changed to ${action.status}`,
            timestamp: now,
          },
          ...state.activities,
        ],
      };
    }

    case 'MOVE_RECORD_STAGE': {
      const records = state.records.map((r) =>
        r.id === action.id ? { ...r, stage: action.stage, updatedAt: now } : r,
      );
      return {
        ...state,
        records,
        activities: [
          {
            id: `EVT-${now}`,
            recordId: action.id,
            message: `Moved to ${action.stage}`,
            timestamp: now,
          },
          ...state.activities,
        ],
      };
    }

    case 'SAVE_PREFERENCES': {
      const updatedPreferences = { ...state.preferences, ...action.preferences };
      return {
        ...state,
        preferences: updatedPreferences,
        lastSavedAt: now,
        currentSurface: updatedPreferences.defaultView,
        error: null,
      };
    }

    case 'RESET_PREFERENCES':
      return {
        ...state,
        preferences: defaultPreferences,
        lastSavedAt: now,
      };

    case 'SHOW_EMPTY':
      return {
        ...state,
        currentSurface: 'emptyRecovery',
        error: 'No records match the current filters.',
      };

    case 'SHOW_ERROR':
      return {
        ...state,
        currentSurface: 'emptyRecovery',
        error: 'A runtime error occurred while loading records.',
      };

    case 'CREATE_FIRST_RECORD':
      return {
        ...state,
        selectedRecordId: null,
        draftRecord: makeBlankDraft(),
        currentSurface: 'recordEditor',
        error: null,
      };

    case 'CLEAR_FILTERS':
      return {
        ...state,
        searchQuery: '',
        statusFilter: 'all',
        currentSurface: 'recordOperations',
        error: null,
      };

    case 'COPY_LOG':
      return {
        ...state,
        lastSavedAt: now,
      };

    case 'CONTACT_SUPPORT':
    case 'IMPORT_FROM_CSV':
    case 'VIEW_DOCUMENTATION':
    case 'NOTIFICATIONS':
    case 'HELP_OUTLINE':
    case 'MANAGE_ALL':
    case 'RESET':
      return {
        ...state,
        lastSavedAt: now,
      };

    case 'DISMISS_ERROR':
      return {
        ...state,
        error: null,
      };

    case 'HYDRATE':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export interface AtlasActions {
  navigate: (surface: Surface) => void;
  searchRecords: (query: string) => void;
  filterByStatus: (status: RecordStatus | 'all') => void;
  selectRecord: (id: string | null) => void;
  createRecord: () => void;
  updateDraft: (field: keyof AtlasRecord, value: unknown) => void;
  saveRecord: () => void;
  cancelEdit: () => void;
  retryLoad: () => void;
  updateRecordStatus: (id: string, status: RecordStatus) => void;
  moveRecordStage: (id: string, stage: PipelineStage) => void;
  savePreferences: (preferences: Partial<Preference>) => void;
  resetPreferences: () => void;
  showEmpty: () => void;
  showError: () => void;
  createFirstRecord: () => void;
  clearFilters: () => void;
  copyLog: () => void;
  contactSupport: () => void;
  importFromCsv: () => void;
  viewDocumentation: () => void;
  notifications: () => void;
  helpOutline: () => void;
  manageAll: () => void;
  reset: () => void;
  dismissError: () => void;
}

interface AtlasContextValue {
  state: AtlasState;
  dispatch: React.Dispatch<AtlasAction>;
  actions: AtlasActions;
  filteredRecords: AtlasRecord[];
}

const AtlasContext = createContext<AtlasContextValue | null>(null);

function makeActions(dispatch: React.Dispatch<AtlasAction>): AtlasActions {
  return {
    navigate: (surface) => dispatch({ type: 'NAVIGATE', surface }),
    searchRecords: (query) => dispatch({ type: 'SEARCH_RECORDS', query }),
    filterByStatus: (status) => dispatch({ type: 'FILTER_BY_STATUS', status }),
    selectRecord: (id) => dispatch({ type: 'SELECT_RECORD', id }),
    createRecord: () => dispatch({ type: 'CREATE_RECORD' }),
    updateDraft: (field, value) => dispatch({ type: 'UPDATE_DRAFT', field, value }),
    saveRecord: () => dispatch({ type: 'SAVE_RECORD' }),
    cancelEdit: () => dispatch({ type: 'CANCEL_EDIT' }),
    retryLoad: () => dispatch({ type: 'RETRY_LOAD' }),
    updateRecordStatus: (id, status) => dispatch({ type: 'UPDATE_RECORD_STATUS', id, status }),
    moveRecordStage: (id, stage) => dispatch({ type: 'MOVE_RECORD_STAGE', id, stage }),
    savePreferences: (preferences) => dispatch({ type: 'SAVE_PREFERENCES', preferences }),
    resetPreferences: () => dispatch({ type: 'RESET_PREFERENCES' }),
    showEmpty: () => dispatch({ type: 'SHOW_EMPTY' }),
    showError: () => dispatch({ type: 'SHOW_ERROR' }),
    createFirstRecord: () => dispatch({ type: 'CREATE_FIRST_RECORD' }),
    clearFilters: () => dispatch({ type: 'CLEAR_FILTERS' }),
    copyLog: () => dispatch({ type: 'COPY_LOG' }),
    contactSupport: () => dispatch({ type: 'CONTACT_SUPPORT' }),
    importFromCsv: () => dispatch({ type: 'IMPORT_FROM_CSV' }),
    viewDocumentation: () => dispatch({ type: 'VIEW_DOCUMENTATION' }),
    notifications: () => dispatch({ type: 'NOTIFICATIONS' }),
    helpOutline: () => dispatch({ type: 'HELP_OUTLINE' }),
    manageAll: () => dispatch({ type: 'MANAGE_ALL' }),
    reset: () => dispatch({ type: 'RESET' }),
    dismissError: () => dispatch({ type: 'DISMISS_ERROR' }),
  };
}

export function AtlasProvider({ children }: { children: ReactNode }): JSX.Element {
  const [state, dispatch] = useReducer(atlasReducer, initialAtlasState, (fallback): AtlasState => {
    const persisted = loadPersistedState();
    if (!persisted) return fallback;
    return {
      ...fallback,
      ...(persisted as Partial<AtlasState>),
      // Always rehydrate live runtime fields from current session, not stale persisted values.
      loading: false,
      error: null,
    };
  });

  const actions = useMemo(() => makeActions(dispatch), []);
  const filteredRecords = useMemo(
    () => filterRecords(state.records, state.searchQuery, state.statusFilter),
    [state.records, state.searchQuery, state.statusFilter],
  );

  useEffect(() => {
    const payload: PersistedAtlasState = {
      records: state.records,
      activities: state.activities,
      preferences: state.preferences,
      currentSurface: state.currentSurface,
      selectedRecordId: state.selectedRecordId,
      draftRecord: state.draftRecord,
      searchQuery: state.searchQuery,
      statusFilter: state.statusFilter,
      lastSavedAt: state.lastSavedAt,
    };
    savePersistedState(payload);
  }, [
    state.records,
    state.activities,
    state.preferences,
    state.currentSurface,
    state.selectedRecordId,
    state.draftRecord,
    state.searchQuery,
    state.statusFilter,
    state.lastSavedAt,
  ]);

  const value = useMemo(
    () => ({ state, dispatch, actions, filteredRecords }),
    [state, actions, filteredRecords],
  );

  return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>;
}

export function useAtlas(): AtlasContextValue {
  const context = useContext(AtlasContext);
  if (!context) {
    throw new Error('useAtlas must be used within an AtlasProvider');
  }
  return context;
}
