module.exports = {
  ".tooltip": {
    "position": "relative",
    "display": "inline-block",
    "textAlign": "center",
    "--tooltip-tail": "0.1875rem",
    "--tooltip-color": "rgba(var(--ice-neutral) / 1)",
    "--tooltip-text-color": "rgba(var(--ice-neutral-content) / 1)",
    "--tooltip-tail-offset": "calc(100% + 0.0625rem - var(--tooltip-tail))"
  },
  ".tooltip-primary": {
    "--tooltip-color": "rgba(var(--ice-primary) / 1)",
    "--tooltip-text-color": "rgba(var(--ice-primary-content) / 1)"
  },
  ".tooltip-success": {
    "--tooltip-color": "rgba(var(--ice-success) / 1)",
    "--tooltip-text-color": "rgba(var(--ice-success-content) / 1)"
  },
  ".tooltip-warning": {
    "--tooltip-color": "rgba(var(--ice-warning) / 1)",
    "--tooltip-text-color": "rgba(var(--ice-warning-content) / 1)"
  },
  ".tooltip-error": {
    "--tooltip-color": "rgba(var(--ice-error) / 1)",
    "--tooltip-text-color": "rgba(var(--ice-error-content) / 1)"
  },
  ".tooltip-neutral": {
    "--tooltip-color": "rgba(var(--ice-neutral) / 1)",
    "--tooltip-text-color": "rgba(var(--ice-neutral-content) / 1)"
  },
  ".tooltip:before,.tooltip:after": {
    "opacity": 0,
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionDelay": "100ms",
    "transitionDuration": "200ms",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
  },
  ".tooltip:after": {
    "content": "\"\"",
    "borderStyle": "solid",
    "borderWidth": "var(--tooltip-tail, 0)",
    "width": "0",
    "height": "0",
    "display": "block",
    "position": "absolute"
  },
  ".tooltip:before": {
    "maxWidth": "20rem",
    "borderRadius": "0.25rem",
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "paddingTop": "0.25rem",
    "paddingBottom": "0.25rem",
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem",
    "backgroundColor": "var(--tooltip-color)",
    "color": "var(--tooltip-text-color)",
    "width": "max-content"
  },
  ".tooltip.tooltip-open:before,.tooltip.tooltip-open:after,.tooltip:hover:before,.tooltip:hover:after": {
    "opacity": 1,
    "transitionDelay": "75ms"
  },
  ".tooltip:has(:focus-visible):after,.tooltip:has(:focus-visible):before": {
    "opacity": 1,
    "transitionDelay": "75ms"
  },
  ".tooltip:not([data-tip]):hover:before,.tooltip:not([data-tip]):hover:after": {
    "visibility": "hidden",
    "opacity": 0
  },
  ".tooltip:after,.tooltip-top:after": {
    "transform": "translateX(-50%)",
    "borderColor": "var(--tooltip-color) transparent transparent transparent",
    "top": "auto",
    "left": "50%",
    "right": "auto",
    "bottom": "var(--tooltip-tail-offset)"
  },
  ".tooltip-bottom:after": {
    "transform": "translateX(-50%)",
    "borderColor": "transparent transparent var(--tooltip-color) transparent",
    "top": "var(--tooltip-tail-offset)",
    "left": "50%",
    "right": "auto",
    "bottom": "auto"
  },
  ".tooltip-left:after": {
    "transform": "translateY(-50%)",
    "borderColor": "transparent transparent transparent var(--tooltip-color)",
    "top": "50%",
    "left": "auto",
    "right": "calc(var(--tooltip-tail-offset) + 0.0625rem)",
    "bottom": "auto"
  },
  ".tooltip-right:after": {
    "transform": "translateY(-50%)",
    "borderColor": "transparent var(--tooltip-color) transparent transparent",
    "top": "50%",
    "left": "calc(var(--tooltip-tail-offset) + 0.0625rem)",
    "right": "auto",
    "bottom": "auto"
  }
}