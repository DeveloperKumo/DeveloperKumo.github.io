module.exports = {
  ".btn": {
    "display": "inline-flex",
    "height": "3rem",
    "minHeight": "3rem",
    "flexShrink": 0,
    "cursor": "pointer",
    "userSelect": "none",
    "flexWrap": "wrap",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)",
    "borderColor": "transparent",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "textAlign": "center",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0, 0, 0.2, 1)"
    ],
    "transitionDuration": "200ms",
    "lineHeight": "1em",
    "fontSize": "0.875rem"
  },
  ".btn-disabled,.btn[disabled],.btn:disabled": {
    "pointerEvents": "none",
    "cursor": "not-allowed"
  }
}