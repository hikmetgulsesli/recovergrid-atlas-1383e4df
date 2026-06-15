export type RecordStatus = 'detected' | 'investigating' | 'mitigated' | 'resolved' | 'closed';
export type PipelineStage = 'triage' | 'investigating' | 'recovery' | 'verification' | 'closed';
export type Severity = 'low' | 'medium' | 'high' | 'critical';

export interface AtlasRecord {
  id: string;
  title: string;
  summary: string;
  status: RecordStatus;
  stage: PipelineStage;
  assignee: string;
  severity: Severity;
  createdAt: number;
  updatedAt: number;
  notes: string;
  prReviewState: 'open' | 'approved' | 'changes_requested' | 'merged';
  retryAttempts: number;
  supervisorDecision: 'approve' | 'escalate' | 'hold';
}

export interface ActivityEvent {
  id: string;
  recordId: string;
  message: string;
  timestamp: number;
}

export interface Preference {
  density: 'compact' | 'comfortable';
  defaultView: 'recordOperations' | 'pipelineBoard';
  notifications: boolean;
  filters: Record<string, string>;
}

export const now = Date.now();

export const defaultPreferences: Preference = {
  density: 'comfortable',
  defaultView: 'recordOperations',
  notifications: true,
  filters: {},
};

export const sampleRecords: AtlasRecord[] = [
  {
    id: 'RC-2024-0001',
    title: 'Database Sync Failure - Node A',
    summary: 'Replication lag exceeded threshold during peak traffic. Supervisors requested a manual retry and expanded log capture.',
    status: 'investigating',
    stage: 'investigating',
    assignee: 'A. Chen',
    severity: 'high',
    createdAt: now - 1000 * 60 * 60 * 4,
    updatedAt: now - 1000 * 60 * 15,
    notes: 'Initial triage complete; waiting on second opinion.',
    prReviewState: 'open',
    retryAttempts: 2,
    supervisorDecision: 'hold',
  },
  {
    id: 'RC-2024-0002',
    title: 'Cache Invalidation Storm',
    summary: 'Burst of cache misses caused downstream timeouts. Mitigation deployed and metrics recovered.',
    status: 'resolved',
    stage: 'verification',
    assignee: 'M. Rivera',
    severity: 'medium',
    createdAt: now - 1000 * 60 * 60 * 24,
    updatedAt: now - 1000 * 60 * 60 * 2,
    notes: 'Added circuit breaker; gate passed.',
    prReviewState: 'approved',
    retryAttempts: 1,
    supervisorDecision: 'approve',
  },
  {
    id: 'RC-2024-0003',
    title: 'PR Review Bottleneck - Auth Service',
    summary: 'Critical security patch awaiting final review. Escalated to on-call supervisor.',
    status: 'detected',
    stage: 'triage',
    assignee: 'J. Okonkwo',
    severity: 'critical',
    createdAt: now - 1000 * 60 * 30,
    updatedAt: now - 1000 * 60 * 5,
    notes: 'Need owner acknowledgement.',
    prReviewState: 'changes_requested',
    retryAttempts: 0,
    supervisorDecision: 'escalate',
  },
];

export const sampleActivities: ActivityEvent[] = [
  {
    id: 'EVT-1',
    recordId: 'RC-2024-0001',
    message: 'Incident opened and assigned to A. Chen',
    timestamp: now - 1000 * 60 * 60 * 4,
  },
  {
    id: 'EVT-2',
    recordId: 'RC-2024-0001',
    message: 'Retry attempt #2 completed with partial recovery',
    timestamp: now - 1000 * 60 * 15,
  },
  {
    id: 'EVT-3',
    recordId: 'RC-2024-0002',
    message: 'Supervisor approved recovery gate',
    timestamp: now - 1000 * 60 * 60 * 2,
  },
  {
    id: 'EVT-4',
    recordId: 'RC-2024-0003',
    message: 'Escalated to on-call supervisor',
    timestamp: now - 1000 * 60 * 5,
  },
];

export function makeBlankDraft(): Partial<AtlasRecord> {
  return {
    id: '',
    title: '',
    summary: '',
    status: 'detected',
    stage: 'triage',
    assignee: '',
    severity: 'medium',
    notes: '',
    prReviewState: 'open',
    retryAttempts: 0,
    supervisorDecision: 'hold',
  };
}
