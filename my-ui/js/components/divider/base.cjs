module.exports = {
  ".divider": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "alignSelf": "stretch"
  },
  ".divider:before,.divider:after": {
    "height": "0.125rem",
    "width": "100%",
    "flexGrow": 1,
    "--tw-content": "''",
    "content": "var(--tw-content)"
  },
  ".divider-start:before": {
    "display": "none"
  },
  ".divider-end:after": {
    "display": "none"
  }
}