module.exports = {
  ".carousel": {
    "display": "inline-flex",
    "overflowX": "scroll",
    "scrollSnapType": "x mandatory",
    "scrollBehavior": "smooth"
  },
  ".carousel-vertical": {
    "flexDirection": "column",
    "overflowY": "scroll",
    "scrollSnapType": "y mandatory"
  },
  ".carousel-item": {
    "boxSizing": "content-box",
    "display": "flex",
    "flex": "none",
    "scrollSnapAlign": "start"
  },
  ".carousel-center .carousel-item": {
    "scrollSnapAlign": "center"
  },
  ".carousel-end .carousel-item": {
    "scrollSnapAlign": "end"
  }
}