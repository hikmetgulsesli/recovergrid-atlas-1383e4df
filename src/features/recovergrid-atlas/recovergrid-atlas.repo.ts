import type {
  ActivityEvent,
  AtlasRecord,
  Preference,
  RecordStatus,
} from '../../__fixtures__/recovergrid-atlas.fixture';
import type { Surface } from './recovergrid-atlas.store';

const STORAGE_KEY = 'recovergrid-atlas:v1';

export interface PersistedAtlasState {
  records: AtlasRecord[];
  activities: ActivityEvent[];
  preferences: Preference;
  currentSurface: Surface;
  selectedRecordId: string | null;
  draftRecord: Partial<AtlasRecord> | null;
  searchQuery: string;
  statusFilter: RecordStatus | 'all';
  lastSavedAt: number | null;
}

export interface LoadResult {
  data: Partial<PersistedAtlasState> | null;
  error: string | null;
}

export interface SaveResult {
  ok: boolean;
  error: string | null;
}

export function loadPersistedState(): LoadResult {
  if (typeof window === 'undefined') {
    return { data: null, error: null };
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { data: null, error: null };
    const parsed = JSON.parse(raw) as Partial<PersistedAtlasState>;
    return { data: parsed, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Failed to load saved atlas data (corrupted storage).',
    };
  }
}

export function savePersistedState(state: PersistedAtlasState): SaveResult {
  if (typeof window === 'undefined') {
    return { ok: false, error: 'localStorage is not available in this environment.' };
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return { ok: true, error: null };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : 'Failed to save atlas data.',
    };
  }
}

export function clearPersistedState(): SaveResult {
  if (typeof window === 'undefined') {
    return { ok: false, error: 'localStorage is not available in this environment.' };
  }
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    return { ok: true, error: null };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : 'Failed to clear saved atlas data.',
    };
  }
}
