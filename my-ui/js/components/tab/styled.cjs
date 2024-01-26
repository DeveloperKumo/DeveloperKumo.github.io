module.exports = {
  ".tabs-lifted>.tab:focus-visible": {
    "borderEndEndRadius": "0",
    "borderEndStartRadius": "0"
  },
  ".tab": {
    "--tw-text-opacity": "0.5",
    "--ice-tab-color": "rgba(var(--ice-base-content) / 1)",
    "--ice-tab-bg": "rgba(var(--ice-base-100) / 1)",
    "--ice-tab-border-color": "rgba(var(--ice-base-300) / 1)",
    "color": "var(--ice-tab-color)",
    "paddingInlineStart": "var(--ice-tab-padding, 1rem)",
    "paddingInlineEnd": "var(--ice-tab-padding, 1rem)"
  },
  ".tab:hover": {
    "--tw-text-opacity": "1"
  },
  ".tab.tab-active:not(.tab-disabled):not([disabled]),.tab:is(input:checked)": {
    "borderColor": "rgba(var(--ice-base-content) / var(--tw-border-opacity))",
    "--tw-border-opacity": "1",
    "--tw-text-opacity": "1"
  },
  ".tab:focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  ".tab:focus-visible": {
    "outline": "2px solid currentColor",
    "outlineOffset": "-5px"
  },
  ".tab-disabled,.tab[disabled]": {
    "cursor": "not-allowed",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))",
    "--tw-text-opacity": "0.2"
  },
  ".tab[disabled],.tab[disabled]:hover": {
    "cursor": "not-allowed",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))",
    "--tw-text-opacity": "0.2"
  },
  ".tabs-bordered>.tab": {
    "borderColor": "rgba(var(--ice-base-content) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0.2",
    "borderStyle": "solid",
    "borderBottomWidth": "calc(var(--ice-tab-border, 1px) + 1px)"
  },
  ".tabs-lifted>.tab": {
    "border": "var(--ice-tab-border, 1px) solid transparent",
    "borderWidth": "0 0 var(--ice-tab-border, 1px) 0",
    "borderStartStartRadius": "var(--ice-tab-radius, 0.5rem)",
    "borderStartEndRadius": "var(--ice-tab-radius, 0.5rem)",
    "borderBottomColor": "var(--ice-tab-border-color)",
    "paddingInlineStart": "var(--ice-tab-padding, 1rem)",
    "paddingInlineEnd": "var(--ice-tab-padding, 1rem)",
    "paddingTop": "var(--ice-tab-border, 1px)"
  },
  ".tabs-lifted>.tab.tab-active:not(.tab-disabled):not([disabled]),.tabs-lifted>.tab:is(input:checked)": {
    "backgroundColor": "var(--ice-tab-bg)",
    "borderWidth": "var(--ice-tab-border, 1px) var(--ice-tab-border, 1px) 0 var(--ice-tab-border, 1px)",
    "borderInlineStartColor": "var(--ice-tab-border-color)",
    "borderInlineEndColor": "var(--ice-tab-border-color)",
    "borderTopColor": "var(--ice-tab-border-color)",
    "paddingInlineStart": "calc(var(--ice-tab-padding, 1rem) - var(--ice-tab-border, 1px))",
    "paddingInlineEnd": "calc(var(--ice-tab-padding, 1rem) - var(--ice-tab-border, 1px))",
    "paddingBottom": "var(--ice-tab-border, 1px)",
    "paddingTop": "0"
  },
  ".tabs-lifted>.tab.tab-active:not(.tab-disabled):not([disabled]):before,.tabs-lifted>.tab:is(input:checked):before": {
    "zIndex": 1,
    "content": "\"\"",
    "display": "block",
    "position": "absolute",
    "width": "calc(100% + var(--ice-tab-radius, 0.5rem) * 2)",
    "height": "var(--ice-tab-radius, 0.5rem)",
    "bottom": "0",
    "backgroundSize": "var(--ice-tab-radius, 0.5rem)",
    "backgroundPosition": "top left, top right",
    "backgroundRepeat": "no-repeat",
    "--ice-tab-grad": "calc(69% - var(--ice-tab-border, 1px))",
    "--ice-radius-start": "radial-gradient( circle at top left, transparent var(--ice-tab-grad), var(--ice-tab-border-color) calc(var(--ice-tab-grad) + 0.25px), var(--ice-tab-border-color) calc(var(--ice-tab-grad) + var(--ice-tab-border, 1px)), var(--ice-tab-bg) calc(var(--ice-tab-grad) + var(--ice-tab-border, 1px) + 0.25px) )",
    "--ice-radius-end": "radial-gradient( circle at top right, transparent var(--ice-tab-grad), var(--ice-tab-border-color) calc(var(--ice-tab-grad) + 0.25px), var(--ice-tab-border-color) calc(var(--ice-tab-grad) + var(--ice-tab-border, 1px)), var(--ice-tab-bg) calc(var(--ice-tab-grad) + var(--ice-tab-border, 1px) + 0.25px) )",
    "backgroundImage": "var(--ice-radius-start), var(--ice-radius-end)"
  },
  ".tabs-lifted>.tab.tab-active:not(.tab-disabled):not([disabled]):first-child:before,.tabs-lifted>.tab:is(input:checked):first-child:before": {
    "backgroundImage": "var(--ice-radius-end)",
    "backgroundPosition": "top right"
  },
  "[dir=rtl] .tabs-lifted>.tab.tab-active:not(.tab-disabled):not([disabled]):first-child:before,[dir=rtl] .tabs-lifted>.tab:is(input:checked):first-child:before": {
    "backgroundImage": "var(--ice-radius-start)",
    "backgroundPosition": "top left"
  },
  ".tabs-lifted>.tab.tab-active:not(.tab-disabled):not([disabled]):last-child:before,.tabs-lifted>.tab:is(input:checked):last-child:before": {
    "backgroundImage": "var(--ice-radius-start)",
    "backgroundPosition": "top left"
  },
  "[dir=rtl] .tabs-lifted>.tab.tab-active:not(.tab-disabled):not([disabled]):last-child:before,[dir=rtl] .tabs-lifted>.tab:is(input:checked):last-child:before": {
    "backgroundImage": "var(--ice-radius-end)",
    "backgroundPosition": "top right"
  },
  ".tabs-lifted>.tab-active:not(.tab-disabled):not([disabled])+.tabs-lifted .tab-active:not(.tab-disabled):not([disabled]):before,.tabs-lifted>.tab:is(input:checked)+.tabs-lifted .tab:is(input:checked):before": {
    "backgroundImage": "var(--ice-radius-end)",
    "backgroundPosition": "top right"
  },
  ".tabs-boxed": {
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-200) / var(--tw-bg-opacity))",
    "padding": "0.25rem"
  },
  ".tabs-boxed .tab": {
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)"
  },
  ".tabs-boxed .tab-active:not(.tab-disabled):not([disabled]),.tabs-boxed :is(input:checked)": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-primary) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-primary-content) / var(--tw-text-opacity))"
  },
  ".tabs-boxed .tab-active:not(.tab-disabled):not([disabled]):hover,.tabs-boxed :is(input:checked):hover": {
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-primary-content) / var(--tw-text-opacity))"
  }
}