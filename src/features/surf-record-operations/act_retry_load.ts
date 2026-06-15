import type { AtlasActions } from '../recovergrid-atlas/recovergrid-atlas.store';

/**
 * Surface action: retry loading persisted atlas state.
 * Triggered by the Retry Load button in Record Operations.
 */
export function actRetryLoad(actions: AtlasActions): void {
  actions.retryLoad();
}
