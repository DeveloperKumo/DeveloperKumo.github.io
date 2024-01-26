module.exports = {
  ".dropdown": {
    "position": "relative",
    "display": "inline-block"
  },
  ".dropdown>*:not(summary):focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  ".dropdown .dropdown-content": {
    "position": "absolute"
  },
  ".dropdown:is(:not(details)) .dropdown-content": {
    "visibility": "hidden",
    "opacity": 0
  },
  ".dropdown-end .dropdown-content": {
    "insetInlineEnd": "0px"
  },
  ".dropdown-left .dropdown-content": {
    "bottom": "auto",
    "insetInlineEnd": "100%",
    "top": "0px"
  },
  ".dropdown-right .dropdown-content": {
    "bottom": "auto",
    "insetInlineStart": "100%",
    "top": "0px"
  },
  ".dropdown-bottom .dropdown-content": {
    "bottom": "auto",
    "top": "100%"
  },
  ".dropdown-top .dropdown-content": {
    "bottom": "100%",
    "top": "auto"
  },
  ".dropdown-end.dropdown-right .dropdown-content": {
    "bottom": "0px",
    "top": "auto"
  },
  ".dropdown-end.dropdown-left .dropdown-content": {
    "bottom": "0px",
    "top": "auto"
  },
  ".dropdown.dropdown-open .dropdown-content,.dropdown:not(.dropdown-hover):focus .dropdown-content,.dropdown:focus-within .dropdown-content": {
    "visibility": "visible",
    "opacity": 1
  },
  ".dropdown.dropdown-hover:hover .dropdown-content": {
    "visibility": "visible",
    "opacity": 1
  },
  ".dropdown:is(details) summary::-webkit-details-marker": {
    "display": "none"
  }
}