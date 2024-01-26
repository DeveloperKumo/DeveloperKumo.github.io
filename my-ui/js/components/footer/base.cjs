module.exports = {
  ".footer": {
    "display": "grid",
    "width": "100%",
    "gridAutoFlow": "row",
    "placeItems": "start"
  },
  ".footer>*": {
    "display": "grid",
    "placeItems": "start"
  },
  ".footer-center": {
    "placeItems": "center",
    "textAlign": "center"
  },
  ".footer-center>*": {
    "placeItems": "center"
  },
  "@media (min-width: 48rem)": {
    ".footer": {
      "gridAutoFlow": "column"
    },
    ".footer-center": {
      "gridAutoFlow": "row dense"
    }
  }
}