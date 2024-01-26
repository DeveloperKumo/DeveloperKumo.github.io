module.exports = {
  ".swap": {
    "cursor": "pointer"
  },
  ".swap>*": {
    "transitionDuration": "300ms",
    "transitionTimingFunction": "cubic-bezier(0, 0, 0.2, 1)",
    "transitionProperty": "transform, opacity"
  },
  ".swap-rotate .swap-on,.swap-rotate .swap-indeterminate,.swap-rotate input:indeterminate~.swap-on": {
    "--tw-rotate": "45deg",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".swap-rotate input:checked~.swap-off,.swap-active:where(.swap-rotate) .swap-off,.swap-rotate input:indeterminate~.swap-off": {
    "--tw-rotate": "-45deg",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".swap-rotate input:checked~.swap-on,.swap-active:where(.swap-rotate) .swap-on,.swap-rotate input:indeterminate~.swap-indeterminate": {
    "--tw-rotate": "0deg",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".swap-flip": {
    "transformStyle": "preserve-3d",
    "perspective": "16em"
  },
  ".swap-flip .swap-on,.swap-flip .swap-indeterminate,.swap-flip input:indeterminate~.swap-on": {
    "transform": "rotateY(180deg)",
    "backfaceVisibility": "hidden",
    "opacity": 1
  },
  ".swap-flip input:checked~.swap-off,.swap-active:where(.swap-flip) .swap-off,.swap-flip input:indeterminate~.swap-off": {
    "transform": "rotateY(-180deg)",
    "backfaceVisibility": "hidden",
    "opacity": 1
  },
  ".swap-flip input:checked~.swap-on,.swap-active:where(.swap-flip) .swap-on,.swap-flip input:indeterminate~.swap-indeterminate": {
    "transform": "rotateY(0deg)"
  }
}