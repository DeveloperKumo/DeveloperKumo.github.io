module.exports = {
  ".drawer-open>.drawer-toggle": {
    "display": "none"
  },
  ".drawer-open>.drawer-toggle~.drawer-side": {
    "pointerEvents": "auto",
    "visibility": "visible",
    "position": "sticky",
    "display": "block",
    "width": "auto",
    "overscrollBehavior": "auto"
  },
  ".drawer-open>.drawer-toggle~.drawer-side>*:not(.drawer-overlay)": {
    "transform": "translateX(0%)"
  },
  "[dir=rtl] .drawer-open>.drawer-toggle~.drawer-side>*:not(.drawer-overlay)": {
    "transform": "translateX(0%)"
  },
  ".drawer-open>.drawer-toggle~.drawer-side>.drawer-overlay": {
    "cursor": "default",
    "backgroundColor": "transparent"
  },
  ".drawer-open>.drawer-toggle:checked~.drawer-side": {
    "pointerEvents": "auto",
    "visibility": "visible"
  }
}