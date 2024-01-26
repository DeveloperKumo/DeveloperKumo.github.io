module.exports = {
  ".timeline": {
    "position": "relative",
    "display": "flex"
  },
  ":where(.timeline>li)": {
    "position": "relative",
    "display": "grid",
    "flexShrink": 0,
    "alignItems": "center",
    "gridTemplateRows": "var(--ice-timeline-row-start, minmax(0, 1fr)) auto var( --ice-timeline-row-end, minmax(0, 1fr) )",
    "gridTemplateColumns": "var(--ice-timeline-col-start, minmax(0, 1fr)) auto var( --ice-timeline-col-end, minmax(0, 1fr) )"
  },
  ".timeline>li>hr": {
    "width": "100%",
    "borderWidth": "0px"
  },
  ":where(.timeline>li>hr):first-child": {
    "gridColumnStart": "1",
    "gridRowStart": "2"
  },
  ":where(.timeline>li>hr):last-child": {
    "gridColumnStart": "3",
    "gridColumnEnd": "none",
    "gridRowStart": "2",
    "gridRowEnd": "auto"
  },
  ".timeline-start": {
    "gridColumnStart": "1",
    "gridColumnEnd": "4",
    "gridRowStart": "1",
    "gridRowEnd": "2",
    "margin": "0.25rem",
    "alignSelf": "flex-end",
    "justifySelf": "center"
  },
  ".timeline-middle": {
    "gridColumnStart": "2",
    "gridRowStart": "2"
  },
  ".timeline-end": {
    "gridColumnStart": "1",
    "gridColumnEnd": "4",
    "gridRowStart": "3",
    "gridRowEnd": "4",
    "margin": "0.25rem",
    "alignSelf": "flex-start",
    "justifySelf": "center"
  }
}