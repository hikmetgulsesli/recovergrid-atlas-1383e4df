// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - RecoverGrid Atlas
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CircleHelp, Headphones, Kanban, ListFilter, Pencil, Plus, Search, Settings, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export type RecordOperationsRecovergridAtlasActionId = "new-incident-1" | "retry-load-2" | "create-record-3" | "notifications-4" | "help-outline-5" | "edit-notes-6" | "copy-id-7" | "record-operations-1" | "pipeline-board-2" | "settings-3" | "support-4" | "logs-5" | "records-6" | "pipeline-7" | "settings-8";

export interface RecordOperationsRecovergridAtlasProps {
  searchQuery?: string;
  actions?: Partial<Record<RecordOperationsRecovergridAtlasActionId, () => void>> & {
    "search-records"?: (query: string) => void;
  };

}

export function RecordOperationsRecovergridAtlas({ actions, searchQuery = "" }: RecordOperationsRecovergridAtlasProps) {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (localSearchQuery !== searchQuery) {
        actions?.["search-records"]?.(localSearchQuery);
      }
    }, 300);
    return () => window.clearTimeout(timer);
  }, [localSearchQuery, searchQuery, actions]);

  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden lg:flex flex-col h-full py-section-gap px-container-padding bg-surface-container-low border-r border-outline-variant fixed left-0 top-0 w-64 z-40 transition-colors duration-150 ease-in-out">
      <div className="mb-section-gap flex items-center gap-stack-default">
      <img alt="System Node" className="w-8 h-8 rounded bg-surface-variant object-cover" data-alt="A macro shot of a sleek, abstract glowing server node or microchip, primarily in cold blues and deep grays, conveying stability and data processing. The lighting is studio-quality, emphasizing the metallic textures and subtle LED indicators. Highly detailed, futuristic, and utilitarian." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKkTrd8lulC22kYZX3-X3iX8XJUl7QorVA_7rvqphZEKj8naBzN4g4UUCeiIb5Q_B0bIkcUuwZDol0Rh5Sl2mAgVdOlR04qkE5SMrhipYVsWbhHWeMQDTaVhtDiXYFRMGCgmDdqCKhKaPG5v29Ykr_uY-fKGUoofuuIRsJgr6-dAOCxDyO3CXyoE3xj-u3sqkU3Pi-t9h7B7zEO92lMXQplCzPI5DmQfS-abCYsSBwn3-OZ-l_aBe7IbmmcIQJ4vTDveuvBiHdgf8" />
      <div>
      <h1 className="font-display-sm text-display-sm text-on-surface">Atlas Ops</h1>
      <p className="font-label-xs text-label-xs text-on-surface-variant">v2.4.0-stable</p>
      </div>
      </div>
      <button className="mb-section-gap w-full flex items-center justify-center gap-stack-compact bg-primary text-on-primary font-label-md text-label-md py-2 px-4 rounded hover:opacity-90 transition-opacity" type="button" data-action-id="new-incident-1" onClick={actions?.["new-incident-1"]}>
      <Plus  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                  New Incident
              </button>
      <div className="flex-1 flex flex-col gap-unit">
      <a className="flex items-center gap-stack-default px-3 py-2 rounded bg-primary-container text-on-primary-container border-l-2 border-primary transition-colors duration-150 ease-in-out" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <BarChart3  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Record Operations</span>
      </a>
      <a className="flex items-center gap-stack-default px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant hover:bg-surface-container-high transition-colors duration-150 ease-in-out" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <Kanban  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Pipeline Board</span>
      </a>
      <a className="flex items-center gap-stack-default px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant hover:bg-surface-container-high transition-colors duration-150 ease-in-out" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </div>
      <div className="mt-auto flex flex-col gap-unit border-t border-outline-variant pt-stack-default">
      <a className="flex items-center gap-stack-default px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant hover:bg-surface-container-high transition-colors duration-150 ease-in-out" href="#" data-action-id="support-4" onClick={(event) => { event.preventDefault(); actions?.["support-4"]?.(); }}>
      <Headphones  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      <a className="flex items-center gap-stack-default px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant hover:bg-surface-container-high transition-colors duration-150 ease-in-out" href="#" data-action-id="logs-5" onClick={(event) => { event.preventDefault(); actions?.["logs-5"]?.(); }}>
      <Terminal  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Logs</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-64 h-screen">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest border-b border-outline-variant fixed top-0 left-0 w-full z-50 flex items-center justify-between px-gutter h-12 lg:pl-[calc(16rem+12px)] cursor-pointer active:opacity-80">
      <div className="flex items-center gap-gutter">
      <div className="font-headline-sm text-headline-sm font-bold text-primary lg:hidden">RecoverGrid Atlas</div>
      {/* Search on left */}
      <div className="relative hidden sm:block">
      <Search  style={{fontSize: "16px"}} className="absolute left-2 top-1/2 -translate-y-1/2 text-outline" aria-hidden={true} focusable="false" />
      <input className="pl-8 pr-3 py-1 bg-surface-container-low border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 h-8 transition-colors" placeholder="Search records, IDs..." type="text" value={localSearchQuery} onChange={(event) => { setLocalSearchQuery(event.target.value); }} data-action-id="search-records" />
      </div>
      </div>
      <div className="flex items-center gap-gutter h-full">
      <nav className="hidden md:flex items-center gap-stack-default h-full">
      <a className="text-primary border-b-2 border-primary pb-1 h-full flex items-center font-body-md text-body-md px-2 hover:text-primary transition-colors" href="#" data-action-id="records-6" onClick={(event) => { event.preventDefault(); actions?.["records-6"]?.(); }}>Records</a>
      <a className="text-on-surface-variant pb-1 h-full flex items-center font-body-md text-body-md px-2 hover:text-primary transition-colors" href="#" data-action-id="pipeline-7" onClick={(event) => { event.preventDefault(); actions?.["pipeline-7"]?.(); }}>Pipeline</a>
      <a className="text-on-surface-variant pb-1 h-full flex items-center font-body-md text-body-md px-2 hover:text-primary transition-colors" href="#" data-action-id="settings-8" onClick={(event) => { event.preventDefault(); actions?.["settings-8"]?.(); }}>Settings</a>
      </nav>
      <div className="flex items-center gap-stack-compact ml-auto border-l border-outline-variant pl-gutter h-8">
      <button className="h-8 px-3 rounded bg-surface border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors flex items-center gap-1" type="button" data-action-id="retry-load-2" onClick={actions?.["retry-load-2"]}>
                              Retry Load
                          </button>
      <button className="h-8 px-3 rounded bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center gap-1" type="button" data-action-id="create-record-3" onClick={actions?.["create-record-3"]}>
                              Create Record
                          </button>
      <div className="flex items-center gap-stack-compact ml-2 text-on-surface-variant">
      <button className="p-1 hover:bg-surface-variant rounded transition-colors" type="button" aria-label="Notifications" data-action-id="notifications-4" onClick={actions?.["notifications-4"]}><Bell  style={{fontSize: "20px"}} aria-hidden={true} focusable="false" /></button>
      <button className="p-1 hover:bg-surface-variant rounded transition-colors" type="button" aria-label="Help Outline" data-action-id="help-outline-5" onClick={actions?.["help-outline-5"]}><CircleHelp  style={{fontSize: "20px"}} aria-hidden={true} focusable="false" /></button>
      </div>
      <img alt="Operator Profile" className="w-8 h-8 rounded-full ml-2 object-cover border border-outline-variant" data-alt="A tight, professional portrait photo of a focused tech operator or engineer. Subtle, clean studio lighting with a neutral gray background. The person looks alert and professional, conveying expertise. The style is hyper-realistic and high-quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrARQQqLc6aN__GHel27u8yNWVMIudiwvHDJercSKdBAvsDRVk-d95OLqtTeozLXrCKAVEeVTZcTy0aREMoysXX3WkvzUlHIfhd6RIRBi2pHLTzid12zsX_HQwA1eAsTm61XmiZAgX-mevt6E_lHG1kam654_Pd-jI98KZhDuYswBw8Tc67Q0dkjXrDNaeDAYU_gzxzHvjt0qKWy9DVn_y1WYMJ-I5O6FU4L-QwAi-SF-XE_wyRILYwZcYmUFKMjZHDTZNPOKjVj0" />
      </div>
      </div>
      </header>
      {/* Workspace Canvas */}
      <main className="flex-1 mt-12 flex overflow-hidden bg-background">
      {/* Left/Center Data Canvas */}
      <div className="flex-1 flex flex-col p-container-padding gap-container-padding overflow-y-auto">
      {/* Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-unit">
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-col">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Total Incidents</span>
      <span className="font-display-sm text-display-sm text-on-surface mt-1">1,204</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-col">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Pending Retries</span>
      <span className="font-display-sm text-display-sm text-secondary mt-1">42</span>
      </div>
      <div className="bg-surface-container-lowest border border-error-container rounded p-3 flex flex-col bg-red-50">
      <span className="font-label-xs text-label-xs text-error uppercase tracking-wider">Blocked</span>
      <span className="font-display-sm text-display-sm text-error mt-1">7</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-col">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Resolved (24h)</span>
      <span className="font-display-sm text-display-sm text-primary mt-1">156</span>
      </div>
      </div>
      {/* Filters & Controls */}
      <div className="flex flex-wrap items-center gap-stack-default bg-surface-container-lowest border border-outline-variant rounded p-2">
      <div className="flex items-center gap-2">
      <ListFilter  style={{fontSize: "18px"}} className="text-outline" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md text-on-surface-variant">Filters:</span>
      </div>
      <select className="h-8 py-0 pl-2 pr-8 border border-outline-variant rounded bg-surface font-body-sm text-body-sm text-on-surface focus:ring-1 focus:ring-primary focus:border-primary">
      <option>Status: All</option>
      <option>Blocked</option>
      <option>Pending</option>
      <option>Active</option>
      </select>
      <select className="h-8 py-0 pl-2 pr-8 border border-outline-variant rounded bg-surface font-body-sm text-body-sm text-on-surface focus:ring-1 focus:ring-primary focus:border-primary">
      <option>Owner: Me</option>
      <option>Team Alpha</option>
      <option>Unassigned</option>
      </select>
      <select className="h-8 py-0 pl-2 pr-8 border border-outline-variant rounded bg-surface font-body-sm text-body-sm text-on-surface focus:ring-1 focus:ring-primary focus:border-primary">
      <option>Time: Last 24h</option>
      <option>Last 7 Days</option>
      <option>All Time</option>
      </select>
      </div>
      {/* Data Table */}
      <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded overflow-hidden flex flex-col">
      <div className="overflow-x-auto flex-1">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-low border-b border-outline-variant font-label-xs text-label-xs text-on-surface-variant">
      <th className="p-3 font-medium w-24">ID</th>
      <th className="p-3 font-medium w-24">Status</th>
      <th className="p-3 font-medium">Title</th>
      <th className="p-3 font-medium w-32">Owner</th>
      <th className="p-3 font-medium w-32">PR State</th>
      <th className="p-3 font-medium w-40">Last Activity</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm divide-y divide-outline-variant">
      {/* Row 1 Active */}
      <tr className="bg-primary-container/5 border-l-2 border-l-primary cursor-pointer hover:bg-surface-variant/50 transition-colors">
      <td className="p-3 font-label-md text-label-md text-primary">RG-1024</td>
      <td className="p-3">
      <span className="inline-flex items-center px-2 py-0.5 rounded bg-error/10 text-error font-label-xs text-label-xs border border-error/20">Blocked</span>
      </td>
      <td className="p-3 text-on-surface font-medium truncate max-w-xs">Data node sync failure in cluster eu-west-1</td>
      <td className="p-3 text-on-surface-variant">J. Smith</td>
      <td className="p-3">
      <span className="inline-flex items-center gap-1 text-on-surface-variant">
      <BadgeHelp  style={{fontSize: "14px"}} className="text-outline" aria-hidden={true} focusable="false" />
                                                  Open
                                              </span>
      </td>
      <td className="p-3 text-on-surface-variant font-label-md text-label-md">10:42 AM</td>
      </tr>
      {/* Row 2 */}
      <tr className="cursor-pointer hover:bg-surface-variant/50 transition-colors">
      <td className="p-3 font-label-md text-label-md text-on-surface-variant">RG-1023</td>
      <td className="p-3">
      <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-variant text-on-surface font-label-xs text-label-xs border border-outline-variant">Pending</span>
      </td>
      <td className="p-3 text-on-surface truncate max-w-xs">Timeout during high-volume index rebuild</td>
      <td className="p-3 text-on-surface-variant">System</td>
      <td className="p-3 text-outline">-</td>
      <td className="p-3 text-on-surface-variant font-label-md text-label-md">09:15 AM</td>
      </tr>
      {/* Row 3 */}
      <tr className="cursor-pointer hover:bg-surface-variant/50 transition-colors">
      <td className="p-3 font-label-md text-label-md text-on-surface-variant">RG-1022</td>
      <td className="p-3">
      <span className="inline-flex items-center px-2 py-0.5 rounded bg-primary/10 text-primary font-label-xs text-label-xs border border-primary/20">Active</span>
      </td>
      <td className="p-3 text-on-surface truncate max-w-xs">Manual override: Schema migration rollback</td>
      <td className="p-3 text-on-surface-variant">A. Chen</td>
      <td className="p-3">
      <span className="inline-flex items-center gap-1 text-primary">
      <BadgeHelp  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
                                                  Merged
                                              </span>
      </td>
      <td className="p-3 text-on-surface-variant font-label-md text-label-md">Yesterday</td>
      </tr>
      {/* Row 4 */}
      <tr className="cursor-pointer hover:bg-surface-variant/50 transition-colors">
      <td className="p-3 font-label-md text-label-md text-on-surface-variant">RG-1021</td>
      <td className="p-3">
      <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-variant text-on-surface font-label-xs text-label-xs border border-outline-variant">Resolved</span>
      </td>
      <td className="p-3 text-on-surface-variant truncate max-w-xs line-through opacity-70">False positive alert on memory spike</td>
      <td className="p-3 text-on-surface-variant opacity-70">J. Smith</td>
      <td className="p-3 text-outline opacity-70">-</td>
      <td className="p-3 text-on-surface-variant font-label-md text-label-md opacity-70">Yesterday</td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      {/* Right Inspector Panel */}
      <aside className="hidden xl:flex w-80 bg-surface-container-lowest border-l border-outline-variant flex-col overflow-y-auto">
      {/* Inspector Header */}
      <div className="p-container-padding border-b border-outline-variant flex flex-col gap-unit sticky top-0 bg-surface-container-lowest z-10">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md text-primary font-bold">RG-1024</span>
      <span className="inline-flex items-center px-2 py-0.5 rounded bg-error/10 text-error font-label-xs text-label-xs border border-error/20">Blocked</span>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1 leading-tight">Data node sync failure in cluster eu-west-1</h2>
      <div className="flex items-center gap-2 mt-2">
      <button className="flex-1 h-8 px-2 rounded bg-surface border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors flex items-center justify-center gap-1" type="button" data-action-id="edit-notes-6" onClick={actions?.["edit-notes-6"]}>
      <Pencil  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                  Edit Notes
                              </button>
      <button className="h-8 w-8 rounded bg-surface border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors flex items-center justify-center" title="Copy ID" type="button" data-action-id="copy-id-7" onClick={actions?.["copy-id-7"]}>
      <BadgeHelp  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Inspector Content */}
      <div className="p-container-padding flex flex-col gap-section-gap">
      {/* Recovery Notes */}
      <div className="flex flex-col gap-unit">
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Recovery Notes</h3>
      <div className="bg-surface-container-low border border-outline-variant rounded p-2 font-label-xs text-label-xs text-on-surface-variant leading-relaxed h-32 overflow-y-auto font-mono">
      <span className="text-secondary">&gt; Connecting to eu-west-1 master node... OK</span><br />
      <span className="text-secondary">&gt; Verifying replication lag... WARN: Lag &gt; 500ms</span><br />
      &gt; Initializing forced resync protocol.<br />
      &gt; Expected duration: ~45 mins.<br />
      <span className="text-error">FATAL: Partition /dev/sdb1 full. Resync aborted.</span><br />
      _
                              </div>
      </div>
      {/* Timeline */}
      <div className="flex flex-col gap-stack-default">
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Recovery Timeline</h3>
      <div className="relative pl-6 pb-4">
      <div className="absolute left-2.5 top-2 bottom-0 w-px bg-outline-variant"></div>
      {/* Timeline Item: Error */}
      <div className="relative mb-4">
      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-error border-2 border-surface-container-lowest"></div>
      <div className="font-label-md text-label-md text-on-surface">Sync Aborted</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Partition full error detected.</div>
      <div className="font-label-xs text-label-xs text-outline mt-1">10:42 AM - System</div>
      </div>
      {/* Timeline Item: Info */}
      <div className="relative mb-4">
      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-surface-variant border-2 border-surface-container-lowest"></div>
      <div className="font-label-md text-label-md text-on-surface">Resync Protocol Initiated</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Manual override by J. Smith.</div>
      <div className="font-label-xs text-label-xs text-outline mt-1">10:15 AM - J. Smith</div>
      </div>
      {/* Timeline Item: Alert */}
      <div className="relative">
      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-tertiary-container border-2 border-surface-container-lowest"></div>
      <div className="font-label-md text-label-md text-on-surface">Replication Lag Alert</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Lag exceeded threshold (500ms).</div>
      <div className="font-label-xs text-label-xs text-outline mt-1">09:58 AM - System Auto</div>
      </div>
      </div>
      </div>
      </div>
      </aside>
      </main>
      </div>
    </>
  );
}
