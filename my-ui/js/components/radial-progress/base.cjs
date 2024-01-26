module.exports = {
  ".radial-progress": {
    "--value": "0",
    "--size": "5rem",
    "--thickness": "calc(var(--size) / 10)",
    "verticalAlign": "middle",
    "boxSizing": "content-box",
    "position": "relative",
    "display": "inline-grid",
    "height": "var(--size)",
    "width": "var(--size)",
    "placeContent": "center",
    "borderRadius": "9999px",
    "backgroundColor": "transparent"
  },
  ".radial-progress:after": {
    "backgroundColor": "currentColor",
    "inset": "calc(50% - var(--thickness) / 2)",
    "transform": "rotate(calc(var(--value) * 3.6deg - 90deg)) translate(calc(var(--size) / 2 - 50%))"
  },
  ".radial-progress::-moz-progress-bar": {
    "appearance": "none",
    "backgroundColor": "transparent"
  },
  ".radial-progress::-webkit-progress-value": {
    "appearance": "none",
    "backgroundColor": "transparent"
  },
  ".radial-progress::-webkit-progress-bar": {
    "appearance": "none",
    "backgroundColor": "transparent"
  },
  ".radial-progress:before,.radial-progress:after": {
    "position": "absolute",
    "borderRadius": "9999px",
    "content": "\"\""
  },
  ".radial-progress:before": {
    "inset": "0px",
    "background": "radial-gradient(farthest-side, currentColor 98%, #0000) top/var(--thickness) var(--thickness) no-repeat, conic-gradient(currentColor calc(var(--value) * 1%), #0000 0)",
    "WebkitMask": "radial-gradient( farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)) )",
    "mask": "radial-gradient( farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)) )"
  }
}