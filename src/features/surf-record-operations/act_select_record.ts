import type { AtlasActions } from '../recovergrid-atlas/recovergrid-atlas.store';

/**
 * Surface action: select a record by id and open it in the Record Editor.
 * Triggered by inline edit interactions in the Record Operations list.
 */
export function actSelectRecord(actions: AtlasActions, id: string | null): void {
  actions.selectRecord(id);
}
