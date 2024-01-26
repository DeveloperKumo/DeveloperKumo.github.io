module.exports = {
  ".join.join-vertical": {
    "flexDirection": "column"
  },
  ".join.join-vertical .join-item:first-child:not(:last-child),.join.join-vertical *:first-child:not(:last-child) .join-item": {
    "borderEndStartRadius": "0",
    "borderEndEndRadius": "0",
    "borderStartStartRadius": "inherit",
    "borderStartEndRadius": "inherit"
  },
  ".join.join-vertical .join-item:last-child:not(:first-child),.join.join-vertical *:last-child:not(:first-child) .join-item": {
    "borderStartStartRadius": "0",
    "borderStartEndRadius": "0",
    "borderEndStartRadius": "inherit",
    "borderEndEndRadius": "inherit"
  },
  ".join.join-horizontal": {
    "flexDirection": "row"
  },
  ".join.join-horizontal .join-item:first-child:not(:last-child),.join.join-horizontal *:first-child:not(:last-child) .join-item": {
    "borderEndEndRadius": "0",
    "borderStartEndRadius": "0",
    "borderEndStartRadius": "inherit",
    "borderStartStartRadius": "inherit"
  },
  ".join.join-horizontal .join-item:last-child:not(:first-child),.join.join-horizontal *:last-child:not(:first-child) .join-item": {
    "borderEndStartRadius": "0",
    "borderStartStartRadius": "0",
    "borderEndEndRadius": "inherit",
    "borderStartEndRadius": "inherit"
  },
  ".join.join-vertical>:where(*:not(:first-child))": {
    "marginLeft": "0px",
    "marginRight": "0px",
    "marginTop": "-1px"
  },
  ".join.join-horizontal>:where(*:not(:first-child))": {
    "marginTop": "0px",
    "marginBottom": "0px",
    "marginInlineStart": "-1px"
  }
}