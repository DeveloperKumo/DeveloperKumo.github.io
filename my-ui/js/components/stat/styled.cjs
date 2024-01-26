module.exports = {
  ".stats": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))"
  },
  ":where(.stats)>:not([hidden])~:not([hidden])": {
    "--tw-divide-x-reverse": "0",
    "borderRightWidth": "calc(1px * var(--tw-divide-x-reverse))",
    "borderLeftWidth": "calc(1px * calc(1 - var(--tw-divide-x-reverse)))",
    "--tw-divide-y-reverse": "0",
    "borderTopWidth": "calc(0px * calc(1 - var(--tw-divide-y-reverse)))",
    "borderBottomWidth": "calc(0px * var(--tw-divide-y-reverse))"
  },
  ":where(.stats)": {
    "overflowX": "auto"
  },
  ":is([dir=rtl] .stats>:not([hidden])~:not([hidden]))": {
    "--tw-divide-x-reverse": "1"
  },
  ".stat": {
    "columnGap": "1rem",
    "borderColor": "rgba(var(--ice-base-content) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0.1",
    "paddingLeft": "1.5rem",
    "paddingRight": "1.5rem",
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
  },
  ".stat-title": {
    "color": "rgba(var(--ice-base-content) / 0.6)"
  },
  ".stat-value": {
    "fontSize": "2.25rem",
    "lineHeight": "2.5rem",
    "fontWeight": 800
  },
  ".stat-desc": {
    "fontSize": "0.75rem",
    "lineHeight": "1rem",
    "color": "rgba(var(--ice-base-content) / 0.6)"
  },
  ".stat-actions": {
    "marginTop": "1rem"
  }
}