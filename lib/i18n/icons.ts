export type Language = "en" | "pt";

// ─── Icons mapping (Bootstrap Icons names → Lucide equivalents) ──────────────
// These are used in components that still reference bi-* classes until we
// migrate them. Keeping them here for audit purposes.
export const iconMap: Record<string, string> = {
  // Navigation / UI
  "bi-arrow-up-right": "arrow-up-right",
  "bi-arrow-left": "arrow-left",
  "bi-arrow-right": "arrow-right",
  "bi-download": "download",
  "bi-send": "send",
  "bi-github": "github",
  "bi-linkedin": "linkedin",
  "bi-instagram": "instagram",
  "bi-envelope": "mail",
  "bi-phone": "phone",
  "bi-map": "map-pin",
  "bi-time": "clock",
  "bi-message": "message-circle",
  "bi-globe": "globe",
};
