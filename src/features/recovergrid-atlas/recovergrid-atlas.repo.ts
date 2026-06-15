const STORAGE_KEY = 'recovergrid-atlas:v1';

export interface PersistedAtlasState {
  records: unknown[];
  activities: unknown[];
  preferences: unknown;
  currentSurface: string;
  selectedRecordId: string | null;
  draftRecord: unknown;
  searchQuery: string;
  statusFilter: string;
  error: string | null;
  loading: boolean;
  lastSavedAt: number | null;
  tickCount: number;
}

export function loadPersistedState(): Partial<PersistedAtlasState> | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<PersistedAtlasState>;
    return parsed;
  } catch {
    return null;
  }
}

export function savePersistedState(state: PersistedAtlasState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Persistence is best-effort; corrupted storage must not crash the runtime.
  }
}

export function clearPersistedState(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore cleanup failures.
  }
}
