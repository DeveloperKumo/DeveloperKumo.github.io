module.exports = {
  ".chat": {
    "display": "grid",
    "gridTemplateColumns": "repeat(2, minmax(0, 1fr))",
    "columnGap": "0.75rem",
    "paddingTop": "0.25rem",
    "paddingBottom": "0.25rem"
  },
  ".chat-image": {
    "gridRow": "span 2 / span 2",
    "alignSelf": "flex-end"
  },
  ".chat-header": {
    "gridRowStart": "1",
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem"
  },
  ".chat-footer": {
    "gridRowStart": "3",
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem"
  },
  ".chat-bubble": {
    "position": "relative",
    "display": "block",
    "width": "fit-content",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "maxWidth": "90%"
  },
  ".chat-bubble:before": {
    "position": "absolute",
    "bottom": "0px",
    "height": "0.75rem",
    "width": "0.75rem",
    "backgroundColor": "inherit",
    "content": "\"\"",
    "maskSize": "contain",
    "maskRepeat": "no-repeat",
    "maskPosition": "center"
  },
  ".chat-start": {
    "placeItems": "start",
    "gridTemplateColumns": "auto 1fr"
  },
  ".chat-start .chat-header": {
    "gridColumnStart": "2"
  },
  ".chat-start .chat-footer": {
    "gridColumnStart": "2"
  },
  ".chat-start .chat-image": {
    "gridColumnStart": "1"
  },
  ".chat-start .chat-bubble": {
    "gridColumnStart": "2"
  },
  ".chat-start .chat-bubble:before": {
    "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")"
  },
  "[dir=rtl] .chat-start .chat-bubble:before": {
    "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e\")"
  },
  ".chat-end": {
    "placeItems": "end",
    "gridTemplateColumns": "1fr auto"
  },
  ".chat-end .chat-header": {
    "gridColumnStart": "1"
  },
  ".chat-end .chat-footer": {
    "gridColumnStart": "1"
  },
  ".chat-end .chat-image": {
    "gridColumnStart": "2"
  },
  ".chat-end .chat-bubble": {
    "gridColumnStart": "1"
  },
  ".chat-end .chat-bubble:before": {
    "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e\")"
  },
  "[dir=rtl] .chat-end .chat-bubble:before": {
    "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")"
  }
}