module.exports = {
  ".timeline hr": {
    "height": "0.25rem"
  },
  ":where(.timeline hr)": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-300) / var(--tw-bg-opacity))"
  },
  ":where(.timeline:has(.timeline-middle) hr):first-child": {
    "borderStartEndRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderEndEndRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderStartStartRadius": "0px",
    "borderEndStartRadius": "0px"
  },
  ":where(.timeline:has(.timeline-middle) hr):last-child": {
    "borderStartStartRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderEndStartRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderStartEndRadius": "0px",
    "borderEndEndRadius": "0px"
  },
  ":where(.timeline:not(:has(.timeline-middle)) :first-child hr:last-child)": {
    "borderStartStartRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderEndStartRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderStartEndRadius": "0px",
    "borderEndEndRadius": "0px"
  },
  ":where(.timeline:not(:has(.timeline-middle)) :last-child hr:first-child)": {
    "borderStartEndRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderEndEndRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderStartStartRadius": "0px",
    "borderEndStartRadius": "0px"
  },
  ".timeline-box": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "borderWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-base-300) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "--tw-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "--tw-shadow-colored": "0 1px 2px 0 var(--tw-shadow-color)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
  }
}