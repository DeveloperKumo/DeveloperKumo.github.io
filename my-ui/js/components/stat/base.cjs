module.exports = {
  ".stats": {
    "display": "inline-grid"
  },
  ":where(.stats)": {
    "gridAutoFlow": "column"
  },
  ".stat": {
    "display": "inline-grid",
    "width": "100%",
    "gridTemplateColumns": "repeat(1, 1fr)"
  },
  ".stat-figure": {
    "gridColumnStart": "2",
    "gridRow": "span 3 / span 3",
    "gridRowStart": "1",
    "placeSelf": "center",
    "justifySelf": "end"
  },
  ".stat-title": {
    "gridColumnStart": "1",
    "whiteSpace": "nowrap"
  },
  ".stat-value": {
    "gridColumnStart": "1",
    "whiteSpace": "nowrap"
  },
  ".stat-desc": {
    "gridColumnStart": "1",
    "whiteSpace": "nowrap"
  },
  ".stat-actions": {
    "gridColumnStart": "1",
    "whiteSpace": "nowrap"
  }
}