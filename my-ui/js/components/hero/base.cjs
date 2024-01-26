module.exports = {
  ".hero": {
    "display": "grid",
    "width": "100%",
    "placeItems": "center",
    "backgroundSize": "cover",
    "backgroundPosition": "center"
  },
  ".hero>*": {
    "gridColumnStart": "1",
    "gridRowStart": "1"
  },
  ".hero-overlay": {
    "gridColumnStart": "1",
    "gridRowStart": "1",
    "height": "100%",
    "width": "100%"
  },
  ".hero-content": {
    "zIndex": 0,
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  }
}