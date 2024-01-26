module.exports = {
  ".diff": {
    "position": "relative",
    "display": "grid",
    "width": "100%",
    "overflow": "hidden",
    "containerType": "inline-size",
    "gridTemplateColumns": "auto 1fr"
  },
  ".diff-resizer": {
    "position": "relative",
    "top": "50%",
    "zIndex": 1,
    "height": "3rem",
    "width": "25rem",
    "minWidth": "1rem",
    "maxWidth": "calc(100cqi - 1rem)",
    "resize": "horizontal",
    "overflow": "hidden",
    "opacity": 0,
    "transformOrigin": "100% 100%",
    "scale": "4",
    "translate": "1.5rem -1.5rem",
    "clipPath": "inset(calc(100% - 0.75rem) 0 0 calc(100% - 0.75rem))"
  },
  ".diff-resizer,.diff-item-1,.diff-item-2": {
    "position": "relative",
    "gridColumnStart": "1",
    "gridRowStart": "1"
  },
  ".diff-item-1:after": {
    "pointerEvents": "none",
    "position": "absolute",
    "bottom": "0px",
    "right": "1px",
    "top": "50%",
    "zIndex": 1,
    "height": "2rem",
    "width": "2rem",
    "--tw-content": "''",
    "content": "var(--tw-content)",
    "translate": "50% -50%"
  },
  ".diff-item-2": {
    "overflow": "hidden"
  },
  ".diff-item-1>*,.diff-item-2>*": {
    "pointerEvents": "none",
    "position": "absolute",
    "bottom": "0px",
    "left": "0px",
    "top": "0px",
    "height": "100%",
    "width": "100cqi",
    "maxWidth": "none",
    "objectFit": "cover",
    "objectPosition": "center"
  }
}