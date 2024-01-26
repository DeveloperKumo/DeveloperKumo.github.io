module.exports = {
  ".checkbox": {
    "height": "1.5rem",
    "width": "1.5rem",
    "cursor": "pointer",
    "appearance": "none",
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)",
    "borderWidth": "1px",
    "borderColor": "rgba(var(--ice-base-content) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0.2",
    "--ice-chkbg": "var(--ice-base-content)",
    "--ice-chkfg": "var(--ice-base-400)"
  },
  ".checkbox:focus-visible": {
    "outlineStyle": "solid",
    "outlineWidth": "2px",
    "outlineOffset": "2px",
    "outlineColor": "rgba(var(--ice-base-content) / 1)"
  },
  ".checkbox:checked,.checkbox[checked=true],.checkbox[aria-checked=true]": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-content) / var(--tw-bg-opacity))",
    "backgroundRepeat": "no-repeat",
    "animation": "checkmark var(--ice-animation-input, 0.2s) ease-out",
    "backgroundImage": "linear-gradient(-45deg, transparent 65%, rgba(var(--ice-chkbg)) 65.99%), linear-gradient(45deg, transparent 75%, rgba(var(--ice-chkbg)) 75.99%), linear-gradient(-45deg, rgba(var(--ice-chkbg)) 40%, transparent 40.99%), linear-gradient( 45deg, rgba(var(--ice-chkbg)) 30%, rgba(var(--ice-chkfg)) 30.99%, rgba(var(--ice-chkfg)) 40%, transparent 40.99% ), linear-gradient(-45deg, rgba(var(--ice-chkfg)) 50%, rgba(var(--ice-chkbg)) 50.99%)"
  },
  ".checkbox:indeterminate": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-content) / var(--tw-bg-opacity))",
    "backgroundRepeat": "no-repeat",
    "animation": "checkmark var(--ice-animation-input, 0.2s) ease-out",
    "backgroundImage": "linear-gradient(90deg, transparent 80%, rgba(var(--ice-chkbg)) 80%), linear-gradient(-90deg, transparent 80%, rgba(var(--ice-chkbg)) 80%), linear-gradient( 0deg, rgba(var(--ice-chkbg)) 43%, rgba(var(--ice-chkfg)) 43%, rgba(var(--ice-chkfg)) 57%, rgba(var(--ice-chkbg)) 57% )"
  },
  ".checkbox-primary": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))",
    "--ice-chkbg": "var(--ice-primary)",
    "--ice-chkfg": "var(--ice-primary-content)"
  },
  ".checkbox-primary:hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))"
  },
  ".checkbox-primary:focus-visible": {
    "outlineColor": "rgba(var(--ice-primary) / 1)"
  },
  ".checkbox-primary:checked,.checkbox-primary[checked=true],.checkbox-primary[aria-checked=true]": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-primary) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-primary-content) / var(--tw-text-opacity))"
  },
  ".checkbox-success": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))",
    "--ice-chkbg": "var(--ice-success)",
    "--ice-chkfg": "var(--ice-success-content)"
  },
  ".checkbox-success:hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))"
  },
  ".checkbox-success:focus-visible": {
    "outlineColor": "rgba(var(--ice-success) / 1)"
  },
  ".checkbox-success:checked,.checkbox-success[checked=true],.checkbox-success[aria-checked=true]": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-success) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-success-content) / var(--tw-text-opacity))"
  },
  ".checkbox-warning": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))",
    "--ice-chkbg": "var(--ice-warning)",
    "--ice-chkfg": "var(--ice-warning-content)"
  },
  ".checkbox-warning:hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))"
  },
  ".checkbox-warning:focus-visible": {
    "outlineColor": "rgba(var(--ice-warning) / 1)"
  },
  ".checkbox-warning:checked,.checkbox-warning[checked=true],.checkbox-warning[aria-checked=true]": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-warning) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-warning-content) / var(--tw-text-opacity))"
  },
  ".checkbox-error": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))",
    "--ice-chkbg": "var(--ice-error)",
    "--ice-chkfg": "var(--ice-error-content)"
  },
  ".checkbox-error:hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))"
  },
  ".checkbox-error:focus-visible": {
    "outlineColor": "rgba(var(--ice-error) / 1)"
  },
  ".checkbox-error:checked,.checkbox-error[checked=true],.checkbox-error[aria-checked=true]": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-error) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-error-content) / var(--tw-text-opacity))"
  },
  ".checkbox-neutral": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))",
    "--ice-chkbg": "var(--ice-neutral)",
    "--ice-chkfg": "var(--ice-neutral-content)"
  },
  ".checkbox-neutral:hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))"
  },
  ".checkbox-neutral:focus-visible": {
    "outlineColor": "rgba(var(--ice-neutral) / 1)"
  },
  ".checkbox-neutral:checked,.checkbox-neutral[checked=true],.checkbox-neutral[aria-checked=true]": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-neutral-content) / var(--tw-text-opacity))"
  },
  ".checkbox:disabled": {
    "cursor": "not-allowed",
    "borderColor": "transparent",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-content) / var(--tw-bg-opacity))",
    "opacity": 0.2
  },
  "@keyframes checkmark": {
    "0%": {
      "backgroundPositionY": "5px"
    },
    "50%": {
      "backgroundPositionY": "-2px"
    },
    "100%": {
      "backgroundPositionY": "0"
    }
  }
}