---
name: RecoverGrid Atlas
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 16px
  gutter: 12px
  stack-compact: 4px
  stack-default: 8px
  section-gap: 24px
---

## Brand & Style
The design system is engineered for high-stakes operational environments where clarity and speed of information retrieval are paramount. The personality is **stable, deterministic, and utilitarian**, eschewing decorative flourishes for functional density. 

The aesthetic follows a **"Browser-Tool" Minimalism**, drawing inspiration from developer tools and IDEs. It prioritizes data integrity and systematic organization, ensuring that engineers and supervisors can navigate complex recovery workflows without cognitive overload. The UI remains calm under pressure, using whitespace not as a luxury, but as a structural tool to separate distinct data clusters.

## Colors
The palette is grounded in a **Zinc/Slate neutral scale** to minimize eye fatigue during long monitoring sessions. 

- **Primary (Atlas Blue):** Reserved for primary actions, active state indicators, and progress tracks.
- **Success (Recovery Green):** Used for resolved incidents and passed validation gates.
- **Warning (Alert Amber):** Applied to aging incidents or workflows requiring supervisor intervention.
- **Error (Blocker Rose):** Dedicated to failed retries, hard blockers, or destructive actions.
- **Surface Strategy:** Use subtle shifts in neutral values (Slate 50 to Slate 100) to define container boundaries rather than heavy borders or shadows.

## Typography
The typography system uses **Inter** for all UI elements to ensure maximum legibility across variable screen qualities. For technical data—such as Incident IDs, Timestamps, and Log entries—**JetBrains Mono** is introduced to provide clear character distinction (e.g., 0 vs O) and a specialized "tool" feel.

- **Scale:** Font sizes are kept small (13px–14px for body) to support high data density. 
- **Caps:** Use uppercase with `label-xs` and increased tracking for metadata headers.
- **Hierarchy:** Contrast is achieved through weight (Medium/SemiBold) rather than dramatic size increases.

## Layout & Spacing
This design system utilizes a **compact fluid grid** based on a 4px baseline increment. The goal is to minimize vertical scrolling and maximize "above the fold" visibility.

- **Grid:** A 12-column layout for main dashboard views, switching to a 4-column layout for mobile/sidebar views.
- **Density:** Components use reduced internal padding (vertical padding is typically 50% of horizontal padding) to maintain a lean profile.
- **Sidebars:** Persistent left-hand navigation and right-hand "Inspector" panels are fixed-width to ensure the central workspace remains predictable.
- **Breakpoints:** 
  - Mobile: < 768px (Single column, hidden sidebars)
  - Tablet: 768px - 1280px (Collapsible sidebars)
  - Desktop: > 1280px (Standard 3-pane operation view)

## Elevation & Depth
To maintain a professional, "flat" tool aesthetic, the system uses **Tonal Layers** rather than shadows. 

- **Level 0 (Background):** The base application canvas (Slate 50).
- **Level 1 (Cards/Containers):** Primary workspace areas, white with a 1px border (Slate 200).
- **Level 2 (Popovers/Modals):** Subtle 4px blur shadows are only permitted for temporary overlays to provide focus, using a low-opacity neutral tint (`rgba(15, 23, 42, 0.08)`).
- **Active States:** Highlighted via a 2px left-border accent in the Primary color rather than changing the elevation.

## Shapes
The shape language is **Soft (0.25rem / 4px)**. This provides a clean, modern look that remains efficient and structured. 

- **Small Components:** Checkboxes, tags, and inputs use the base 4px radius.
- **Large Components:** Incident cards and main panels use 8px (`rounded-lg`) to create a clear container boundary.
- **Interactive States:** Hover states should utilize the same radius with a subtle background fill change (Slate 100).

## Components
Consistent styling across functional elements is vital for operational speed.

- **Buttons:** Compact height (32px for standard). Primary buttons use solid fills; secondary buttons use a Slate 200 border. Icons should be used alongside text for critical actions.
- **Status Badges:** Small, high-contrast labels using the semantic color palette. Use a "subtle" variant (light background, dark text) for general status and "solid" for urgent alerts.
- **Incident Cards:** Dense blocks of info. The header includes the ID (Mono) and Status. The body contains a 2-line summary. The footer includes a timestamp and assignee avatar.
- **Input Fields:** 1px border (Slate 300) with no glow. Focus state uses a 1px Atlas Blue ring. Search inputs should be persistent in the top navigation.
- **Activity Timelines:** A vertical 2px line connecting circular nodes. Success/Warning colors applied to nodes to indicate recovery health at a glance.
- **Note Fields:** Monospaced font for the input area, suggesting a "log-like" entry experience.