module.exports = {
  ".card": {
    "borderRadius": "var(--ice-rounded-box, 1rem)"
  },
  ".card :where(figure:first-child)": {
    "overflow": "hidden",
    "borderStartStartRadius": "inherit",
    "borderStartEndRadius": "inherit",
    "borderEndStartRadius": "unset",
    "borderEndEndRadius": "unset"
  },
  ".card :where(figure:last-child)": {
    "overflow": "hidden",
    "borderStartStartRadius": "unset",
    "borderStartEndRadius": "unset",
    "borderEndStartRadius": "inherit",
    "borderEndEndRadius": "inherit"
  },
  ".card:focus-visible": {
    "outline": "2px solid currentColor",
    "outlineOffset": "2px"
  },
  ".card.bordered": {
    "borderWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-base-200) / var(--tw-border-opacity))"
  },
  ".card-bordered": {
    "borderWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-base-200) / var(--tw-border-opacity))"
  },
  ".card.compact .card-body": {
    "padding": "1rem",
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem"
  },
  ".card-body": {
    "padding": "var(--ice-padding-card, 2rem)",
    "display": "flex",
    "flexDirection": "column",
    "gap": "0.5rem"
  },
  ".card-title": {
    "display": "flex",
    "alignItems": "center",
    "gap": "0.5rem",
    "fontSize": "1.25rem",
    "lineHeight": "1.75rem",
    "fontWeight": 600
  },
  ".card.image-full:before": {
    "zIndex": 10,
    "borderRadius": "var(--ice-rounded-box, 1rem)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-neutral) / var(--tw-bg-opacity))",
    "opacity": 0.75
  },
  ".card.image-full :where(figure)": {
    "overflow": "hidden",
    "borderRadius": "inherit"
  },
  ".card.image-full>.card-body": {
    "zIndex": 20,
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-neutral-content) / var(--tw-text-opacity))"
  }
}