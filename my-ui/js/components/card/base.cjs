module.exports = {
  ".card": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "column"
  },
  ".card:focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  ".card-body": {
    "display": "flex",
    "flex": "1 1 auto",
    "flexDirection": "column"
  },
  ".card-body :where(p)": {
    "flexGrow": 1
  },
  ".card-actions": {
    "display": "flex",
    "flexWrap": "wrap",
    "alignItems": "flex-start",
    "gap": "0.5rem"
  },
  ".card figure": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".card.image-full": {
    "display": "grid"
  },
  ".card.image-full:before": {
    "position": "relative",
    "content": "\"\""
  },
  ".card.image-full:before,.card.image-full>*": {
    "gridColumnStart": "1",
    "gridRowStart": "1"
  },
  ".card.image-full>figure img": {
    "height": "100%",
    "objectFit": "cover"
  },
  ".card.image-full>.card-body": {
    "position": "relative"
  }
}