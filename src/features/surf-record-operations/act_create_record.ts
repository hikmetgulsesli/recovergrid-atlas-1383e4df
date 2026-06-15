import type { AtlasActions } from '../recovergrid-atlas/recovergrid-atlas.store';

/**
 * Surface action: create a blank record and open the Record Editor.
 * Triggered by the New Incident / Create Record primary buttons.
 */
export function actCreateRecord(actions: AtlasActions): void {
  actions.createRecord();
}
