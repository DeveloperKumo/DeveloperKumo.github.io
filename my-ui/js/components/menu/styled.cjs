module.exports = {
  ".menu": {
    "padding": "0.5rem"
  },
  ":where(.menu li:empty)": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-content) / var(--tw-bg-opacity))",
    "opacity": 0.1,
    "margin": "0.5rem 1rem",
    "height": "1px"
  },
  ".menu :where(li ul)": {
    "marginInlineStart": "1rem",
    "paddingInlineStart": "0.5rem"
  },
  ".menu :where(li ul):before": {
    "position": "absolute",
    "bottom": "0.75rem",
    "insetInlineStart": "0px",
    "top": "0.75rem",
    "width": "1px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-content) / var(--tw-bg-opacity))",
    "opacity": 0.1,
    "content": "\"\""
  },
  ".menu :where(li:not(.menu-title)>*:not(ul):not(details):not(.menu-title)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title))": {
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "textAlign": "start",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0, 0, 0.2, 1)"
    ],
    "transitionDuration": "200ms",
    "textWrap": "balance"
  },
  ":where(.menu li:not(.menu-title):not(.disabled)>*:not(ul):not(details):not(.menu-title)):not(summary):not(.active).focus,:where(.menu li:not(.menu-title):not(.disabled)>*:not(ul):not(details):not(.menu-title)):not(summary):not(.active):focus,:where(.menu li:not(.menu-title):not(.disabled)>*:not(ul):not(details):not(.menu-title)):is(summary):not(.active):focus-visible,:where(.menu li:not(.menu-title):not(.disabled)>details>summary:not(.menu-title)):not(summary):not(.active).focus,:where(.menu li:not(.menu-title):not(.disabled)>details>summary:not(.menu-title)):not(summary):not(.active):focus,:where(.menu li:not(.menu-title):not(.disabled)>details>summary:not(.menu-title)):is(summary):not(.active):focus-visible": {
    "cursor": "pointer",
    "backgroundColor": "rgba(var(--ice-base-content) / 0.1)",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))",
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  ":where(.menu li:not(.menu-title):not(.disabled)>*:not(ul):not(details):not(.menu-title)):not(.active):hover,:where(.menu li:not(.menu-title):not(.disabled)>details>summary:not(.menu-title)):not(.active):hover": {
    "cursor": "pointer",
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  "@supports (color: oklch(0 0 0))": {
    ":where(.menu li:not(.menu-title):not(.disabled)>*:not(ul):not(details):not(.menu-title)):not(.active):hover,:where(.menu li:not(.menu-title):not(.disabled)>details>summary:not(.menu-title)):not(.active):hover": {
      "backgroundColor": "rgba(var(--ice-base-content) / 0.1)"
    }
  },
  ".menu li>*:not(ul):not(.menu-title):not(details):active,.menu li>*:not(ul):not(.menu-title):not(details).active,.menu li>details>summary:active": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-neutral-content) / var(--tw-text-opacity))"
  },
  ".menu li.disabled": {
    "color": "rgba(var(--ice-base-content) / 0.3)"
  },
  ".menu :where(li>details>summary)::-webkit-details-marker": {
    "display": "none"
  },
  ".menu :where(li>details>summary):after,.menu :where(li>.menu-dropdown-toggle):after": {
    "justifySelf": "end",
    "display": "block",
    "marginTop": "-0.5rem",
    "height": "0.5rem",
    "width": "0.5rem",
    "transform": "rotate(45deg)",
    "transitionProperty": "transform, margin-top",
    "transitionDuration": "0.3s",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "content": "\"\"",
    "transformOrigin": "75% 75%",
    "boxShadow": "2px 2px",
    "pointerEvents": "none"
  },
  ".menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after": {
    "transform": "rotate(225deg)",
    "marginTop": "0"
  },
  ".menu-title": {
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem",
    "fontWeight": 700,
    "color": "rgba(var(--ice-base-content) / 0.4)"
  }
}