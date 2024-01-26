module.exports = {
  ".divider": {
    "marginTop": "1rem",
    "marginBottom": "1rem",
    "height": "1rem",
    "whiteSpace": "nowrap"
  },
  ".divider:before,.divider:after": {
    "backgroundColor": "rgba(var(--ice-base-content) / 0.1)"
  },
  ".divider:not(:empty)": {
    "gap": "1rem"
  },
  ".divider-primary:before,.divider-primary:after": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-primary) / var(--tw-bg-opacity))"
  },
  ".divider-success:before,.divider-success:after": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-success) / var(--tw-bg-opacity))"
  },
  ".divider-warning:before,.divider-warning:after": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-warning) / var(--tw-bg-opacity))"
  },
  ".divider-error:before,.divider-error:after": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-error) / var(--tw-bg-opacity))"
  },
  ".divider-neutral:before,.divider-neutral:after": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))"
  }
}