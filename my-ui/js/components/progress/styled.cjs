module.exports = {
  ".progress": {
    "height": "0.5rem",
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "backgroundColor": "rgba(var(--ice-base-content) / 0.2)"
  },
  ".progress::-moz-progress-bar": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-content) / var(--tw-bg-opacity))"
  },
  ".progress::-webkit-progress-bar": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "backgroundColor": "transparent"
  },
  ".progress::-webkit-progress-value": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-content) / var(--tw-bg-opacity))"
  },
  ".progress:indeterminate": {
    "backgroundImage": "repeating-linear-gradient( 90deg, var(--ice-progress-color) -1%, var(--ice-progress-color) 10%, transparent 10%, transparent 90% )",
    "backgroundSize": "200%",
    "backgroundPositionX": "15%",
    "animation": "progress-loading 5s ease-in-out infinite"
  },
  ".progress:indeterminate::-moz-progress-bar": {
    "backgroundColor": "transparent",
    "backgroundImage": "repeating-linear-gradient( 90deg, var(--ice-progress-color) -1%, var(--ice-progress-color) 10%, transparent 10%, transparent 90% )",
    "backgroundSize": "200%",
    "backgroundPositionX": "15%",
    "animation": "progress-loading 5s ease-in-out infinite"
  },
  ".progress-primary::-moz-progress-bar": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-primary) / var(--tw-bg-opacity))"
  },
  ".progress-success::-moz-progress-bar": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-success) / var(--tw-bg-opacity))"
  },
  ".progress-warning::-moz-progress-bar": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-warning) / var(--tw-bg-opacity))"
  },
  ".progress-error::-moz-progress-bar": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-error) / var(--tw-bg-opacity))"
  },
  ".progress-neutral::-moz-progress-bar": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))"
  },
  ".progress-primary::-webkit-progress-value": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-primary) / var(--tw-bg-opacity))"
  },
  ".progress-success::-webkit-progress-value": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-success) / var(--tw-bg-opacity))"
  },
  ".progress-warning::-webkit-progress-value": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-warning) / var(--tw-bg-opacity))"
  },
  ".progress-error::-webkit-progress-value": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-error) / var(--tw-bg-opacity))"
  },
  ".progress-neutral::-webkit-progress-value": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))"
  },
  "@keyframes progress-loading": {
    "50%": {
      "backgroundPositionX": "-115%"
    }
  }
}