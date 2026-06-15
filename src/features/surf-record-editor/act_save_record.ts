import type { AtlasActions } from '../recovergrid-atlas/recovergrid-atlas.store';

/**
 * Surface action: persist the current draft record.
 * Triggered by the Record Editor form submit / Save Record buttons.
 */
export function actSaveRecord(actions: AtlasActions): void {
  actions.saveRecord();
}
