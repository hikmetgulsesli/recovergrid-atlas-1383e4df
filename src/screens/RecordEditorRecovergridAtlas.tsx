// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - RecoverGrid Atlas
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, ChevronDown, ChevronRight, CircleAlert, Code, Home, Info, Save } from "lucide-react";


export type RecordEditorRecovergridAtlasActionId = "cancel-1" | "save-record-2" | "bold-3" | "italic-4" | "code-block-5" | "attach-log-6" | "discard-changes-7" | "save-record-8" | "atlas-ops-1" | "record-operations-2";

export interface RecordEditorRecovergridAtlasProps {
  actions?: Partial<Record<RecordEditorRecovergridAtlasActionId, () => void>>;

}

export function RecordEditorRecovergridAtlas({ actions }: RecordEditorRecovergridAtlasProps) {
  return (
    <>
      {/* Unsaved State Banner */}
      <div className="bg-surface-container-high border-b border-outline-variant px-container-padding py-2 flex items-center justify-center gap-2 text-on-surface-variant font-label-md text-label-md sticky top-0 z-40">
      <Info className="text-[16px]" aria-hidden={true} focusable="false" />
      <span>You have unsaved changes.</span>
      </div>
      <main className="flex-grow flex flex-col max-w-4xl w-full mx-auto p-section-gap pt-6 gap-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
      <a className="hover:text-primary transition-colors flex items-center gap-1" href="#" data-action-id="atlas-ops-1" onClick={(event) => { event.preventDefault(); actions?.["atlas-ops-1"]?.(); }}>
      <Home className="text-[16px]" aria-hidden={true} focusable="false" />
                      Atlas Ops
                  </a>
      <ChevronRight className="text-[16px]" aria-hidden={true} focusable="false" />
      <a className="hover:text-primary transition-colors" href="#" data-action-id="record-operations-2" onClick={(event) => { event.preventDefault(); actions?.["record-operations-2"]?.(); }}>Record Operations</a>
      <ChevronRight className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="text-on-surface">Edit Record #REC-8492</span>
      </nav>
      {/* Header */}
      <header className="flex items-start justify-between gap-4 border-b border-outline-variant pb-4">
      <div>
      <h1 className="font-display-sm text-display-sm text-on-surface mb-1">Edit Record #REC-8492</h1>
      <p className="text-on-surface-variant">Update the details for the current recovery operation.</p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
      <button className="h-8 px-4 border border-outline text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-2" type="button" data-action-id="cancel-1" onClick={actions?.["cancel-1"]}>
                          Cancel
                      </button>
      <button className="h-8 px-4 bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-primary-container transition-colors flex items-center gap-2" type="button" data-action-id="save-record-2" onClick={actions?.["save-record-2"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" />
                          Save Record
                      </button>
      </div>
      </header>
      {/* Form Editor */}
      <form className="bg-surface-container-lowest border border-surface-variant rounded flex flex-col">
      <div className="p-container-padding flex flex-col gap-section-gap">
      {/* Section 1: Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-1 md:col-span-2">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="record_title">
                                  Record Title <span className="text-error">*</span>
      </label>
      <input className="h-8 px-3 border border-error bg-error-container/10 text-on-surface rounded font-body-md text-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow" id="record_title" placeholder="e.g. Database Sync Failure - Node A" type="text" defaultValue="" />
      <p className="font-body-sm text-body-sm text-error flex items-center gap-1 mt-1">
      <CircleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                                  Title is required
                              </p>
      </div>
      <div className="flex flex-col gap-1 md:col-span-2">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="description">
                                  Description
                              </label>
      <textarea className="p-3 border border-outline-variant bg-surface text-on-surface rounded font-body-md text-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow resize-y" id="description" placeholder="Provide a detailed summary of the incident..." rows={3}></textarea>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Section 2: Classification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="incident_type">
                                  Incident Type <span className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full h-8 px-3 pr-8 border border-outline-variant bg-surface text-on-surface rounded font-body-md text-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow appearance-none" id="incident_type">
      <option disabled={true} selected={true} value="">Select type...</option>
      <option value="hardware">Hardware Failure</option>
      <option value="software">Software Exception</option>
      <option value="network">Network Outage</option>
      <option value="security">Security Breach</option>
      </select>
      <ChevronDown className="absolute right-2 top-1.5 text-on-surface-variant pointer-events-none text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="supervisor">
                                  Supervisor <span className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full h-8 px-3 pr-8 border border-outline-variant bg-surface text-on-surface rounded font-body-md text-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow appearance-none" id="supervisor">
      <option disabled={true} selected={true} value="">Assign supervisor...</option>
      <option value="sys_admin_1">J. Doe (SysAdmin)</option>
      <option value="net_eng_1">A. Smith (NetEng)</option>
      <option value="sec_ops">T. Wong (SecOps)</option>
      </select>
      <ChevronDown className="absolute right-2 top-1.5 text-on-surface-variant pointer-events-none text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1">
                                  Severity Level <span className="text-error">*</span>
      </label>
      <div className="flex flex-wrap gap-4">
      <label className="flex items-center gap-2 cursor-pointer group">
      <input className="w-4 h-4 text-primary focus:ring-primary border-outline-variant cursor-pointer" name="severity" type="radio" defaultValue="low" />
      <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">Low (P4)</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer group">
      <input className="w-4 h-4 text-primary focus:ring-primary border-outline-variant cursor-pointer" name="severity" type="radio" defaultValue="medium" />
      <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">Medium (P3)</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer group">
      <input className="w-4 h-4 text-primary focus:ring-primary border-outline-variant cursor-pointer" name="severity" type="radio" defaultValue="high" />
      <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">High (P2)</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer group">
      <input className="w-4 h-4 text-error focus:ring-error border-outline-variant cursor-pointer" name="severity" type="radio" defaultValue="critical" />
      <span className="text-error font-medium">Critical (P1)</span>
      </label>
      </div>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Section 3: Recovery Notes (Monospace/Log style) */}
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="recovery_notes">
      <span>Recovery Notes</span>
      <span className="text-on-surface-variant font-normal">Optional</span>
      </label>
      <div className="border border-outline-variant rounded flex flex-col overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-shadow">
      {/* Toolbar */}
      <div className="bg-surface-container-low border-b border-outline-variant px-2 py-1 flex gap-1">
      <button className="p-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded transition-colors" title="Bold" type="button" data-action-id="bold-3" onClick={actions?.["bold-3"]}>
      <BadgeHelp className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded transition-colors" title="Italic" type="button" data-action-id="italic-4" onClick={actions?.["italic-4"]}>
      <BadgeHelp className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="w-px bg-outline-variant my-1 mx-1"></div>
      <button className="p-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded transition-colors" title="Code Block" type="button" data-action-id="code-block-5" onClick={actions?.["code-block-5"]}>
      <Code className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded transition-colors" title="Attach Log" type="button" data-action-id="attach-log-6" onClick={actions?.["attach-log-6"]}>
      <BadgeHelp className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <textarea className="p-3 bg-surface text-on-surface font-label-md text-label-md outline-none resize-y border-none focus:ring-0" id="recovery_notes" placeholder="[TIMESTAMP] Initializing recovery sequence..." rows={6}></textarea>
      </div>
      </div>
      </div>
      {/* Footer Actions (Mobile Sticky / Desktop Inline) */}
      <div className="bg-surface-container-low border-t border-outline-variant p-container-padding flex justify-end gap-3 rounded-b mt-auto">
      <button className="h-8 px-4 border border-outline text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button" data-action-id="discard-changes-7" onClick={actions?.["discard-changes-7"]}>
                          Discard Changes
                      </button>
      <button className="h-8 px-4 bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-primary-container transition-colors flex items-center gap-2" type="submit" data-action-id="save-record-8" onClick={actions?.["save-record-8"]}>
                          Save Record
                      </button>
      </div>
      </form>
      </main>
    </>
  );
}
