module.exports = {
  ".drawer": {
    "position": "relative",
    "display": "grid",
    "gridAutoColumns": "max-content auto"
  },
  ".drawer-content": {
    "gridColumnStart": "2",
    "gridRowStart": "1",
    "minWidth": "0px"
  },
  ".drawer-side": {
    "pointerEvents": "none",
    "position": "fixed",
    "insetInlineStart": "0px",
    "top": "0px",
    "gridColumnStart": "1",
    "gridRowStart": "1",
    "display": "grid",
    "width": "100%",
    "gridTemplateColumns": "repeat(1, minmax(0, 1fr))",
    "gridTemplateRows": "repeat(1, minmax(0, 1fr))",
    "alignItems": "flex-start",
    "justifyItems": "start",
    "overflowY": "auto",
    "overscrollBehavior": "contain",
    "height": "100dvh"
  },
  ".drawer-side>.drawer-overlay": {
    "position": "sticky",
    "top": "0px",
    "placeSelf": "stretch"
  },
  ".drawer-side>*": {
    "gridColumnStart": "1",
    "gridRowStart": "1"
  },
  ".drawer-side>*:not(.drawer-overlay)": {
    "transitionProperty": "transform",
    "transitionTimingFunction": [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0, 0, 0.2, 1)"
    ],
    "transitionDuration": "300ms",
    "willChange": "transform",
    "transform": "translateX(-100%)"
  },
  "[dir=rtl] .drawer-side>*:not(.drawer-overlay)": {
    "transform": "translateX(100%)"
  },
  ".drawer-toggle": {
    "position": "fixed",
    "height": "0px",
    "width": "0px",
    "appearance": "none",
    "opacity": 0
  },
  ".drawer-toggle:checked~.drawer-side": {
    "pointerEvents": "auto",
    "visibility": "visible"
  },
  ".drawer-toggle:checked~.drawer-side>*:not(.drawer-overlay)": {
    "transform": "translateX(0%)"
  },
  ".drawer-end": {
    "gridAutoColumns": "auto max-content"
  },
  ".drawer-end .drawer-toggle~.drawer-content": {
    "gridColumnStart": "1"
  },
  ".drawer-end .drawer-toggle~.drawer-side": {
    "gridColumnStart": "2",
    "justifyItems": "end"
  },
  ".drawer-end .drawer-toggle~.drawer-side>*:not(.drawer-overlay)": {
    "transform": "translateX(100%)"
  },
  "[dir=rtl] .drawer-end .drawer-toggle~.drawer-side>*:not(.drawer-overlay)": {
    "transform": "translateX(-100%)"
  },
  ".drawer-end .drawer-toggle:checked~.drawer-side>*:not(.drawer-overlay)": {
    "transform": "translateX(0%)"
  }
}