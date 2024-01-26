module.exports = {
  ".range": {
    "overflow": "hidden",
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "backgroundColor": "transparent",
    "appearance": "none",
    "--ice-range-shdw": "var(--ice-base-content)"
  },
  ".range:focus-visible::-webkit-slider-thumb": {
    "--ice-focus-shadow": "0 0 0 6px rgba(var(--ice-base-400)) inset, 0 0 0 2rem rgba(var(--ice-range-shdw)) inset"
  },
  ".range:focus-visible::-moz-range-thumb": {
    "--ice-focus-shadow": "0 0 0 6px rgba(var(--ice-base-400)) inset, 0 0 0 2rem rgba(var(--ice-range-shdw)) inset"
  },
  ".range::-webkit-slider-runnable-track": {
    "height": "0.5rem",
    "width": "100%",
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "backgroundColor": "rgba(var(--ice-base-content) / 0.1)"
  },
  ".range::-moz-range-track": {
    "height": "0.5rem",
    "width": "100%",
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "backgroundColor": "rgba(var(--ice-base-content) / 0.1)"
  },
  ".range::-webkit-slider-thumb": {
    "position": "relative",
    "height": "1.5rem",
    "width": "1.5rem",
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "borderStyle": "none",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-400) / var(--tw-bg-opacity))",
    "appearance": "none",
    "top": "50%",
    "transform": "translateY(-50%)",
    "color": "rgba(var(--ice-range-shdw))",
    "--ice-filler-size": "100rem",
    "--ice-filler-offset": "0.6rem",
    "boxShadow": "0 0 0 3px rgba(var(--ice-range-shdw)) inset, var(--ice-focus-shadow, 0 0), calc(var(--ice-filler-size) * -1 - var(--ice-filler-offset)) 0 0 var(--ice-filler-size)"
  },
  ".range::-moz-range-thumb": {
    "position": "relative",
    "height": "1.5rem",
    "width": "1.5rem",
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "borderStyle": "none",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-400) / var(--tw-bg-opacity))",
    "top": "50%",
    "color": "rgba(var(--ice-range-shdw))",
    "--ice-filler-size": "100rem",
    "--ice-filler-offset": "0.5rem",
    "boxShadow": "0 0 0 3px rgba(var(--ice-range-shdw)) inset, var(--ice-focus-shadow, 0 0), calc(var(--ice-filler-size) * -1 - var(--ice-filler-offset)) 0 0 var(--ice-filler-size)"
  },
  ".range-primary": {
    "--ice-range-shdw": "var(--ice-primary)"
  },
  ".range-success": {
    "--ice-range-shdw": "var(--ice-success)"
  },
  ".range-warning": {
    "--ice-range-shdw": "var(--ice-warning)"
  },
  ".range-error": {
    "--ice-range-shdw": "var(--ice-error)"
  },
  ".range-neutral": {
    "--ice-range-shdw": "var(--ice-neutral)"
  }
}