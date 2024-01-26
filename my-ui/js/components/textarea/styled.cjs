module.exports = {
  ".textarea": {
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)",
    "borderWidth": "1px",
    "borderColor": "transparent",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))"
  },
  ".textarea-bordered": {
    "borderColor": "rgba(var(--ice-base-content) / 0.2)"
  },
  ".textarea:focus": {
    "borderColor": "rgba(var(--ice-base-content) / 0.2)",
    "outlineStyle": "solid",
    "outlineWidth": "2px",
    "outlineOffset": "2px",
    "outlineColor": "rgba(var(--ice-base-content) / 0.2)",
    "boxShadow": "none"
  },
  ".textarea-ghost": {
    "--tw-bg-opacity": "0.05"
  },
  ".textarea-ghost:focus": {
    "--tw-bg-opacity": "1",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))",
    "boxShadow": "none"
  },
  ".textarea-primary": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))"
  },
  ".textarea-primary:focus": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))",
    "outlineColor": "rgba(var(--ice-primary) / 1)"
  },
  ".textarea-success": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))"
  },
  ".textarea-success:focus": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))",
    "outlineColor": "rgba(var(--ice-success) / 1)"
  },
  ".textarea-warning": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))"
  },
  ".textarea-warning:focus": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))",
    "outlineColor": "rgba(var(--ice-warning) / 1)"
  },
  ".textarea-error": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))"
  },
  ".textarea-error:focus": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))",
    "outlineColor": "rgba(var(--ice-error) / 1)"
  },
  ".textarea-neutral": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))"
  },
  ".textarea-neutral:focus": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))",
    "outlineColor": "rgba(var(--ice-neutral) / 1)"
  },
  ".textarea-disabled,.textarea:disabled,.textarea[disabled]": {
    "cursor": "not-allowed",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-base-200) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-200) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "0.2"
  },
  ".textarea-disabled::placeholder,.textarea:disabled::placeholder,.textarea[disabled]::placeholder": {
    "color": "rgba(var(--ice-base-content) / var(--tw-placeholder-opacity))",
    "--tw-placeholder-opacity": "0.2"
  }
}