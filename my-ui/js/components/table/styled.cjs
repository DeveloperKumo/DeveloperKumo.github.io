module.exports = {
  ".table": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "textAlign": "left",
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem"
  },
  ".table :where(th,td)": {
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.75rem",
    "paddingBottom": "0.75rem",
    "verticalAlign": "middle"
  },
  ".table tr.active,.table tr.active:nth-child(even),.table-zebra tbody tr:nth-child(even)": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-200) / var(--tw-bg-opacity))"
  },
  ".table tr.hover:hover,.table tr.hover:nth-child(even):hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-200) / var(--tw-bg-opacity))"
  },
  ".table-zebra tr.active,.table-zebra tr.active:nth-child(even),.table-zebra-zebra tbody tr:nth-child(even)": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-300) / var(--tw-bg-opacity))"
  },
  ".table-zebra tr.hover:hover,.table-zebra tr.hover:nth-child(even):hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-300) / var(--tw-bg-opacity))"
  },
  ".table :where(thead,tbody) :where(tr:not(:last-child)),.table :where(thead,tbody) :where(tr:first-child:last-child)": {
    "borderBottomWidth": "1px",
    "--tw-border-opacity": "1",
    "borderBottomColor": "rgba(var(--ice-base-200) / var(--tw-border-opacity))"
  },
  ".table :where(thead,tfoot)": {
    "whiteSpace": "nowrap",
    "fontSize": "0.75rem",
    "lineHeight": "1rem",
    "fontWeight": 700,
    "color": "rgba(var(--ice-base-content) / 0.6)"
  }
}