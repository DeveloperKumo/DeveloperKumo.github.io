module.exports = {
  ".menu": {
    "display": "flex",
    "flexDirection": "column",
    "flexWrap": "wrap",
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem"
  },
  ".menu :where(li ul)": {
    "position": "relative",
    "whiteSpace": "nowrap"
  },
  ".menu :where(li:not(.menu-title)>*:not(ul):not(details):not(.menu-title)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title))": {
    "display": "grid",
    "gridAutoFlow": "column",
    "alignContent": "flex-start",
    "alignItems": "center",
    "gap": "0.5rem",
    "gridAutoColumns": "minmax(auto, max-content) auto max-content",
    "userSelect": "none"
  },
  ".menu li.disabled": {
    "cursor": "not-allowed",
    "userSelect": "none"
  },
  ".menu :where(li>.menu-dropdown:not(.menu-dropdown-show))": {
    "display": "none"
  },
  ":where(.menu li)": {
    "position": "relative",
    "display": "flex",
    "flexShrink": 0,
    "flexDirection": "column",
    "flexWrap": "wrap",
    "alignItems": "stretch"
  },
  ":where(.menu li) .badge": {
    "justifySelf": "end"
  }
}