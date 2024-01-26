module.exports = {
  ".steps .step": {
    "gridTemplateRows": "2.5rem 1fr",
    "gridTemplateColumns": "auto",
    "minWidth": "4rem"
  },
  ".steps .step:before": {
    "top": "0px",
    "gridColumnStart": "1",
    "gridRowStart": "1",
    "height": "0.5rem",
    "width": "100%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-300) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))",
    "content": "\"\"",
    "marginInlineStart": "-100%"
  },
  ".steps .step:after": {
    "content": "counter(step)",
    "counterIncrement": "step",
    "zIndex": 1,
    "position": "relative",
    "gridColumnStart": "1",
    "gridRowStart": "1",
    "display": "grid",
    "height": "2rem",
    "width": "2rem",
    "placeItems": "center",
    "placeSelf": "center",
    "borderRadius": "9999px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-300) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))"
  },
  ".steps .step:first-child:before": {
    "content": "none"
  },
  ".steps .step[data-content]:after": {
    "content": "attr(data-content)"
  },
  ".steps .step-primary+.step-primary:before,.steps .step-primary:after": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-primary) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-primary-content) / var(--tw-text-opacity))"
  },
  ".steps .step-success+.step-success:before,.steps .step-success:after": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-success) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-success-content) / var(--tw-text-opacity))"
  },
  ".steps .step-warning+.step-warning:before,.steps .step-warning:after": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-warning) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-warning-content) / var(--tw-text-opacity))"
  },
  ".steps .step-error+.step-error:before,.steps .step-error:after": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-error) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-error-content) / var(--tw-text-opacity))"
  },
  ".steps .step-neutral+.step-neutral:before,.steps .step-neutral:after": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-neutral-content) / var(--tw-text-opacity))"
  }
}