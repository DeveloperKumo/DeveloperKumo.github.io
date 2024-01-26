module.exports = {
  ".menu-horizontal": {
    "display": "inline-flex",
    "flexDirection": "row"
  },
  ".menu-horizontal>li:not(.menu-title)>details>ul": {
    "position": "absolute",
    "marginInlineStart": "0px",
    "marginTop": "1rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "paddingInlineEnd": "0.5rem"
  },
  ".menu-horizontal>li>details>ul:before": {
    "content": "none"
  },
  ".menu-vertical": {
    "display": "flex",
    "flexDirection": "column"
  },
  ".menu-vertical>li:not(.menu-title)>details>ul": {
    "position": "relative",
    "marginInlineStart": "1rem",
    "marginTop": "0px",
    "paddingTop": "0px",
    "paddingBottom": "0px",
    "paddingInlineEnd": "0px"
  },
  ":where(.menu-horizontal>li:not(.menu-title)>details>ul)": {
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))",
    "--tw-shadow": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "--tw-shadow-colored": "0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
  },
  ".menu-xs :where(li:not(.menu-title)>*:not(ul):not(details):not(.menu-title)),.menu-xs :where(li:not(.menu-title)>details>summary:not(.menu-title))": {
    "borderRadius": "0.25rem",
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "paddingTop": "0.25rem",
    "paddingBottom": "0.25rem",
    "fontSize": "0.75rem",
    "lineHeight": "1rem"
  },
  ".menu-xs .menu-title": {
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "paddingTop": "0.25rem",
    "paddingBottom": "0.25rem"
  },
  ".menu-sm :where(li:not(.menu-title)>*:not(ul):not(details):not(.menu-title)),.menu-sm :where(li:not(.menu-title)>details>summary:not(.menu-title))": {
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)",
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "0.25rem",
    "paddingBottom": "0.25rem",
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem"
  },
  ".menu-sm .menu-title": {
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem"
  },
  ".menu-md :where(li:not(.menu-title)>*:not(ul):not(details):not(.menu-title)),.menu-md :where(li:not(.menu-title)>details>summary:not(.menu-title))": {
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem"
  },
  ".menu-md .menu-title": {
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem"
  },
  ".menu-lg :where(li:not(.menu-title)>*:not(ul):not(details):not(.menu-title)),.menu-lg :where(li:not(.menu-title)>details>summary:not(.menu-title))": {
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)",
    "paddingLeft": "1.5rem",
    "paddingRight": "1.5rem",
    "paddingTop": "0.75rem",
    "paddingBottom": "0.75rem",
    "fontSize": "1.125rem",
    "lineHeight": "1.75rem"
  },
  ".menu-lg .menu-title": {
    "paddingLeft": "1.5rem",
    "paddingRight": "1.5rem",
    "paddingTop": "0.75rem",
    "paddingBottom": "0.75rem"
  }
}