import { useEffect, useMemo, useRef } from 'react';
import {
  EmptyAndErrorRecoveryRecovergridAtlas,
  PipelineBoardRecovergridAtlas,
  RecordEditorRecovergridAtlas,
  RecordOperationsRecovergridAtlas,
  SettingsAndPreferencesRecovergridAtlas,
} from './screens';
import {
  AtlasProvider,
  useAtlas,
  type AtlasActions,
  type AtlasState,
  type Surface,
} from './features/recovergrid-atlas/recovergrid-atlas.store';
import { actSaveRecord } from './features/surf-record-editor/act_save_record';
import { actCancelEdit } from './features/surf-record-editor/act_cancel_edit';
import { actSearchRecords } from './features/surf-record-operations/act_search_records';
import { actCreateRecord } from './features/surf-record-operations/act_create_record';
import { actSelectRecord } from './features/surf-record-operations/act_select_record';
import { actRetryLoad } from './features/surf-record-operations/act_retry_load';
import './test/bridge';

declare global {
  interface Window {
    app: {
      state: AtlasState;
      actions: AtlasActions;
    };
  }
}

function PersistenceStatus(): JSX.Element {
  const { state, actions } = useAtlas();

  return (
    <div className="flex flex-col gap-2 border-b border-outline-variant bg-surface-container-low px-container-padding py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-label-md text-on-surface-variant">
            RecoverGrid Atlas
          </span>
          <span className="font-body-sm text-on-surface-variant" data-testid="last-saved-at">
            {state.lastSavedAt
              ? `Last saved ${new Date(state.lastSavedAt).toLocaleTimeString()}`
              : 'Not saved yet'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {state.loading && (
            <span className="font-body-sm text-primary" data-testid="loading-indicator">
              Loading…
            </span>
          )}
          <button
            type="button"
            onClick={actions.clearPersistedState}
            className="rounded border border-outline-variant bg-surface px-3 py-1 font-body-sm text-on-surface hover:bg-surface-container-high"
            data-testid="clear-persisted-state"
          >
            Clear saved data
          </button>
        </div>
      </div>
      {state.error && (
        <div
          className="flex items-center justify-between rounded bg-error-container/10 px-3 py-2 text-body-md text-error"
          data-testid="persistence-error"
        >
          <span>{state.error}</span>
          <button
            type="button"
            onClick={actions.dismissError}
            className="ml-2 rounded border border-error/20 px-2 py-0.5 text-sm hover:bg-error/10"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}

function AppContent(): JSX.Element {
  const { state, actions } = useAtlas();
  const appRef = useRef({ state, actions });
  appRef.current = { state, actions };

  useEffect(() => {
    window.app = appRef.current;
  }, [state, actions]);

  const commonActions = useMemo(
    () => ({
      'new-incident-1': () => actCreateRecord(actions),
      'retry-load-2': () => actRetryLoad(actions),
      'create-record-3': () => actCreateRecord(actions),
      'notifications-4': actions.notifications,
      'help-outline-5': actions.helpOutline,
      'record-operations-1': () => actions.navigate('recordOperations'),
      'pipeline-board-2': () => actions.navigate('pipelineBoard'),
      'settings-3': () => actions.navigate('settings'),
      'support-4': actions.contactSupport,
      'logs-5': () => actions.navigate('recordOperations'),
    }),
    [actions],
  );

  const recordOperationsActions = useMemo(
    () => ({
      ...commonActions,
      'search-records': (query: string) => actSearchRecords(actions, query),
      'edit-notes-6': () => {
        const id = state.records[0]?.id ?? null;
        if (id) actSelectRecord(actions, id);
      },
      'copy-id-7': actions.copyLog,
      'records-6': () => actions.navigate('recordOperations'),
      'pipeline-7': () => actions.navigate('pipelineBoard'),
      'settings-8': () => actions.navigate('settings'),
    }),
    [commonActions, actions, state.records],
  );

  const pipelineBoardActions = useMemo(
    () => ({
      ...commonActions,
      'records-6': () => actions.navigate('recordOperations'),
      'pipeline-7': () => actions.navigate('pipelineBoard'),
      'settings-8': () => actions.navigate('settings'),
    }),
    [commonActions, actions],
  );

  const recordEditorActions = useMemo(
    () => ({
      'cancel-1': () => actCancelEdit(actions),
      'save-record-2': () => actSaveRecord(actions),
      'bold-3': () => actions.updateDraft('notes', `${state.draftRecord?.notes ?? ''}**bold**`),
      'italic-4': () => actions.updateDraft('notes', `${state.draftRecord?.notes ?? ''}*italic*`),
      'code-block-5': () =>
        actions.updateDraft('notes', `${state.draftRecord?.notes ?? ''}\n\`\`\`\n\`\`\``),
      'attach-log-6': actions.copyLog,
      'discard-changes-7': () => actCancelEdit(actions),
      'save-record-8': () => actSaveRecord(actions),
      'atlas-ops-1': () => actions.navigate('recordOperations'),
      'record-operations-2': () => actions.navigate('recordOperations'),
    }),
    [actions, state.draftRecord],
  );

  const emptyRecoveryActions = useMemo(
    () => ({
      ...commonActions,
      'show-empty-6': actions.showEmpty,
      'show-error-7': actions.showError,
      'create-first-record-8': actions.createFirstRecord,
      'clear-filters-9': actions.clearFilters,
      'copy-log-10': actions.copyLog,
      'retry-load-11': actions.retryLoad,
      'contact-support-12': actions.contactSupport,
      'records-6': () => actions.navigate('recordOperations'),
      'pipeline-7': () => actions.navigate('pipelineBoard'),
      'settings-8': () => actions.navigate('settings'),
      'import-from-csv-9': actions.importFromCsv,
      'view-documentation-10': actions.viewDocumentation,
    }),
    [commonActions, actions],
  );

  const settingsActions = useMemo(
    () => ({
      'menu-1': () => actions.navigate('recordOperations'),
      'new-incident-2': actions.createRecord,
      'reset-to-defaults-3': actions.resetPreferences,
      'save-preferences-4': () =>
        actions.savePreferences({
          density: state.preferences.density,
          defaultView: state.preferences.defaultView,
          notifications: state.preferences.notifications,
        }),
      'manage-all-5': actions.manageAll,
      'reset-6': actions.resetPreferences,
      'save-preferences-7': () =>
        actions.savePreferences({
          density: state.preferences.density,
          defaultView: state.preferences.defaultView,
          notifications: state.preferences.notifications,
        }),
      'record-operations-1': () => actions.navigate('recordOperations'),
      'pipeline-board-2': () => actions.navigate('pipelineBoard'),
      'settings-3': () => actions.navigate('settings'),
      'support-4': actions.contactSupport,
      'logs-5': () => actions.navigate('recordOperations'),
    }),
    [actions, state.preferences],
  );

  const surface = state.currentSurface;

  return (
    <div className="flex h-full w-full flex-col">
      <PersistenceStatus />
      {surface === 'recordOperations' && (
        <RecordOperationsRecovergridAtlas actions={recordOperationsActions} searchQuery={state.searchQuery} />
      )}
      {surface === 'recordEditor' && <RecordEditorRecovergridAtlas actions={recordEditorActions} />}
      {surface === 'pipelineBoard' && (
        <PipelineBoardRecovergridAtlas actions={pipelineBoardActions} />
      )}
      {surface === 'settings' && (
        <SettingsAndPreferencesRecovergridAtlas actions={settingsActions} />
      )}
      {surface === 'emptyRecovery' && (
        <EmptyAndErrorRecoveryRecovergridAtlas actions={emptyRecoveryActions} />
      )}
    </div>
  );
}

function GlobalLoop(): null {
  const { dispatch } = useAtlas();

  useEffect(() => {
    const handle = window.setInterval(() => {
      dispatch({ type: 'TICK' });
    }, 1000);
    return () => window.clearInterval(handle);
  }, [dispatch]);

  return null;
}

export default function App(): JSX.Element {
  return (
    <div
      data-setfarm-root="recovergrid-atlas"
      data-testid="setfarm-app-root"
      className="relative h-screen w-screen overflow-hidden bg-surface text-on-surface"
    >
      <AtlasProvider>
        <GlobalLoop />
        <AppContent />
      </AtlasProvider>
    </div>
  );
}
