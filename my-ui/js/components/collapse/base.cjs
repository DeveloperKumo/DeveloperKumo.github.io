module.exports = {
  ".collapse:not(td):not(tr):not(colgroup)": {
    "visibility": "visible"
  },
  ".collapse": {
    "position": "relative",
    "display": "grid",
    "overflow": "hidden",
    "gridTemplateRows": "auto 0fr",
    "transition": "grid-template-rows 0.2s"
  },
  ".collapse-title,.collapse>input[type=checkbox],.collapse>input[type=radio],.collapse-content": {
    "gridColumnStart": "1",
    "gridRowStart": "1"
  },
  ".collapse>input[type=checkbox],.collapse>input[type=radio]": {
    "appearance": "none",
    "opacity": 0
  },
  ".collapse-content": {
    "visibility": "hidden",
    "gridColumnStart": "1",
    "gridRowStart": "2",
    "minHeight": "0px",
    "transition": "visibility 0.2s"
  },
  ".collapse[open],.collapse-open,.collapse:focus:not(.collapse-close)": {
    "gridTemplateRows": "auto 1fr"
  },
  ".collapse:not(.collapse-close):has(>input[type=checkbox]:checked),.collapse:not(.collapse-close):has(>input[type=radio]:checked)": {
    "gridTemplateRows": "auto 1fr"
  },
  ".collapse[open]>.collapse-content,.collapse-open>.collapse-content,.collapse:focus:not(.collapse-close)>.collapse-content,.collapse:not(.collapse-close)>input[type=checkbox]:checked~.collapse-content,.collapse:not(.collapse-close)>input[type=radio]:checked~.collapse-content": {
    "visibility": "visible",
    "minHeight": "fit-content"
  }
}