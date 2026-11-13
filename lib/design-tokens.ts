/**
 * Design System Tokens - MVDEV Portfolio
 *
 * Single source of truth for all design decisions.
 * All colors, spacings, typography, and breakpoints should reference these values.
 */

// ─── Color System ─────────────────────────────────────────────────────────────
// Using OKLCH for better perceptual uniformity and wider gamut support

export const colors = {
  // Brand
  primary: {
    DEFAULT: '#4d8be9',
    light: 'rgba(77, 139, 233, 0.1)',
    lighter: 'rgba(77, 139, 233, 0.2)',
    dark: '#3a7bc8',
  },

  // Backgrounds
  background: {
    primary: '#071108',      // Deep navy/black (main bg)
    secondary: '#0e1510',    // Slightly lighter for cards
    muted: 'rgba(255, 255, 255, 0.04)',
    elevated: 'rgba(255, 255, 255, 0.06)',
  },

  // Surfaces & Borders
  surface: {
    card: 'rgba(255, 255, 255, 0.03)',
    hover: 'rgba(255, 255, 255, 0.08)',
    border: 'rgba(255, 255, 255, 0.12)',
    borderFocus: 'rgba(77, 139, 233, 0.5)',
  },

  // Text
  text: {
    primary: '#ffffff',
    secondary: '#a5adb8',    // Muted gray
    muted: '#6b7280',        // Even more muted
    inverse: '#071108',      // For light backgrounds
  },

  // Status Colors
  status: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #4d8be9 0%, #3b7ddd 100%)',
    subtle: 'linear-gradient(180deg, transparent 0%, rgba(77, 139, 233, 0.02) 50%, transparent 100%)',
  },
} as const;

// ─── Typography Scale ─────────────────────────────────────────────────────────
// Modular scale based on 1.25 ratio

export type FontSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export const typography = {
  fonts: {
    sans: '"Geist", system-ui, -apple-system, sans-serif',
    mono: '"Geist Mono", "Fira Code", monospace',
    display: '"Sora", "Unbounded", sans-serif',
  },

  sizes: {
    xs: { fontSize: '0.75rem', lineHeight: '1rem' },           // 12px
    sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },       // 14px
    base: { fontSize: '1rem', lineHeight: '1.5rem' },          // 16px
    lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },       // 18px
    xl: { fontSize: '1.25rem', lineHeight: '1.75rem' },       // 20px
    '2xl': { fontSize: '1.5rem', lineHeight: '2rem' },        // 24px
    '3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },   // 30px
    '4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' },     // 36px
    '5xl': { fontSize: '3rem', lineHeight: '3.5rem' },        // 48px
    '6xl': { fontSize: '3.75rem', lineHeight: '4rem' },       // 60px
    '7xl': { fontSize: '4.5rem', lineHeight: '4.5rem' },      // 72px
  } as const,

  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  } as const,

  tracking: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  } as const,
} as const;

// ─── Spacing Scale ────────────────────────────────────────────────────────────
// Based on 4px grid

export const spacing = {
  px: '1px',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  3.5: '0.875rem',   // 14px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  10: '2.5rem',      // 40px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  28: '7rem',        // 112px
  32: '8rem',        // 128px
  36: '9rem',        // 144px
  40: '10rem',       // 160px
  44: '11rem',       // 176px
  48: '12rem',       // 192px
  56: '14rem',       // 224px
  64: '16rem',       // 256px
} as const;

// Container widths
export const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  content: '1200px',     // Main content max-width
  page: '1440px',        // Page max-width
} as const;

// ─── Breakpoints ──────────────────────────────────────────────────────────────

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ─── Shadows & Effects ────────────────────────────────────────────────────────

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.3)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4)',
  glow: '0 0 20px rgba(77, 139, 233, 0.3)',
};

// ─── Borders & Radius ─────────────────────────────────────────────────────────

export const radius = {
  none: '0px',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
};

// ─── Transitions ──────────────────────────────────────────────────────────────

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
};

// ─── Z-Index Scale ────────────────────────────────────────────────────────────

export const zIndex = {
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
};

// ─── Exported CSS Variables ────────────────────────────────────────────────────

export const cssVariables = `
  /* Colors */
  --color-primary: ${colors.primary.DEFAULT};
  --color-primary-light: ${colors.primary.light};
  --color-primary-dark: ${colors.primary.dark};

  --color-bg-primary: ${colors.background.primary};
  --color-bg-secondary: ${colors.background.secondary};
  --color-surface-muted: ${colors.surface.card};
  --color-surface-hover: ${colors.surface.hover};

  --color-border: ${colors.surface.border};
  --color-border-focus: ${colors.surface.borderFocus};

  --color-text-primary: ${colors.text.primary};
  --color-text-secondary: ${colors.text.secondary};
  --color-text-muted: ${colors.text.muted};

  /* Typography */
  --font-sans: ${typography.fonts.sans};
  --font-mono: ${typography.fonts.mono};
  --font-display: ${typography.fonts.display};

  /* Spacing Scale */
  --space-1: ${spacing[1]};
  --space-2: ${spacing[2]};
  --space-3: ${spacing[3]};
  --space-4: ${spacing[4]};
  --space-6: ${spacing[6]};
  --space-8: ${spacing[8]};
  --space-12: ${spacing[12]};
  --space-16: ${spacing[16]};
  --space-20: ${spacing[20]};
  --space-24: ${spacing[24]};
  --space-32: ${spacing[32]};

  /* Containers */
  --container-content: ${containers.content};
  --container-page: ${containers.page};

  /* Shadows */
  --shadow-sm: ${shadows.sm};
  --shadow-md: ${shadows.md};
  --shadow-lg: ${shadows.lg};
  --shadow-xl: ${shadows.xl};
  --shadow-glow: ${shadows.glow};

  /* Radius */
  --radius-sm: ${radius.sm};
  --radius-md: ${radius.md};
  --radius-lg: ${radius.lg};
  --radius-xl: ${radius.xl};
  --radius-full: ${radius.full};

  /* Transitions */
  --transition-fast: ${transitions.fast};
  --transition-base: ${transitions.base};
  --transition-slow: ${transitions.slow};
`;

// Design tokens are exported as constants above
// Types for TypeScript consumers:
export type ColorTokens = typeof colors;
export type TypographyTokens = typeof typography;
export type SpacingTokens = typeof spacing;
export type ContainerTokens = typeof containers;
export type BreakpointTokens = typeof breakpoints;
export type ShadowTokens = typeof shadows;
export type RadiusTokens = typeof radius;
export type TransitionTokens = typeof transitions;
