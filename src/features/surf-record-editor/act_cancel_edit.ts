import type { AtlasActions } from '../recovergrid-atlas/recovergrid-atlas.store';

/**
 * Surface action: abandon the current draft and return to Record Operations.
 * Triggered by Cancel and Discard Changes buttons in the Record Editor.
 */
export function actCancelEdit(actions: AtlasActions): void {
  actions.cancelEdit();
}
