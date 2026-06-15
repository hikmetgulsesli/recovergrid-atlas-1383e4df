// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Board - RecoverGrid Atlas
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CheckCheck, CircleHelp, Clock, EllipsisVertical, Headphones, Kanban, Plus, RefreshCwOff, Search, Settings, Terminal, TriangleAlert, UserPlus } from "lucide-react";


export type PipelineBoardRecovergridAtlasActionId = "new-incident-1" | "retry-load-2" | "create-record-3" | "notifications-4" | "help-outline-5" | "record-operations-1" | "pipeline-board-2" | "settings-3" | "support-4" | "logs-5" | "records-6" | "pipeline-7" | "settings-8";

export interface PipelineBoardRecovergridAtlasProps {
  actions?: Partial<Record<PipelineBoardRecovergridAtlasActionId, () => void>>;

}

export function PipelineBoardRecovergridAtlas({ actions }: PipelineBoardRecovergridAtlasProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col h-full py-section-gap px-container-padding bg-surface-container-low border-r border-outline-variant fixed left-0 top-0 h-full w-64 z-40 transition-colors duration-150 ease-in-out">
      <div className="flex items-center gap-3 mb-8">
      <img alt="System Node" className="w-10 h-10 rounded-full" data-alt="A clean, minimalist 3D rendering of a server rack node pulsing with a gentle blue light, representing a stable system node in a high-tech data center environment. The scene is brightly lit with cool, white studio lighting, creating a clinical, professional tool aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2ciyO_NxF5B_eKYJXmhJt_dDqN5TBEUXHGK3MeQl9umlXil9dIQ4MxTS3BCNtBBFAcwqvit-QcLViA2rz5gliuw_n65td7CV--jWZkTJyP_K2LEdmbcxgvY_ishXn4sbMCdeOBBS1wpxja0h3Vm9LmFW1-JIsdwnP70XQOo8fELxeLKx-sCwQ1DcuLKvEbRyJ_RisdEZX4Pkmsp7KpKN5o6CLvY3QPTmRQrhVQpv8XIburCnOst6cmEsoMGoMhY-NJcC0noSH6A0" />
      <div>
      <h1 className="font-display-sm text-display-sm text-on-surface">Atlas Ops</h1>
      <span className="font-label-xs text-label-xs text-on-surface-variant">v2.4.0-stable</span>
      </div>
      </div>
      <button className="w-full bg-primary text-on-primary py-2 px-4 rounded font-label-md text-label-md flex items-center justify-center gap-2 mb-8 hover:opacity-90 transition-opacity h-8" type="button" data-action-id="new-incident-1" onClick={actions?.["new-incident-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                  New Incident
              </button>
      <nav className="flex-1 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant transition-colors font-label-md text-label-md" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <BarChart3 className="text-[20px]" aria-hidden={true} focusable="false" />
                      Record Operations
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded bg-primary-container text-on-primary-container border-l-2 border-primary font-label-md text-label-md" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <Kanban className="text-[20px]" aria-hidden={true} focusable="false" />
                      Pipeline Board
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant transition-colors font-label-md text-label-md" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      </nav>
      <div className="mt-auto flex flex-col gap-1 pt-4 border-t border-outline-variant">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant transition-colors font-label-md text-label-md" href="#" data-action-id="support-4" onClick={(event) => { event.preventDefault(); actions?.["support-4"]?.(); }}>
      <Headphones className="text-[20px]" aria-hidden={true} focusable="false" />
                      Support
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant transition-colors font-label-md text-label-md" href="#" data-action-id="logs-5" onClick={(event) => { event.preventDefault(); actions?.["logs-5"]?.(); }}>
      <Terminal className="text-[20px]" aria-hidden={true} focusable="false" />
                      Logs
                  </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 lg:ml-64">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest fixed top-0 left-0 w-full z-30 lg:pl-64 flex items-center justify-between px-gutter h-12 border-b border-outline-variant transition-colors duration-150 ease-in-out">
      <div className="flex items-center gap-6 h-full">
      <div className="font-headline-sm text-headline-sm font-bold text-primary lg:hidden">RecoverGrid Atlas</div>
      {/* Search Bar (on_left) */}
      <div className="relative hidden sm:block w-64">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full pl-8 pr-3 py-1.5 bg-surface rounded border border-outline-variant text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none h-8" placeholder="Search incidents..." type="text" />
      </div>
      <nav className="hidden md:flex items-end h-full gap-6">
      <a className="text-on-surface-variant pb-1 hover:text-primary transition-colors font-body-md text-body-md flex items-center h-full pt-1" href="#" data-action-id="records-6" onClick={(event) => { event.preventDefault(); actions?.["records-6"]?.(); }}>Records</a>
      <a className="text-primary border-b-2 border-primary pb-1 hover:text-primary transition-colors font-body-md text-body-md flex items-center h-full pt-1" href="#" data-action-id="pipeline-7" onClick={(event) => { event.preventDefault(); actions?.["pipeline-7"]?.(); }}>Pipeline</a>
      <a className="text-on-surface-variant pb-1 hover:text-primary transition-colors font-body-md text-body-md flex items-center h-full pt-1" href="#" data-action-id="settings-8" onClick={(event) => { event.preventDefault(); actions?.["settings-8"]?.(); }}>Settings</a>
      </nav>
      </div>
      <div className="flex items-center gap-3">
      <button className="hidden sm:flex text-on-surface-variant hover:text-primary transition-colors h-8 px-3 items-center justify-center border border-outline-variant rounded bg-surface font-body-sm text-body-sm" type="button" data-action-id="retry-load-2" onClick={actions?.["retry-load-2"]}>
                          Retry Load
                      </button>
      <button className="bg-primary text-on-primary h-8 px-3 rounded font-body-sm text-body-sm flex items-center justify-center hover:opacity-90 transition-opacity" type="button" data-action-id="create-record-3" onClick={actions?.["create-record-3"]}>
                          Create Record
                      </button>
      <div className="flex items-center gap-1 border-l border-outline-variant pl-3 ml-1">
      <button className="text-on-surface-variant hover:text-primary transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-variant" type="button" aria-label="Notifications" data-action-id="notifications-4" onClick={actions?.["notifications-4"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-variant" type="button" aria-label="Help Outline" data-action-id="help-outline-5" onClick={actions?.["help-outline-5"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <img alt="Operator Profile" className="w-7 h-7 rounded-full ml-2 cursor-pointer border border-outline-variant" data-alt="A macro shot of a sleek, minimalist metallic id badge with an abstract geometric operator insignia. The lighting is pristine and bright, reflecting off the brushed metal surface, fitting seamlessly into a high-end, utilitarian web application interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChOLuH_Ihp-fx5fEl2ImgHlB5aJNu7xq3QFIGqQPMMhpUpuL4B7gLnKYqi0k6jOGv6EU3S_3xwVGoIHALAvsc7AdWzDMGwQ3Wu11rLL8f2B2siQGl-t0cMFc2mYf2YX4ZTUY1_OrdVSh9P8auOhgucXfKG2vMx2vfSrhvJK_sLB87NRPC--GfAu0r4daVmEqM8KltLxjai-Gog3j-yLfUuDlyfNSeyWLOz1LrLXSkUi6-waXlFs7OP4Q5lCBaQzZqnNQfwRxgxSU8" />
      </div>
      </div>
      </header>
      {/* Board Canvas */}
      <div className="flex-1 mt-12 overflow-x-auto p-container-padding bg-background">
      <div className="flex gap-gutter h-[calc(100vh-6rem)] min-w-max pb-4">
      {/* Lane: Incoming */}
      <div className="w-[320px] flex flex-col bg-surface-container-lowest border border-outline-variant rounded">
      <div className="px-3 py-2 border-b border-outline-variant bg-surface flex justify-between items-center sticky top-0 rounded-t">
      <h2 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wide flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                  Incoming
                              </h2>
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs">3</span>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 hover:border-primary transition-colors cursor-grab relative">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">REQ-8902</span>
      <EllipsisVertical className="text-on-surface-variant text-[16px] cursor-pointer hover:text-primary" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-1 leading-snug">Database Sync Timeout</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">Primary node failed to respond to ping sequence within 5000ms threshold.</p>
      <div className="flex justify-between items-center mt-auto">
      <div className="flex items-center gap-2">
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs flex items-center gap-1">
      <Clock className="text-[12px]" aria-hidden={true} focusable="false" /> 10m ago
                                          </span>
      </div>
      <img alt="Owner" className="w-5 h-5 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzgPVwNklYR9MWIEf-P_IFwvFSzlaVKBtxo_WM1egqpDY-Jx3BErabl9yZwN-5sPH_bmKjcj-e0GxiBBTUq4h0bORAobbDHsTKCFvQ3awl_TAJ1gMAfB7edEYczw1RuuOagFIEy0FSvjHBp5VdsAoNlSSuvwCzA3lkSyKUaCa807vjXv67NTVDuTO893UFZp0Ys8LUABGL7cEpbvLuzJ3SIfLANUjiErf_rtPu81h55LybnWTKyx9-MVytxUbkbJ2SUqIvEdB6I_M" />
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 hover:border-primary transition-colors cursor-grab relative border-l-2 border-l-error">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">REQ-8901</span>
      <EllipsisVertical className="text-on-surface-variant text-[16px] cursor-pointer hover:text-primary" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-1 leading-snug">Auth Gateway Latency Spike</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">Token validation exceeding SLA by 400ms across EU-West region.</p>
      <div className="flex items-center gap-1 mb-2 text-error">
      <TriangleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs font-bold uppercase">Blocker</span>
      </div>
      <div className="flex justify-between items-center mt-auto">
      <div className="flex items-center gap-2">
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs flex items-center gap-1">
      <Clock className="text-[12px]" aria-hidden={true} focusable="false" /> 1h ago
                                          </span>
      </div>
      <img alt="Owner" className="w-5 h-5 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrbkgoPjUMdsxCE9jdigmSdO7Nq9d9F1psSm-ZQKMovWSHKSjATZyQeIBDrYU0gDaTtxnaO7b1TZKZBycq0d96X_p0zac8DpX6q39FzbCx6bTNJ7l_Uq1fk5hC6-SF10dybO2LSDuzOL1iTM362tMjyGrSc6aaz7kCHk48hoMIiSBbWpRadCDmrMP2hWUTr6eOg97ZaktqzVRclgeiu6-wyDhNWhoBWwyd9UE80JwnaoSz7MgtYiga_tkTkxzT7SiYbVmHnfX0-ms" />
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 hover:border-primary transition-colors cursor-grab relative">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">REQ-8898</span>
      <EllipsisVertical className="text-on-surface-variant text-[16px] cursor-pointer hover:text-primary" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-1 leading-snug">Kafka Topic Unreachable</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">Consumer group 'events-processor-v2' rebalancing indefinitely.</p>
      <div className="flex justify-between items-center mt-auto">
      <div className="flex items-center gap-2">
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs flex items-center gap-1">
      <Clock className="text-[12px]" aria-hidden={true} focusable="false" /> 2h ago
                                          </span>
      </div>
      <div className="w-5 h-5 rounded-full border border-outline-variant border-dashed flex items-center justify-center text-on-surface-variant">
      <UserPlus className="text-[12px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Lane: Retry Stage */}
      <div className="w-[320px] flex flex-col bg-surface-container-lowest border border-outline-variant rounded">
      <div className="px-3 py-2 border-b border-outline-variant bg-surface flex justify-between items-center sticky top-0 rounded-t">
      <h2 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wide flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
                                  Retry Stage
                              </h2>
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs">2</span>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
      {/* Card 4 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 hover:border-primary transition-colors cursor-grab relative border-l-2 border-l-error">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">REQ-8890</span>
      <EllipsisVertical className="text-on-surface-variant text-[16px] cursor-pointer hover:text-primary" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-1 leading-snug">Payment Webhook Miss</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">Stripe payload signature verification failed. Retry policy exhausted.</p>
      <div className="flex items-center gap-1 mb-2 text-error bg-error-container px-2 py-1 rounded inline-flex">
      <RefreshCwOff className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs font-bold">Failed 3/3 Retries</span>
      </div>
      <div className="flex justify-between items-center mt-auto pt-1">
      <div className="flex items-center gap-2">
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs flex items-center gap-1">
      <Clock className="text-[12px]" aria-hidden={true} focusable="false" /> 4h ago
                                          </span>
      </div>
      <img alt="Owner" className="w-5 h-5 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnpzRPPBZWRN9mPsqvMW-NXN9K-VsE4FV6wDYHvx0gZUzOB-askomm_Eb4hGSu_9ThykhtC4eKpuJWtk_dkQD1TxjIoFFmDR5zWecLOJeMx6hna2PWL33BzBI-xqdhhszaf8s_zjW9DE83I5SzF96dLOm7f6akjyEkiJVj3vFoMCG6o7RJqobrk9k_M7w_jmw0h7zhdbSl7FKJDxuxilkoxW4ksi-5Ynwe-4w2lKO7T27_cFU9u6ZxArJ_v44dvJUFimyNY9JWb5s" />
      </div>
      </div>
      {/* Card 5 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 hover:border-primary transition-colors cursor-grab relative">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">REQ-8895</span>
      <EllipsisVertical className="text-on-surface-variant text-[16px] cursor-pointer hover:text-primary" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-1 leading-snug">S3 Bucket Access Denied</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">IAM role policy update propagation delayed.</p>
      <div className="flex items-center gap-1 mb-2 text-primary bg-primary-fixed px-2 py-1 rounded inline-flex">
      <BadgeHelp className="text-[14px] animate-spin" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs font-bold">Retrying (2/3)</span>
      </div>
      <div className="flex justify-between items-center mt-auto pt-1">
      <div className="flex items-center gap-2">
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs flex items-center gap-1">
      <Clock className="text-[12px]" aria-hidden={true} focusable="false" /> 1.5h ago
                                          </span>
      </div>
      <img alt="Owner" className="w-5 h-5 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANdk8eEYvcuTNbWF-tV-SnUbWogTXFONNqqPN7bTRlYX1rvrL4OZ1QTA-xRIZvfGH_kY5L1UEl2ZdqdCVk_NxrL7zlg0eTOBXA4dm_tSaBfeIM3ubOYv5X91ldFfwlw9SPxlZnna3_Jn1geREAH7qR3kqv_1K-HvR1nudTFNTZAfO8L15sTwtwMt5bFNmVgnfXMqFJH6wD7C3uOPWJQQEZ3E8p3bO4F-W4DdByuJy0rnBeXQophFd36WlAMdMgyEGUiueja6pzrt0" />
      </div>
      </div>
      </div>
      </div>
      {/* Lane: Supervisor Review */}
      <div className="w-[320px] flex flex-col bg-surface-container-lowest border border-outline-variant rounded opacity-90">
      <div className="px-3 py-2 border-b border-outline-variant bg-surface flex justify-between items-center sticky top-0 rounded-t">
      <h2 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wide flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                                  Supervisor Review
                              </h2>
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs">1</span>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
      {/* Card 6 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 hover:border-primary transition-colors cursor-grab relative">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">REQ-8872</span>
      <EllipsisVertical className="text-on-surface-variant text-[16px] cursor-pointer hover:text-primary" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-1 leading-snug">Manual Data Backfill Required</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">Corrupted rows identified in analytics.daily_rollup. Requires DBA approval for script execution.</p>
      <div className="flex items-center gap-1 mb-2 text-tertiary bg-tertiary-fixed px-2 py-1 rounded inline-flex">
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs font-bold">Needs Approval</span>
      </div>
      <div className="flex justify-between items-center mt-auto pt-1">
      <div className="flex items-center gap-2">
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs flex items-center gap-1">
      <Clock className="text-[12px]" aria-hidden={true} focusable="false" /> 1d ago
                                          </span>
      </div>
      <img alt="Owner" className="w-5 h-5 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOFDsjVmotwM2D7AEkX3Fb6fDLaLBJPd2N8SwK65BcbzcTTmUIQ2zETT2ljj1KK1fFDIEszGnX1UO69bBIe7H0tFOPR9DWjN4G4HfJuYJD4RRcSyErEBlm55ZnFjZGIdatqUDExJrtv6h8_Qx8f6GibOSjkXF4M6chAShBN9fwaWWvbP6c2EfoorPJWglYS94pqXuvxtYHgnF4OB_ZZTyRXzOiAHYNADPeoXyQNwwrp5o9j3ZoqZeBKOtvpqyllYgAKR4a1GQv_ic" />
      </div>
      </div>
      </div>
      </div>
      {/* Lane: Final Gate */}
      <div className="w-[320px] flex flex-col bg-surface-container-lowest border border-outline-variant rounded opacity-80">
      <div className="px-3 py-2 border-b border-outline-variant bg-surface flex justify-between items-center sticky top-0 rounded-t">
      <h2 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wide flex items-center gap-2">
      <span className="w-2 h-2 rounded-full border-2 border-outline-variant"></span>
                                  Final Gate
                              </h2>
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs">0</span>
      </div>
      <div className="flex-1 p-4 flex flex-col items-center justify-center text-center">
      <CheckCheck className="text-outline-variant text-[48px] mb-2 opacity-50" aria-hidden={true} focusable="false" />
      <p className="font-body-sm text-body-sm text-on-surface-variant">No items pending final deployment clear.</p>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
