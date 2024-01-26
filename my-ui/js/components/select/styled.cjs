module.exports = {
  ".select": {
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)",
    "borderWidth": "1px",
    "borderColor": "transparent",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))",
    "paddingRight": "2.5rem",
    "backgroundImage": "linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%)",
    "backgroundPosition": "calc(100% - 20px) calc(1px + 50%), calc(100% - 16.1px) calc(1px + 50%)",
    "backgroundSize": "4px 4px, 4px 4px",
    "backgroundRepeat": "no-repeat"
  },
  ".select-bordered": {
    "borderColor": "rgba(var(--ice-base-content) / 0.2)"
  },
  ".select:focus": {
    "boxShadow": "none",
    "borderColor": "rgba(var(--ice-base-content) / 0.2)",
    "outlineStyle": "solid",
    "outlineWidth": "2px",
    "outlineOffset": "2px",
    "outlineColor": "rgba(var(--ice-base-content) / 0.2)"
  },
  ".select-ghost": {
    "--tw-bg-opacity": "0.05"
  },
  ".select-ghost:focus": {
    "--tw-bg-opacity": "1",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))"
  },
  ".select-primary": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))"
  },
  ".select-primary:focus": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))",
    "outlineColor": "rgba(var(--ice-primary) / 1)"
  },
  ".select-success": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))"
  },
  ".select-success:focus": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))",
    "outlineColor": "rgba(var(--ice-success) / 1)"
  },
  ".select-warning": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))"
  },
  ".select-warning:focus": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))",
    "outlineColor": "rgba(var(--ice-warning) / 1)"
  },
  ".select-error": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))"
  },
  ".select-error:focus": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))",
    "outlineColor": "rgba(var(--ice-error) / 1)"
  },
  ".select-neutral": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))"
  },
  ".select-neutral:focus": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))",
    "outlineColor": "rgba(var(--ice-neutral) / 1)"
  },
  ".select-disabled,.select:disabled,.select[disabled]": {
    "cursor": "not-allowed",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-base-200) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-200) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "0.2"
  },
  ".select-disabled::placeholder,.select:disabled::placeholder,.select[disabled]::placeholder": {
    "color": "rgba(var(--ice-base-content) / var(--tw-placeholder-opacity))",
    "--tw-placeholder-opacity": "0.2"
  },
  ".select-multiple,.select[multiple],.select[size]:not([size=\"1\"])": {
    "backgroundImage": "none",
    "paddingRight": "1rem"
  },
  "[dir=rtl] .select": {
    "backgroundPosition": "calc(0% + 12px) calc(1px + 50%), calc(0% + 16px) calc(1px + 50%)"
  }
}