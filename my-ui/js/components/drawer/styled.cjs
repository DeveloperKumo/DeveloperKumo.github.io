module.exports = {
  ".drawer": {
    "width": "100%"
  },
  ".drawer-side>.drawer-overlay": {
    "cursor": "pointer",
    "backgroundColor": "transparent",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke",
    "transitionTimingFunction": [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0, 0, 0.2, 1)"
    ],
    "transitionDuration": "200ms"
  },
  ".drawer-toggle:checked~.drawer-side>.drawer-overlay": {
    "backgroundColor": "#0006"
  },
  ".drawer-toggle:focus-visible~.drawer-content label.drawer-button": {
    "outlineStyle": "solid",
    "outlineWidth": "2px",
    "outlineOffset": "2px"
  }
}