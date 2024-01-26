module.exports = {
  ".timeline-vertical": {
    "flexDirection": "column"
  },
  ".timeline-compact,.timeline-horizontal.timeline-compact": {
    "--ice-timeline-row-start": "0"
  },
  ".timeline-compact .timeline-start,.timeline-horizontal.timeline-compact .timeline-start": {
    "gridColumnStart": "1",
    "gridColumnEnd": "4",
    "gridRowStart": "3",
    "gridRowEnd": "4",
    "margin": "0.25rem",
    "alignSelf": "flex-start",
    "justifySelf": "center"
  },
  ".timeline-compact li:has(.timeline-start) .timeline-end,.timeline-horizontal.timeline-compact li:has(.timeline-start) .timeline-end": {
    "gridColumnStart": "none",
    "gridRowStart": "auto"
  },
  ".timeline-vertical.timeline-compact>li": {
    "--ice-timeline-col-start": "0"
  },
  ".timeline-vertical.timeline-compact .timeline-start": {
    "gridColumnStart": "3",
    "gridColumnEnd": "4",
    "gridRowStart": "1",
    "gridRowEnd": "4",
    "alignSelf": "center",
    "justifySelf": "start"
  },
  ".timeline-vertical.timeline-compact li:has(.timeline-start) .timeline-end": {
    "gridColumnStart": "auto",
    "gridRowStart": "none"
  },
  ":where(.timeline-vertical>li)": {
    "--ice-timeline-row-start": "minmax(0, 1fr)",
    "--ice-timeline-row-end": "minmax(0, 1fr)",
    "justifyItems": "center"
  },
  ".timeline-vertical>li>hr": {
    "height": "100%",
    "width": "0.25rem"
  },
  ":where(.timeline-vertical>li>hr):first-child": {
    "gridColumnStart": "2",
    "gridRowStart": "1"
  },
  ":where(.timeline-vertical>li>hr):last-child": {
    "gridColumnStart": "2",
    "gridColumnEnd": "auto",
    "gridRowStart": "3",
    "gridRowEnd": "none"
  },
  ".timeline-vertical .timeline-start": {
    "gridColumnStart": "1",
    "gridColumnEnd": "2",
    "gridRowStart": "1",
    "gridRowEnd": "4",
    "alignSelf": "center",
    "justifySelf": "end"
  },
  ".timeline-vertical .timeline-end": {
    "gridColumnStart": "3",
    "gridColumnEnd": "4",
    "gridRowStart": "1",
    "gridRowEnd": "4",
    "alignSelf": "center",
    "justifySelf": "start"
  },
  ".timeline-vertical:where(.timeline-snap-icon)>li": {
    "--ice-timeline-col-start": "minmax(0, 1fr)",
    "--ice-timeline-row-start": "0.5rem"
  },
  ".timeline-horizontal": {
    "flexDirection": "row"
  },
  ".timeline-horizontal>li>hr": {
    "width": "100%",
    "height": "0.25rem"
  },
  ":where(.timeline-horizontal>li)": {
    "alignItems": "center"
  },
  ":where(.timeline-horizontal>li>hr):first-child": {
    "gridColumnStart": "1",
    "gridRowStart": "2"
  },
  ":where(.timeline-horizontal>li>hr):last-child": {
    "gridColumnStart": "3",
    "gridColumnEnd": "none",
    "gridRowStart": "2",
    "gridRowEnd": "auto"
  },
  ".timeline-horizontal .timeline-start": {
    "gridColumnStart": "1",
    "gridColumnEnd": "4",
    "gridRowStart": "1",
    "gridRowEnd": "2",
    "alignSelf": "flex-end",
    "justifySelf": "center"
  },
  ".timeline-horizontal .timeline-end": {
    "gridColumnStart": "1",
    "gridColumnEnd": "4",
    "gridRowStart": "3",
    "gridRowEnd": "4",
    "alignSelf": "flex-start",
    "justifySelf": "center"
  },
  ":where(.timeline-snap-icon)>li,.timeline-horizontal:where(.timeline-snap-icon)>li": {
    "--ice-timeline-col-start": "0.5rem",
    "--ice-timeline-row-start": "minmax(0, 1fr)"
  },
  ":where(.timeline-vertical:has(.timeline-middle)>li>hr):first-child": {
    "borderBottomRightRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderBottomLeftRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderTopLeftRadius": "0px",
    "borderTopRightRadius": "0px"
  },
  ":where(.timeline-vertical:has(.timeline-middle)>li>hr):last-child": {
    "borderTopLeftRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderTopRightRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderBottomRightRadius": "0px",
    "borderBottomLeftRadius": "0px"
  },
  ":where(.timeline-vertical:not(:has(.timeline-middle)) :first-child>hr:last-child)": {
    "borderTopLeftRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderTopRightRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderBottomRightRadius": "0px",
    "borderBottomLeftRadius": "0px"
  },
  ":where(.timeline-vertical:not(:has(.timeline-middle)) :last-child>hr:first-child)": {
    "borderBottomRightRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderBottomLeftRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderTopLeftRadius": "0px",
    "borderTopRightRadius": "0px"
  },
  ":where(.timeline-horizontal:has(.timeline-middle)>li>hr):first-child": {
    "borderStartEndRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderEndEndRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderStartStartRadius": "0px",
    "borderEndStartRadius": "0px"
  },
  ":where(.timeline-horizontal:has(.timeline-middle)>li>hr):last-child": {
    "borderStartStartRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderEndStartRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderStartEndRadius": "0px",
    "borderEndEndRadius": "0px"
  },
  ":where(.timeline-horizontal:not(:has(.timeline-middle)) :first-child>hr:last-child)": {
    "borderStartStartRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderEndStartRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderStartEndRadius": "0px",
    "borderEndEndRadius": "0px"
  },
  ":where(.timeline-horizontal:not(:has(.timeline-middle)) :last-child>hr:first-child)": {
    "borderStartEndRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderEndEndRadius": "var(--ice-rounded-badge, 1.9rem)",
    "borderStartStartRadius": "0px",
    "borderEndStartRadius": "0px"
  }
}