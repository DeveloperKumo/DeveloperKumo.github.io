module.exports = {
  ".navbar": {
    "display": "flex",
    "alignItems": "center"
  },
  ":where(.navbar>*)": {
    "display": "inline-flex",
    "alignItems": "center"
  },
  ".navbar-start": {
    "width": "50%",
    "justifyContent": "flex-start"
  },
  ".navbar-center": {
    "flexShrink": 0
  },
  ".navbar-end": {
    "width": "50%",
    "justifyContent": "flex-end"
  }
}