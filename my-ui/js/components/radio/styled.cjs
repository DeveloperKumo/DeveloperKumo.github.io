module.exports = {
  ".radio": {
    "height": "1.5rem",
    "width": "1.5rem",
    "cursor": "pointer",
    "appearance": "none",
    "borderRadius": "9999px",
    "borderWidth": "1px",
    "borderColor": "rgba(var(--ice-base-content) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0.2"
  },
  ".radio:focus-visible": {
    "outlineStyle": "solid",
    "outlineWidth": "2px",
    "outlineOffset": "2px",
    "outlineColor": "rgba(var(--ice-base-content) / 1)"
  },
  ".radio:checked,.radio[aria-checked=true]": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-content) / var(--tw-bg-opacity))",
    "animation": "radiomark var(--ice-animation-input, 0.2s) ease-out",
    "boxShadow": "0 0 0 4px rgba(var(--ice-base-400)) inset, 0 0 0 4px rgba(var(--ice-base-400)) inset"
  },
  ".radio-primary": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))"
  },
  ".radio-primary:hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))"
  },
  ".radio-primary:focus-visible": {
    "outlineColor": "rgba(var(--ice-primary) / 1)"
  },
  ".radio-primary:checked,.radio-primary[aria-checked=true]": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-primary) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-primary-content) / var(--tw-text-opacity))"
  },
  ".radio-success": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))"
  },
  ".radio-success:hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))"
  },
  ".radio-success:focus-visible": {
    "outlineColor": "rgba(var(--ice-success) / 1)"
  },
  ".radio-success:checked,.radio-success[aria-checked=true]": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-success) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-success-content) / var(--tw-text-opacity))"
  },
  ".radio-warning": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))"
  },
  ".radio-warning:hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))"
  },
  ".radio-warning:focus-visible": {
    "outlineColor": "rgba(var(--ice-warning) / 1)"
  },
  ".radio-warning:checked,.radio-warning[aria-checked=true]": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-warning) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-warning-content) / var(--tw-text-opacity))"
  },
  ".radio-error": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))"
  },
  ".radio-error:hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))"
  },
  ".radio-error:focus-visible": {
    "outlineColor": "rgba(var(--ice-error) / 1)"
  },
  ".radio-error:checked,.radio-error[aria-checked=true]": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-error) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-error-content) / var(--tw-text-opacity))"
  },
  ".radio-neutral": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))"
  },
  ".radio-neutral:hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))"
  },
  ".radio-neutral:focus-visible": {
    "outlineColor": "rgba(var(--ice-neutral) / 1)"
  },
  ".radio-neutral:checked,.radio-neutral[aria-checked=true]": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-neutral-content) / var(--tw-text-opacity))"
  },
  ".radio:disabled": {
    "cursor": "not-allowed",
    "opacity": 0.2
  },
  "@keyframes radiomark": {
    "0%": {
      "boxShadow": "0 0 0 12px rgba(var(--ice-base-400)) inset, 0 0 0 12px rgba(var(--ice-base-400)) inset"
    },
    "50%": {
      "boxShadow": "0 0 0 3px rgba(var(--ice-base-400)) inset, 0 0 0 3px rgba(var(--ice-base-400)) inset"
    },
    "100%": {
      "boxShadow": "0 0 0 4px rgba(var(--ice-base-400)) inset, 0 0 0 4px rgba(var(--ice-base-400)) inset"
    }
  }
}