module.exports = {
  ".join": {
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)"
  },
  ".join>:where(*:not(:first-child))": {
    "marginTop": "0px",
    "marginBottom": "0px",
    "marginInlineStart": "-1px"
  },
  ".join-item:focus": {
    "isolation": "isolate"
  }
}