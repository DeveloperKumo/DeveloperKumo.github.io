module.exports = {
  ":where(.toast)": {
    "bottom": "0px",
    "insetInlineEnd": "0px",
    "insetInlineStart": "auto",
    "top": "auto",
    "--tw-translate-x": "0px",
    "--tw-translate-y": "0px",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".toast:where(.toast-start)": {
    "insetInlineEnd": "auto",
    "insetInlineStart": "0px",
    "--tw-translate-x": "0px",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".toast:where(.toast-center)": {
    "insetInlineEnd": "50%",
    "insetInlineStart": "50%",
    "--tw-translate-x": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ":is(:where([dir=\"rtl\"]) .toast:where(.toast-center))": {
    "--tw-translate-x": "50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".toast:where(.toast-end)": {
    "insetInlineEnd": "0px",
    "insetInlineStart": "auto",
    "--tw-translate-x": "0px",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".toast:where(.toast-bottom)": {
    "bottom": "0px",
    "top": "auto",
    "--tw-translate-y": "0px",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".toast:where(.toast-middle)": {
    "bottom": "auto",
    "top": "50%",
    "--tw-translate-y": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".toast:where(.toast-top)": {
    "bottom": "auto",
    "top": "0px",
    "--tw-translate-y": "0px",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  }
}