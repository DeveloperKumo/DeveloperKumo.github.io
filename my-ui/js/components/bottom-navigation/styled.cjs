module.exports = {
  ".btm-nav": {
    "height": "4rem",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))",
    "color": "currentColor"
  },
  ".btm-nav>*": {
    "borderColor": "currentColor"
  },
  ".btm-nav>*:not(.active)": {
    "paddingTop": "0.125rem"
  },
  ".btm-nav>*:where(.active)": {
    "borderTopWidth": "2px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))"
  },
  ".btm-nav>*.disabled,.btm-nav>*[disabled]": {
    "pointerEvents": "none",
    "--tw-border-opacity": "0",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))",
    "--tw-bg-opacity": "0.1",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))",
    "--tw-text-opacity": "0.2"
  },
  ".btm-nav>*.disabled:hover,.btm-nav>*[disabled]:hover": {
    "pointerEvents": "none",
    "--tw-border-opacity": "0",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))",
    "--tw-bg-opacity": "0.1",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))",
    "--tw-text-opacity": "0.2"
  },
  ".btm-nav>* .label": {
    "fontSize": "1rem",
    "lineHeight": "1.5rem"
  }
}