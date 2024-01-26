module.exports = {
  ".breadcrumbs": {
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem"
  },
  ".breadcrumbs>ul>li>a:focus,.breadcrumbs>ol>li>a:focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  ".breadcrumbs>ul>li>a:focus-visible,.breadcrumbs>ol>li>a:focus-visible": {
    "outline": "2px solid currentColor",
    "outlineOffset": "2px"
  },
  ".breadcrumbs>ul>li+*:before,.breadcrumbs>ol>li+*:before": {
    "content": "\"\"",
    "borderTop": "1px solid",
    "borderRight": "1px solid",
    "backgroundColor": "transparent",
    "marginLeft": "0.5rem",
    "marginRight": "0.75rem",
    "display": "block",
    "height": "0.375rem",
    "width": "0.375rem",
    "--tw-rotate": "45deg",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "opacity": 0.4
  },
  "[dir=rtl] .breadcrumbs>ul>li+*:before,[dir=rtl] .breadcrumbs>ol>li+*:before": {
    "--tw-rotate": "-135deg"
  }
}