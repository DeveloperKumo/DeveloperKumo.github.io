module.exports = {
  ".steps-horizontal": {
    "gridAutoColumns": "1fr",
    "display": "inline-grid",
    "gridAutoFlow": "column",
    "overflow": "hidden",
    "overflowX": "auto"
  },
  ".steps-horizontal .step": {
    "gridTemplateRows": [
      "2.5rem 1fr",
      "repeat(2, minmax(0, 1fr))"
    ],
    "gridTemplateColumns": [
      "auto",
      "repeat(1, minmax(0, 1fr))"
    ],
    "minWidth": "4rem",
    "display": "grid",
    "placeItems": "center",
    "textAlign": "center"
  },
  ".steps-horizontal .step:before": {
    "height": "0.5rem",
    "width": "100%",
    "--tw-translate-x": "0px",
    "--tw-translate-y": "0px",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "content": "\"\"",
    "marginInlineStart": "-100%",
    "marginLeft": "-100%"
  },
  ":is(:where([dir=\"rtl\"]) .steps-horizontal .step):before": {
    "--tw-translate-x": "0px",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".steps-vertical": {
    "gridAutoRows": "1fr",
    "gridAutoFlow": "row"
  },
  ".steps-vertical .step": {
    "gap": "0.5rem",
    "gridTemplateColumns": [
      "2.5rem 1fr",
      "repeat(2, minmax(0, 1fr))"
    ],
    "gridTemplateRows": [
      "auto",
      "repeat(1, minmax(0, 1fr))"
    ],
    "minHeight": "4rem",
    "justifyItems": "start",
    "display": "grid"
  },
  ".steps-vertical .step:before": {
    "height": "100%",
    "width": "0.5rem",
    "--tw-translate-x": "-50%",
    "--tw-translate-y": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "marginInlineStart": "50%",
    "marginLeft": "50%"
  },
  ":is(:where([dir=\"rtl\"]) .steps-vertical .step):before": {
    "--tw-translate-x": "50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  "[dir=rtl] .steps-vertical .step:before": {
    "marginRight": "auto"
  }
}