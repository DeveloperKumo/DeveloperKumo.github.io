module.exports = {
  ".swap": {
    "position": "relative",
    "display": "inline-grid",
    "userSelect": "none",
    "placeContent": "center"
  },
  ".swap>*": {
    "gridColumnStart": "1",
    "gridRowStart": "1"
  },
  ".swap input": {
    "appearance": "none"
  },
  ".swap .swap-on,.swap .swap-indeterminate,.swap input:indeterminate~.swap-on": {
    "opacity": 0
  },
  ".swap input:checked~.swap-off,.swap-active .swap-off,.swap input:indeterminate~.swap-off": {
    "opacity": 0
  },
  ".swap input:checked~.swap-on,.swap-active .swap-on,.swap input:indeterminate~.swap-indeterminate": {
    "opacity": 1
  }
}