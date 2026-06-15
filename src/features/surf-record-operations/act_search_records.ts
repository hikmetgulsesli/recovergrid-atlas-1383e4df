import type { AtlasActions } from '../recovergrid-atlas/recovergrid-atlas.store';

/**
 * Surface action: update the persistent search query for the records list.
 * Triggered by the search input in Record Operations.
 */
export function actSearchRecords(actions: AtlasActions, query: string): void {
  actions.searchRecords(query);
}
