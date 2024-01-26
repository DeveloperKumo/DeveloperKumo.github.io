module.exports = {
  ".stats-horizontal": {
    "gridAutoFlow": "column",
    "overflowX": "auto"
  },
  ".stats-horizontal>:not([hidden])~:not([hidden])": {
    "--tw-divide-x-reverse": "0",
    "borderRightWidth": "calc(1px * var(--tw-divide-x-reverse))",
    "borderLeftWidth": "calc(1px * calc(1 - var(--tw-divide-x-reverse)))",
    "--tw-divide-y-reverse": "0",
    "borderTopWidth": "calc(0px * calc(1 - var(--tw-divide-y-reverse)))",
    "borderBottomWidth": "calc(0px * var(--tw-divide-y-reverse))"
  },
  ":is(:where([dir=\"rtl\"]) .stats-horizontal)": {
    "--tw-divide-x-reverse": "1"
  },
  ".stats-vertical": {
    "gridAutoFlow": "row",
    "overflowY": "auto"
  },
  ".stats-vertical>:not([hidden])~:not([hidden])": {
    "--tw-divide-x-reverse": "0",
    "borderRightWidth": "calc(0px * var(--tw-divide-x-reverse))",
    "borderLeftWidth": "calc(0px * calc(1 - var(--tw-divide-x-reverse)))",
    "--tw-divide-y-reverse": "0",
    "borderTopWidth": "calc(1px * calc(1 - var(--tw-divide-y-reverse)))",
    "borderBottomWidth": "calc(1px * var(--tw-divide-y-reverse))"
  }
}