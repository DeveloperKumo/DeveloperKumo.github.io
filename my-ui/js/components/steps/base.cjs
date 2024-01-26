module.exports = {
  ".steps": {
    "display": "inline-grid",
    "gridAutoFlow": "column",
    "overflow": "hidden",
    "overflowX": "auto",
    "counterReset": "step",
    "gridAutoColumns": "1fr"
  },
  ".steps .step": {
    "display": "grid",
    "gridTemplateColumns": "repeat(1, minmax(0, 1fr))",
    "gridTemplateRows": "repeat(2, minmax(0, 1fr))",
    "placeItems": "center",
    "textAlign": "center"
  }
}