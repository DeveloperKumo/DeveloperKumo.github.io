module.exports = {
  ".stack": {
    "display": "inline-grid"
  },
  ".stack>*": {
    "gridColumnStart": "1",
    "gridRowStart": "1",
    "transform": "translateY(10%) scale(0.9)",
    "zIndex": 1
  },
  ".stack>*:nth-child(2)": {
    "transform": "translateY(5%) scale(0.95)",
    "zIndex": 2
  },
  ".stack>*:nth-child(1)": {
    "transform": "translateY(0) scale(1)",
    "zIndex": 3
  }
}