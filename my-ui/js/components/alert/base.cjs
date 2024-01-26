module.exports = {
  ".alert": {
    "display": "grid",
    "width": "100%",
    "gridAutoFlow": "row",
    "alignContent": "flex-start",
    "alignItems": "center",
    "justifyItems": "center",
    "gap": "1rem",
    "textAlign": "center"
  },
  "@media (min-width: 640px)": {
    ".alert": {
      "gridAutoFlow": "column",
      "gridTemplateColumns": "auto minmax(auto,1fr)",
      "justifyItems": "start",
      "textAlign": "left"
    }
  }
}