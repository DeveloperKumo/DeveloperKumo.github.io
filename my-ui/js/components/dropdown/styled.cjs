module.exports = {
  ".dropdown:is(:not(details)) .dropdown-content": {
    "transformOrigin": "top",
    "--tw-scale-x": ".95",
    "--tw-scale-y": ".95",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0, 0, 0.2, 1)"
    ],
    "transitionDuration": "200ms"
  },
  ".dropdown-bottom .dropdown-content": {
    "transformOrigin": "top"
  },
  ".dropdown-top .dropdown-content": {
    "transformOrigin": "bottom"
  },
  ".dropdown-left .dropdown-content": {
    "transformOrigin": "right"
  },
  ".dropdown-right .dropdown-content": {
    "transformOrigin": "left"
  },
  ".dropdown.dropdown-open .dropdown-content,.dropdown:focus .dropdown-content,.dropdown:focus-within .dropdown-content": {
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".dropdown.dropdown-hover:hover .dropdown-content": {
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  }
}