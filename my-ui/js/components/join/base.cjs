module.exports = {
  ".join": {
    "display": "inline-flex",
    "alignItems": "stretch"
  },
  ".join :where(.join-item)": {
    "borderStartEndRadius": "0",
    "borderEndEndRadius": "0",
    "borderEndStartRadius": "0",
    "borderStartStartRadius": "0"
  },
  ".join .join-item:not(:first-child):not(:last-child),.join *:not(:first-child):not(:last-child) .join-item": {
    "borderStartEndRadius": "0",
    "borderEndEndRadius": "0",
    "borderEndStartRadius": "0",
    "borderStartStartRadius": "0"
  },
  ".join .join-item:first-child:not(:last-child),.join *:first-child:not(:last-child) .join-item": {
    "borderStartEndRadius": "0",
    "borderEndEndRadius": "0"
  },
  ".join .dropdown .join-item:first-child:not(:last-child),.join *:first-child:not(:last-child) .dropdown .join-item": {
    "borderStartEndRadius": "inherit",
    "borderEndEndRadius": "inherit"
  },
  ".join :where(.join-item:first-child:not(:last-child)),.join :where(*:first-child:not(:last-child) .join-item)": {
    "borderEndStartRadius": "inherit",
    "borderStartStartRadius": "inherit"
  },
  ".join .join-item:last-child:not(:first-child),.join *:last-child:not(:first-child) .join-item": {
    "borderEndStartRadius": "0",
    "borderStartStartRadius": "0"
  },
  ".join :where(.join-item:last-child:not(:first-child)),.join :where(*:last-child:not(:first-child) .join-item)": {
    "borderStartEndRadius": "inherit",
    "borderEndEndRadius": "inherit"
  },
  "@supports not selector(:has(*))": {
    ":where(.join *)": {
      "borderRadius": "inherit"
    }
  },
  "@supports selector(:has(*))": {
    ":where(.join *:has(.join-item))": {
      "borderRadius": "inherit"
    }
  }
}