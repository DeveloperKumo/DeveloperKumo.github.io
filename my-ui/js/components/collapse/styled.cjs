module.exports = {
  "@charset \"UTF-8\"": true,
  ".collapse": {
    "width": "100%",
    "borderRadius": "var(--ice-rounded-box, 1rem)"
  },
  "details.collapse": {
    "width": "100%"
  },
  "details.collapse summary": {
    "position": "relative",
    "display": "block",
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  "details.collapse summary::-webkit-details-marker": {
    "display": "none"
  },
  ".collapse:focus-visible": {
    "outlineStyle": "solid",
    "outlineWidth": "2px",
    "outlineOffset": "2px",
    "outlineColor": "rgba(var(--ice-base-content) / 1)"
  },
  ".collapse:has(.collapse-title:focus-visible),.collapse:has(>input[type=checkbox]:focus-visible),.collapse:has(>input[type=radio]:focus-visible)": {
    "outlineStyle": "solid",
    "outlineWidth": "2px",
    "outlineOffset": "2px",
    "outlineColor": "rgba(var(--ice-base-content) / 1)"
  },
  ".collapse-arrow>.collapse-title:after": {
    "position": "absolute",
    "display": "block",
    "height": "0.5rem",
    "width": "0.5rem",
    "--tw-translate-y": "-100%",
    "--tw-rotate": "45deg",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "transitionProperty": "all",
    "transitionTimingFunction": [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0, 0, 0.2, 1)"
    ],
    "transitionDuration": [
      "150ms",
      "0.2s"
    ],
    "top": "50%",
    "insetInlineEnd": "1.4rem",
    "content": "\"\"",
    "transformOrigin": "75% 75%",
    "boxShadow": "2px 2px",
    "pointerEvents": "none"
  },
  ".collapse-plus>.collapse-title:after": {
    "position": "absolute",
    "display": "block",
    "height": "0.5rem",
    "width": "0.5rem",
    "transitionProperty": "all",
    "transitionTimingFunction": [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0, 0, 0.2, 1)"
    ],
    "transitionDuration": "300ms",
    "top": "0.9rem",
    "insetInlineEnd": "1.4rem",
    "content": "\"+\"",
    "pointerEvents": "none"
  },
  ".collapse:not(.collapse-open):not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-open):not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-open):not(.collapse-close)>.collapse-title": {
    "cursor": "pointer"
  },
  ".collapse:focus:not(.collapse-open):not(.collapse-close):not(.collapse[open])>.collapse-title": {
    "cursor": "unset"
  },
  ".collapse-title": {
    "position": "relative"
  },
  ":where(.collapse>input[type=checkbox]),:where(.collapse>input[type=radio])": {
    "zIndex": 1
  },
  ".collapse-title,:where(.collapse>input[type=checkbox]),:where(.collapse>input[type=radio])": {
    "width": "100%",
    "padding": "1rem",
    "paddingInlineEnd": "3rem",
    "minHeight": "3.75rem",
    "transition": "background-color 0.2s ease-out"
  },
  ".collapse-content": {
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "cursor": "unset",
    "transition": "padding 0.2s ease-out, background-color 0.2s ease-out"
  },
  ".collapse[open]>:where(.collapse-content),.collapse-open>:where(.collapse-content),.collapse:focus:not(.collapse-close)>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input[type=checkbox]:checked~.collapse-content),.collapse:not(.collapse-close)>:where(input[type=radio]:checked~.collapse-content)": {
    "paddingBottom": "1rem",
    "transition": "padding 0.2s ease-out, background-color 0.2s ease-out"
  },
  ".collapse[open].collapse-arrow>.collapse-title:after,.collapse-open.collapse-arrow>.collapse-title:after,.collapse-arrow:focus:not(.collapse-close)>.collapse-title:after,.collapse-arrow:not(.collapse-close)>input[type=checkbox]:checked~.collapse-title:after,.collapse-arrow:not(.collapse-close)>input[type=radio]:checked~.collapse-title:after": {
    "--tw-translate-y": "-50%",
    "--tw-rotate": "225deg",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  ".collapse[open].collapse-plus>.collapse-title:after,.collapse-open.collapse-plus>.collapse-title:after,.collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse-plus:not(.collapse-close)>input[type=checkbox]:checked~.collapse-title:after,.collapse-plus:not(.collapse-close)>input[type=radio]:checked~.collapse-title:after": {
    "content": "\"−\""
  }
}