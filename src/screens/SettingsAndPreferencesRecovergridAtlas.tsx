// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - RecoverGrid Atlas
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, BellRing, CheckCircle2, Headphones, Kanban, ListFilter, Menu, Plus, Save, Server, Settings, SlidersHorizontal, Terminal } from "lucide-react";


export type SettingsAndPreferencesRecovergridAtlasActionId = "menu-1" | "new-incident-2" | "reset-to-defaults-3" | "save-preferences-4" | "manage-all-5" | "reset-6" | "save-preferences-7" | "record-operations-1" | "pipeline-board-2" | "settings-3" | "support-4" | "logs-5";

export interface SettingsAndPreferencesRecovergridAtlasProps {
  actions?: Partial<Record<SettingsAndPreferencesRecovergridAtlasActionId, () => void>>;

}

export function SettingsAndPreferencesRecovergridAtlas({ actions }: SettingsAndPreferencesRecovergridAtlasProps) {
  return (
    <>
      {/* TopNavBar for Mobile (Visible on < lg screens) */}
      <nav className="lg:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-between px-gutter h-12 bg-surface-container-lowest border-b border-outline-variant">
      <div className="flex items-center gap-2">
      <span className="font-headline-sm text-headline-sm font-bold text-primary">RecoverGrid Atlas</span>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80" type="button" aria-label="Menu" data-action-id="menu-1" onClick={actions?.["menu-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      </div>
      </nav>
      {/* SideNavBar (Visible on lg+ screens) */}
      <aside className="hidden lg:flex flex-col h-full py-section-gap px-container-padding bg-surface-container-low w-64 border-r border-outline-variant shrink-0 relative z-10 transition-colors duration-150 ease-in-out">
      <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center shrink-0">
      <Server className="text-on-primary-container fill" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-display-sm text-display-sm text-on-surface leading-tight">Atlas Ops</h1>
      <p className="font-label-xs text-label-xs text-on-surface-variant mt-1">v2.4.0-stable</p>
      </div>
      </div>
      <button className="w-full bg-primary text-on-primary h-8 rounded flex items-center justify-center gap-2 mb-6 hover:bg-primary/90 transition-colors" type="button" data-action-id="new-incident-2" onClick={actions?.["new-incident-2"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">New Incident</span>
      </button>
      <nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
      <a className="flex items-center gap-3 px-3 py-2 rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <BarChart3 className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span>Record Operations</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <Kanban className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span>Pipeline Board</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded font-label-md text-label-md bg-primary-container text-on-primary-container border-l-2 border-primary" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      </nav>
      <div className="mt-auto pt-4 border-t border-outline-variant flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2 rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#" data-action-id="support-4" onClick={(event) => { event.preventDefault(); actions?.["support-4"]?.(); }}>
      <Headphones className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span>Support</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#" data-action-id="logs-5" onClick={(event) => { event.preventDefault(); actions?.["logs-5"]?.(); }}>
      <Terminal className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span>Logs</span>
      </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background relative pt-12 lg:pt-0">
      {/* Workspace Header */}
      <header className="px-section-gap py-gutter border-b border-outline-variant bg-surface-container-lowest shrink-0 flex items-center justify-between">
      <div>
      <h2 className="font-display-sm text-display-sm text-on-surface">Settings and Preferences</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage your operational workspace configurations.</p>
      </div>
      <div className="flex items-center gap-3 hidden sm:flex">
      <button className="h-8 px-4 rounded border border-outline text-secondary font-label-md text-label-md hover:bg-surface-variant transition-colors" type="button" data-action-id="reset-to-defaults-3" onClick={actions?.["reset-to-defaults-3"]}>
                          Reset to Defaults
                      </button>
      <button className="h-8 px-4 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/90 transition-colors flex items-center gap-2" type="button" data-action-id="save-preferences-4" onClick={actions?.["save-preferences-4"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" />
                          Save Preferences
                      </button>
      </div>
      </header>
      {/* Scrollable Content Canvas */}
      <div className="flex-1 overflow-y-auto p-section-gap">
      <div className="max-w-4xl mx-auto space-y-section-gap">
      {/* Section: General Workflow */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
      <div className="px-container-padding py-gutter border-b border-outline-variant bg-surface-container-low flex items-center gap-2">
      <SlidersHorizontal className="text-secondary text-[20px]" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-sm text-headline-sm text-on-surface">General Workflow</h3>
      </div>
      <div className="p-container-padding space-y-6">
      {/* Default View Selection */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-2">Default Operation View</label>
      <div className="flex gap-4">
      <label className="flex-1 relative cursor-pointer group">
      <input defaultChecked={true} className="peer sr-only" name="default_view" type="radio" defaultValue="list" />
      <div className="p-4 border border-outline-variant rounded bg-surface peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:ring-1 peer-checked:ring-primary transition-colors group-hover:border-outline">
      <div className="flex items-center justify-between mb-2">
      <span className="font-label-md text-label-md text-on-surface">Data Grid (List)</span>
      <CheckCircle2 className="text-[20px] text-primary hidden peer-checked:block" aria-hidden={true} focusable="false" />
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">High-density tabular view for batch operations.</p>
      </div>
      </label>
      <label className="flex-1 relative cursor-pointer group">
      <input className="peer sr-only" name="default_view" type="radio" defaultValue="board" />
      <div className="p-4 border border-outline-variant rounded bg-surface peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:ring-1 peer-checked:ring-primary transition-colors group-hover:border-outline">
      <div className="flex items-center justify-between mb-2">
      <span className="font-label-md text-label-md text-on-surface">Pipeline Board</span>
      <CheckCircle2 className="text-[20px] text-primary hidden peer-checked:block" aria-hidden={true} focusable="false" />
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Kanban-style tracking for sequential workflows.</p>
      </div>
      </label>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* UI Density Selection */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-2">Interface Density</label>
      <select className="w-full max-w-xs h-8 px-3 border border-outline rounded bg-surface-container-lowest font-body-sm text-body-sm text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none appearance-none">
      <option value="compact">Compact (Max Rows)</option>
      <option value="comfortable">Comfortable (Standard Padding)</option>
      </select>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Compact mode reduces padding to display more records above the fold.</p>
      </div>
      </div>
      </section>
      {/* Section: Saved Filters */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
      <div className="px-container-padding py-gutter border-b border-outline-variant bg-surface-container-low flex items-center justify-between">
      <div className="flex items-center gap-2">
      <ListFilter className="text-secondary text-[20px]" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Saved Filters</h3>
      </div>
      <button className="text-primary font-label-md text-label-md hover:underline" type="button" data-action-id="manage-all-5" onClick={actions?.["manage-all-5"]}>Manage All</button>
      </div>
      <div className="p-0">
      <div className="divide-y divide-outline-variant">
      {/* Filter Item 1 */}
      <div className="p-container-padding flex items-center justify-between hover:bg-surface-variant transition-colors">
      <div>
      <p className="font-label-md text-label-md text-on-surface flex items-center gap-2">
                                              Critical Failures (T-24h)
                                              <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-xs text-label-xs">Active Default</span>
      </p>
      <p className="font-label-xs text-label-xs text-on-surface-variant font-mono mt-1">status:failed AND severity:critical AND time:&gt;now-24h</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      {/* Filter Item 2 */}
      <div className="p-container-padding flex items-center justify-between hover:bg-surface-variant transition-colors">
      <div>
      <p className="font-label-md text-label-md text-on-surface">Pending Gate Approvals</p>
      <p className="font-label-xs text-label-xs text-on-surface-variant font-mono mt-1">status:pending_gate AND assignee:me</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      {/* Filter Item 3 */}
      <div className="p-container-padding flex items-center justify-between hover:bg-surface-variant transition-colors">
      <div>
      <p className="font-label-md text-label-md text-on-surface">Recent Recoveries (Last 7 Days)</p>
      <p className="font-label-xs text-label-xs text-on-surface-variant font-mono mt-1">status:recovered AND time:&gt;now-7d</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      </div>
      </section>
      {/* Section: Notification Rules */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden mb-12 lg:mb-0">
      <div className="px-container-padding py-gutter border-b border-outline-variant bg-surface-container-low flex items-center gap-2">
      <BellRing className="text-secondary text-[20px]" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Alert Configuration</h3>
      </div>
      <div className="p-container-padding space-y-4">
      <label className="flex items-start gap-3 cursor-pointer group">
      <div className="flex items-center h-5">
      <input defaultChecked={true} className="w-4 h-4 text-primary bg-surface border-outline rounded focus:ring-primary focus:ring-1" id="notif_new" type="checkbox" />
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">New Incident Assigned</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Notify when a high-severity ticket is routed to your queue.</span>
      </div>
      </label>
      <label className="flex items-start gap-3 cursor-pointer group">
      <div className="flex items-center h-5">
      <input defaultChecked={true} className="w-4 h-4 text-primary bg-surface border-outline rounded focus:ring-primary focus:ring-1" id="notif_retry" type="checkbox" />
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">Automated Retry Failure</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Alert immediately if an automated recovery pipeline terminates unexpectedly.</span>
      </div>
      </label>
      <label className="flex items-start gap-3 cursor-pointer group">
      <div className="flex items-center h-5">
      <input className="w-4 h-4 text-primary bg-surface border-outline rounded focus:ring-primary focus:ring-1" id="notif_gate" type="checkbox" />
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">Gate Outcome Update</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Receive digests for manual intervention gates concluding.</span>
      </div>
      </label>
      </div>
      </section>
      {/* Mobile Actions (Sticky Bottom) */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full p-4 bg-surface-container-lowest border-t border-outline-variant flex gap-3 z-40">
      <button className="flex-1 h-10 rounded border border-outline text-secondary font-label-md text-label-md hover:bg-surface-variant transition-colors" type="button" data-action-id="reset-6" onClick={actions?.["reset-6"]}>
                              Reset
                          </button>
      <button className="flex-[2] h-10 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/90 transition-colors" type="button" data-action-id="save-preferences-7" onClick={actions?.["save-preferences-7"]}>
                              Save Preferences
                          </button>
      </div>
      </div>
      </div>
      {/* Toast Notification */}
      <div className="fixed bottom-section-gap right-section-gap bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded shadow-lg flex items-center gap-3 transform translate-y-20 opacity-0 transition-colors duration-300 z-50" id="toast">
      <CheckCircle2 className="text-primary-fixed text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Settings saved successfully.</span>
      </div>
      </main>
      
    </>
  );
}
