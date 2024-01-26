module.exports = {
  ".file-input": {
    "overflow": "hidden",
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)",
    "borderWidth": "1px",
    "borderColor": "rgba(var(--ice-base-content) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))",
    "fontSize": "1rem",
    "lineHeight": "1.5rem"
  },
  ".file-input::file-selector-button": {
    "borderStyle": "solid",
    "borderWidth": "var(--ice-border-btn, 1px)",
    "animation": "button-pop var(--ice-animation-btn, 0.25s) ease-out",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))",
    "fontWeight": 600,
    "textTransform": "uppercase",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-neutral-content) / var(--tw-text-opacity))",
    "textDecorationLine": "none"
  },
  ".file-input-bordered": {
    "--tw-border-opacity": "0.2"
  },
  ".file-input:focus": {
    "outlineStyle": "solid",
    "outlineWidth": "2px",
    "outlineOffset": "2px",
    "outlineColor": "rgba(var(--ice-base-content) / 0.2)"
  },
  ".file-input-ghost": {
    "--tw-bg-opacity": "0.05"
  },
  ".file-input-ghost:focus": {
    "--tw-bg-opacity": "1",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))",
    "boxShadow": "none"
  },
  ".file-input-ghost::file-selector-button": {
    "borderWidth": "1px",
    "borderColor": "transparent",
    "backgroundColor": "transparent",
    "color": "currentColor"
  },
  ".file-input-primary": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))"
  },
  ".file-input-primary:focus": {
    "outlineColor": "rgba(var(--ice-primary) / 1)"
  },
  ".file-input-primary::file-selector-button": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-primary) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-primary-content) / var(--tw-text-opacity))"
  },
  ".file-input-success": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))"
  },
  ".file-input-success:focus": {
    "outlineColor": "rgba(var(--ice-success) / 1)"
  },
  ".file-input-success::file-selector-button": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-success) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-success-content) / var(--tw-text-opacity))"
  },
  ".file-input-warning": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))"
  },
  ".file-input-warning:focus": {
    "outlineColor": "rgba(var(--ice-warning) / 1)"
  },
  ".file-input-warning::file-selector-button": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-warning) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-warning-content) / var(--tw-text-opacity))"
  },
  ".file-input-error": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))"
  },
  ".file-input-error:focus": {
    "outlineColor": "rgba(var(--ice-error) / 1)"
  },
  ".file-input-error::file-selector-button": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-error) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-error-content) / var(--tw-text-opacity))"
  },
  ".file-input-neutral": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))"
  },
  ".file-input-neutral:focus": {
    "outlineColor": "rgba(var(--ice-neutral) / 1)"
  },
  ".file-input-neutral::file-selector-button": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-neutral-content) / var(--tw-text-opacity))"
  },
  ".file-input-disabled,.file-input[disabled]": {
    "cursor": "not-allowed",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-base-200) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-200) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "0.2"
  },
  ".file-input-disabled::placeholder,.file-input[disabled]::placeholder": {
    "color": "rgba(var(--ice-base-content) / var(--tw-placeholder-opacity))",
    "--tw-placeholder-opacity": "0.2"
  },
  ".file-input-disabled::file-selector-button,.file-input[disabled]::file-selector-button": {
    "--tw-border-opacity": "0",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))",
    "--tw-bg-opacity": "0.2",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))",
    "--tw-text-opacity": "0.2"
  }
}