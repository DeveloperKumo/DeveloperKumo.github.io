module.exports = {
  ".card-side": {
    "alignItems": "stretch",
    "flexDirection": "row"
  },
  ".card-side :where(figure:first-child)": {
    "overflow": "hidden",
    "borderStartStartRadius": "inherit",
    "borderStartEndRadius": "unset",
    "borderEndStartRadius": "inherit",
    "borderEndEndRadius": "unset"
  },
  ".card-side :where(figure:last-child)": {
    "overflow": "hidden",
    "borderStartStartRadius": "unset",
    "borderStartEndRadius": "inherit",
    "borderEndStartRadius": "unset",
    "borderEndEndRadius": "inherit"
  },
  ".card-side figure>*": {
    "maxWidth": "unset"
  },
  ":where(.card-side figure>*)": {
    "width": "100%",
    "height": "100%",
    "objectFit": "cover"
  },
  ".card-compact .card-body": {
    "padding": "1rem",
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem"
  },
  ".card-compact .card-title": {
    "marginBottom": "0.25rem"
  },
  ".card-normal .card-body": {
    "padding": "var(--ice-padding-card, 2rem)",
    "fontSize": "1rem",
    "lineHeight": "1.5rem"
  },
  ".card-normal .card-title": {
    "marginBottom": "0.75rem"
  }
}