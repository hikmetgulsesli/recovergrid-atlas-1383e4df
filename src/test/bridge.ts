import type { AtlasActions, AtlasState } from '../features/recovergrid-atlas/recovergrid-atlas.store';

declare global {
  interface Window {
    app: {
      state: AtlasState;
      actions: AtlasActions;
    };
  }
}

export {};
