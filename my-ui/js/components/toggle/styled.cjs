module.exports = {
  ".toggle": {
    "height": "1.5rem",
    "width": "3rem",
    "cursor": "pointer",
    "appearance": "none",
    "borderRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderWidth": "1px",
    "borderColor": "rgba(var(--ice-base-content) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0.2",
    "backgroundColor": "rgba(var(--ice-base-content) / var(--tw-bg-opacity))",
    "--tw-bg-opacity": "0.5",
    "--ice-tglbg": "rgba(var(--ice-base-100))",
    "--ice-handleoffset": "1.5rem",
    "--ice-handleoffsetcalculator": "calc(var(--ice-handleoffset) * -1)",
    "--ice-togglehandleborder": "0 0",
    "transition": "background, box-shadow var(--ice-animation-input, 0.2s) ease-out",
    "boxShadow": "var(--ice-handleoffsetcalculator) 0 0 2px var(--ice-tglbg) inset, 0 0 0 2px var(--ice-tglbg) inset, var(--ice-togglehandleborder)"
  },
  "[dir=rtl] .toggle": {
    "--ice-handleoffsetcalculator": "calc(var(--ice-handleoffset) * 1)"
  },
  ".toggle:focus-visible": {
    "outlineStyle": "solid",
    "outlineWidth": "2px",
    "outlineOffset": "2px",
    "outlineColor": "rgba(var(--ice-base-content) / 0.2)"
  },
  ".toggle:checked,.toggle[checked=true],.toggle[aria-checked=true]": {
    "--tw-border-opacity": "1",
    "--tw-bg-opacity": "1",
    "--ice-handleoffsetcalculator": "var(--ice-handleoffset)"
  },
  "[dir=rtl] .toggle:checked,[dir=rtl] .toggle[checked=true],[dir=rtl] .toggle[aria-checked=true]": {
    "--ice-handleoffsetcalculator": "calc(var(--ice-handleoffset) * -1)"
  },
  ".toggle:indeterminate": {
    "--tw-border-opacity": "1",
    "--tw-bg-opacity": "1",
    "boxShadow": "calc(var(--ice-handleoffset) / 2) 0 0 2px var(--ice-tglbg) inset, calc(var(--ice-handleoffset) / -2) 0 0 2px var(--ice-tglbg) inset, 0 0 0 2px var(--ice-tglbg) inset"
  },
  "[dir=rtl] .toggle:indeterminate": {
    "boxShadow": "calc(var(--ice-handleoffset) / 2) 0 0 2px var(--ice-tglbg) inset, calc(var(--ice-handleoffset) / -2) 0 0 2px var(--ice-tglbg) inset, 0 0 0 2px var(--ice-tglbg) inset"
  },
  ".toggle-primary:focus-visible": {
    "outlineColor": "rgba(var(--ice-primary) / 1)"
  },
  ".toggle-primary:checked,.toggle-primary[checked=true],.toggle-primary[aria-checked=true]": {
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0.1",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-primary) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-primary-content) / var(--tw-text-opacity))"
  },
  ".toggle-success:focus-visible": {
    "outlineColor": "rgba(var(--ice-success) / 1)"
  },
  ".toggle-success:checked,.toggle-success[checked=true],.toggle-success[aria-checked=true]": {
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0.1",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-success) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-success-content) / var(--tw-text-opacity))"
  },
  ".toggle-warning:focus-visible": {
    "outlineColor": "rgba(var(--ice-warning) / 1)"
  },
  ".toggle-warning:checked,.toggle-warning[checked=true],.toggle-warning[aria-checked=true]": {
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0.1",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-warning) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-warning-content) / var(--tw-text-opacity))"
  },
  ".toggle-error:focus-visible": {
    "outlineColor": "rgba(var(--ice-error) / 1)"
  },
  ".toggle-error:checked,.toggle-error[checked=true],.toggle-error[aria-checked=true]": {
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0.1",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-error) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-error-content) / var(--tw-text-opacity))"
  },
  ".toggle-neutral:focus-visible": {
    "outlineColor": "rgba(var(--ice-neutral) / 1)"
  },
  ".toggle-neutral:checked,.toggle-neutral[checked=true],.toggle-neutral[aria-checked=true]": {
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0.1",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-neutral-content) / var(--tw-text-opacity))"
  },
  ".toggle:disabled": {
    "cursor": "not-allowed",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-base-content) / var(--tw-border-opacity))",
    "backgroundColor": "transparent",
    "opacity": 0.3,
    "--ice-togglehandleborder": "0 0 0 3px rgba(var(--ice-base-content)) inset, var(--ice-handleoffsetcalculator) 0 0 3px rgba(var(--ice-base-content)) inset"
  }
}