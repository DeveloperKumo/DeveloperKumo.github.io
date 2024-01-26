module.exports = {
  ".btm-nav": {
    "position": "fixed",
    "bottom": "0px",
    "left": "0px",
    "right": "0px",
    "display": "flex",
    "width": "100%",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-around",
    "paddingBottom": "env(safe-area-inset-bottom)"
  },
  ".btm-nav>*": {
    "position": "relative",
    "display": "flex",
    "height": "100%",
    "flexBasis": "100%",
    "cursor": "pointer",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "gap": "0.25rem"
  }
}