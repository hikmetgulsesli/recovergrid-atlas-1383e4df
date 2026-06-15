// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - RecoverGrid Atlas
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeAlert, BarChart3, Bell, CircleHelp, CloudOff, Database, FilterX, Headphones, Kanban, Plus, RefreshCw, Search, SearchX, Server, Settings, Terminal, User } from "lucide-react";


export type EmptyAndErrorRecoveryRecovergridAtlasActionId = "new-incident-1" | "retry-load-2" | "create-record-3" | "notifications-4" | "help-outline-5" | "show-empty-6" | "show-error-7" | "create-first-record-8" | "clear-filters-9" | "copy-log-10" | "retry-load-11" | "contact-support-12" | "record-operations-1" | "pipeline-board-2" | "settings-3" | "support-4" | "logs-5" | "records-6" | "pipeline-7" | "settings-8" | "import-from-csv-9" | "view-documentation-10";

export interface EmptyAndErrorRecoveryRecovergridAtlasProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryRecovergridAtlasActionId, () => void>>;

}

export function EmptyAndErrorRecoveryRecovergridAtlas({ actions }: EmptyAndErrorRecoveryRecovergridAtlasProps) {
  return (
    <>
      {/* SideNavBar (Hidden on Mobile, Flex on Desktop) */}
      <aside className="hidden lg:flex flex-col h-full py-section-gap px-container-padding bg-surface-container-low dark:bg-on-background fixed left-0 top-0 w-64 border-r border-outline-variant dark:border-outline z-40 transition-colors duration-150 ease-in-out shrink-0">
      {/* Header */}
      <div className="mb-section-gap flex items-center gap-3">
      <div className="w-10 h-10 rounded-DEFAULT bg-primary flex items-center justify-center shrink-0">
      <Server className="text-on-primary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-display-sm text-display-sm text-on-surface dark:text-inverse-on-surface">Atlas Ops</h1>
      <p className="font-label-xs text-label-xs text-on-surface-variant">v2.4.0-stable</p>
      </div>
      </div>
      {/* CTA */}
      <button className="w-full bg-primary hover:bg-surface-tint text-on-primary rounded-DEFAULT py-2 px-4 mb-section-gap font-label-md text-label-md flex items-center justify-center gap-2 transition-colors" type="button" data-action-id="new-incident-1" onClick={actions?.["new-incident-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                  New Incident
              </button>
      {/* Navigation Tabs */}
      <nav className="flex-1 space-y-1">
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary border-l-2 border-primary font-label-md text-label-md transition-colors" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <BarChart3 className="text-[20px]" aria-hidden={true} focusable="false" />
                      Record Operations
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-variant font-label-md text-label-md transition-colors" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <Kanban className="text-[20px]" aria-hidden={true} focusable="false" />
                      Pipeline Board
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-variant font-label-md text-label-md transition-colors" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      </nav>
      {/* Footer Tabs */}
      <div className="mt-auto space-y-1 pt-section-gap border-t border-outline-variant/30">
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-variant font-label-md text-label-md transition-colors" href="#" data-action-id="support-4" onClick={(event) => { event.preventDefault(); actions?.["support-4"]?.(); }}>
      <Headphones className="text-[20px]" aria-hidden={true} focusable="false" />
                      Support
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-variant font-label-md text-label-md transition-colors" href="#" data-action-id="logs-5" onClick={(event) => { event.preventDefault(); actions?.["logs-5"]?.(); }}>
      <Terminal className="text-[20px]" aria-hidden={true} focusable="false" />
                      Logs
                  </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:ml-64 relative min-w-0 h-full overflow-y-auto">
      {/* TopNavBar (Mobile mainly, or contextual on desktop) */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-gutter h-12 bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shrink-0">
      {/* Mobile Brand */}
      <div className="lg:hidden flex items-center gap-2">
      <Server className="text-primary dark:text-primary-fixed" aria-hidden={true} focusable="false" />
      <span className="text-headline-sm font-headline-sm font-bold text-primary dark:text-primary-fixed">RecoverGrid Atlas</span>
      </div>
      {/* Contextual Title / Search area (Desktop) */}
      <div className="hidden lg:flex items-center flex-1 ml-4">
      <div className="relative w-64">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-8 pr-3 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/50" placeholder="Search records (Ctrl+K)" type="text" />
      </div>
      </div>
      {/* Desktop Nav Links (If needed contextually, usually handled by Sidebar, but following JSON structure) */}
      <nav className="hidden md:flex items-center gap-6 mx-4">
      <a className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-body-md text-body-md cursor-pointer hover:text-primary dark:hover:text-primary-fixed transition-colors active:opacity-80" href="#" data-action-id="records-6" onClick={(event) => { event.preventDefault(); actions?.["records-6"]?.(); }}>Records</a>
      <a className="text-on-surface-variant dark:text-surface-variant pb-1 font-body-md text-body-md cursor-pointer hover:text-primary dark:hover:text-primary-fixed transition-colors active:opacity-80" href="#" data-action-id="pipeline-7" onClick={(event) => { event.preventDefault(); actions?.["pipeline-7"]?.(); }}>Pipeline</a>
      <a className="text-on-surface-variant dark:text-surface-variant pb-1 font-body-md text-body-md cursor-pointer hover:text-primary dark:hover:text-primary-fixed transition-colors active:opacity-80" href="#" data-action-id="settings-8" onClick={(event) => { event.preventDefault(); actions?.["settings-8"]?.(); }}>Settings</a>
      </nav>
      {/* Actions */}
      <div className="flex items-center gap-3">
      <button className="hidden sm:flex items-center justify-center h-8 px-3 text-on-surface-variant border border-outline-variant hover:bg-surface-container-high rounded-DEFAULT font-label-md text-label-md transition-colors" type="button" data-action-id="retry-load-2" onClick={actions?.["retry-load-2"]}>
                          Retry Load
                      </button>
      <button className="hidden sm:flex items-center justify-center h-8 px-3 bg-primary text-on-primary hover:bg-surface-tint rounded-DEFAULT font-label-md text-label-md transition-colors" type="button" data-action-id="create-record-3" onClick={actions?.["create-record-3"]}>
                          Create Record
                      </button>
      <div className="flex items-center gap-1 border-l border-outline-variant pl-3 ml-1">
      <button className="p-1 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors cursor-pointer active:opacity-80" type="button" aria-label="Notifications" data-action-id="notifications-4" onClick={actions?.["notifications-4"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-1 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors cursor-pointer active:opacity-80" type="button" aria-label="Help Outline" data-action-id="help-outline-5" onClick={actions?.["help-outline-5"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant ml-2 overflow-hidden flex items-center justify-center">
      <User className="text-on-surface-variant text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </header>
      {/* Canvas */}
      <div className="flex-1 p-container-padding lg:p-section-gap flex flex-col gap-section-gap items-center justify-center">
      {/* Toggle for Demo Purposes (Not part of final design normally, but useful for previewing both states) */}
      <div className="absolute top-16 right-container-padding flex gap-2 bg-surface-container-lowest p-2 rounded-DEFAULT border border-outline-variant shadow-sm z-10">
      <button className="px-3 py-1 bg-surface-variant text-on-surface font-label-xs rounded-DEFAULT border border-outline-variant hover:bg-surface-container-high" id="showEmptyBtn" type="button" data-action-id="show-empty-6" onClick={actions?.["show-empty-6"]}>Show Empty</button>
      <button className="px-3 py-1 bg-surface-lowest text-on-surface font-label-xs rounded-DEFAULT border border-outline-variant hover:bg-surface-container-high" id="showErrorBtn" type="button" data-action-id="show-error-7" onClick={actions?.["show-error-7"]}>Show Error</button>
      </div>
      {/* EMPTY STATE CONTAINER */}
      <div className="w-full max-w-2xl bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-12 flex flex-col items-center text-center" id="emptyState">
      <div className="w-24 h-24 mb-6 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/50 relative">
      <Database className="text-[48px] text-outline" aria-hidden={true} focusable="false" />
      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-surface-container-lowest rounded-full border border-outline-variant flex items-center justify-center">
      <SearchX className="text-[16px] text-outline" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <h2 className="font-display-sm text-display-sm text-on-surface mb-2">No records found</h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-8">
                          The Record Operations surface currently has no data matching your active criteria. Try clearing active filters or initiate a new data entry.
                      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <button className="h-10 px-6 bg-primary text-on-primary hover:bg-surface-tint rounded-DEFAULT font-label-md text-label-md transition-colors flex items-center justify-center gap-2" type="button" data-action-id="create-first-record-8" onClick={actions?.["create-first-record-8"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                              Create First Record
                          </button>
      <button className="h-10 px-6 text-on-surface border border-outline-variant hover:bg-surface-container-low rounded-DEFAULT font-label-md text-label-md transition-colors flex items-center justify-center gap-2" type="button" data-action-id="clear-filters-9" onClick={actions?.["clear-filters-9"]}>
      <FilterX className="text-[18px]" aria-hidden={true} focusable="false" />
                              Clear Filters
                          </button>
      </div>
      <div className="mt-8 pt-8 border-t border-outline-variant/30 w-full flex flex-col items-center">
      <span className="font-label-xs text-label-xs text-outline mb-3 uppercase tracking-wider">Quick Actions</span>
      <div className="flex gap-4">
      <a className="text-primary hover:underline font-body-sm text-body-sm" href="#" data-action-id="import-from-csv-9" onClick={(event) => { event.preventDefault(); actions?.["import-from-csv-9"]?.(); }}>Import from CSV</a>
      <span className="text-outline-variant">•</span>
      <a className="text-primary hover:underline font-body-sm text-body-sm" href="#" data-action-id="view-documentation-10" onClick={(event) => { event.preventDefault(); actions?.["view-documentation-10"]?.(); }}>View Documentation</a>
      </div>
      </div>
      </div>
      {/* ERROR STATE CONTAINER (Initially hidden) */}
      <div className="w-full max-w-2xl bg-surface-container-lowest border border-error-container rounded-DEFAULT p-12 flex flex-col items-center text-center hidden relative overflow-hidden" id="errorState">
      {/* Subtle Error Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-2 bg-error"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-error-container/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="w-24 h-24 mb-6 rounded-full bg-error-container flex items-center justify-center border border-error/20 relative z-10">
      <CloudOff className="text-[48px] text-error" aria-hidden={true} focusable="false" />
      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-surface-container-lowest rounded-full border border-error flex items-center justify-center">
      <BadgeAlert className="text-[16px] text-error" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex items-center gap-2 mb-2 z-10">
      <span className="px-2 py-0.5 bg-error text-on-error font-label-xs text-label-xs rounded-sm">ERR-502</span>
      <h2 className="font-display-sm text-display-sm text-on-surface">System failed to load records</h2>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-8 z-10">
                          The connection to the upstream data provider timed out. This is usually a temporary network issue or a scheduled maintenance window.
                      </p>
      {/* Technical Details Block */}
      <div className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT p-4 mb-8 text-left z-10">
      <div className="flex items-center justify-between mb-2">
      <span className="font-label-xs text-label-xs text-outline uppercase tracking-wider">Diagnostic Info</span>
      <button className="text-primary hover:underline font-label-xs text-label-xs" type="button" data-action-id="copy-log-10" onClick={actions?.["copy-log-10"]}>Copy Log</button>
      </div>
      <code className="font-label-md text-label-md text-on-surface-variant block whitespace-pre-wrap break-all">Timestamp: 2023-10-27T14:32:01Z
      Node: atlas-worker-04
      Trace_ID: 8f9a2b3c-4d5e-6f7g-8h9i
      Message: Upstream gateway timeout (504) reaching cluster endpoint.</code>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto z-10">
      <button className="h-10 px-8 bg-primary text-on-primary hover:bg-surface-tint rounded-DEFAULT font-label-md text-label-md transition-colors flex items-center justify-center gap-2 shadow-sm" type="button" data-action-id="retry-load-11" onClick={actions?.["retry-load-11"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                              Retry Load
                          </button>
      <button className="h-10 px-6 text-on-surface border border-outline-variant hover:bg-surface-container-low rounded-DEFAULT font-label-md text-label-md transition-colors flex items-center justify-center gap-2" type="button" data-action-id="contact-support-12" onClick={actions?.["contact-support-12"]}>
      <Headphones className="text-[18px]" aria-hidden={true} focusable="false" />
                              Contact Support
                          </button>
      </div>
      </div>
      </div>
      </main>
      {/* Simple script to toggle states for demonstration */}
      
    </>
  );
}
