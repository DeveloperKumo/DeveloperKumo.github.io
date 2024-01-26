module.exports = {
  ".tabs": {
    "display": "grid",
    "alignItems": "flex-end"
  },
  ".tabs-lifted:has(.tab-content[class^=rounded-]) .tab:first-child:not(.tab-active),.tabs-lifted:has(.tab-content[class*=\" rounded-\"]) .tab:first-child:not(.tab-active)": {
    "borderBottomColor": "transparent"
  },
  ".tab": {
    "position": "relative",
    "gridRowStart": "1",
    "display": "inline-flex",
    "height": "2rem",
    "cursor": "pointer",
    "userSelect": "none",
    "appearance": "none",
    "flexWrap": "wrap",
    "alignItems": "center",
    "justifyContent": "center",
    "textAlign": "center",
    "fontSize": "0.875rem",
    "lineHeight": [
      "1.25rem",
      2
    ],
    "--ice-tab-padding": "1rem"
  },
  ".tab:is(input[type=radio])": {
    "width": "auto",
    "borderBottomRightRadius": "0px",
    "borderBottomLeftRadius": "0px"
  },
  ".tab:is(input[type=radio]):after": {
    "--tw-content": "attr(aria-label)",
    "content": "var(--tw-content)"
  },
  ".tab:not(input):empty": {
    "cursor": "default",
    "gridColumnStart": "span 9999"
  },
  ".tab-content": {
    "gridColumnStart": "1",
    "gridColumnEnd": "span 9999",
    "gridRowStart": "2",
    "marginTop": "calc(var(--tab-border) * -1)",
    "display": "none",
    "borderColor": "transparent",
    "borderWidth": "var(--ice-tab-border, 0)"
  },
  ":checked+.tab-content:nth-child(2),.tab-active+.tab-content:nth-child(2)": {
    "borderStartStartRadius": "0px"
  },
  "input.tab:checked+.tab-content,.tab-active+.tab-content": {
    "display": "block"
  }
}