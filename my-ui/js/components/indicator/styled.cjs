module.exports = {
  ".indicator :where(.indicator-item)": {
    "bottom": "auto",
    "insetInlineEnd": "0px",
    "insetInlineStart": "auto",
    "top": "0px",
    "--tw-translate-y": "-50%",
    "--tw-translate-x": "50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ":is(:where([dir=\"rtl\"]) .indicator :where(.indicator-item))": {
    "--tw-translate-x": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".indicator :where(.indicator-item.indicator-start)": {
    "insetInlineEnd": "auto",
    "insetInlineStart": "0px",
    "--tw-translate-x": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ":is(:where([dir=\"rtl\"]) .indicator :where(.indicator-item.indicator-start))": {
    "--tw-translate-x": "50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".indicator :where(.indicator-item.indicator-center)": {
    "insetInlineEnd": "50%",
    "insetInlineStart": "50%",
    "--tw-translate-x": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ":is(:where([dir=\"rtl\"]) .indicator :where(.indicator-item.indicator-center))": {
    "--tw-translate-x": "50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".indicator :where(.indicator-item.indicator-end)": {
    "insetInlineEnd": "0px",
    "insetInlineStart": "auto",
    "--tw-translate-x": "50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ":is(:where([dir=\"rtl\"]) .indicator :where(.indicator-item.indicator-end))": {
    "--tw-translate-x": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".indicator :where(.indicator-item.indicator-bottom)": {
    "bottom": "0px",
    "top": "auto",
    "--tw-translate-y": "50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".indicator :where(.indicator-item.indicator-middle)": {
    "bottom": "50%",
    "top": "50%",
    "--tw-translate-y": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".indicator :where(.indicator-item.indicator-top)": {
    "bottom": "auto",
    "top": "0px",
    "--tw-translate-y": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  }
}