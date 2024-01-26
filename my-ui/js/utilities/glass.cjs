module.exports = {
  ".glass": {
    "border": "none",
    "backdropFilter": "blur(var(--ice-glass-blur, 40px))",
    "backgroundColor": "transparent",
    "backgroundImage": "linear-gradient(135deg, rgb(255 255 255 / var(--ice-glass-opacity, 30%)) 0%, rgb(0 0 0 / 0%) 100%), linear-gradient( var(--ice-glass-reflex-degree, 100deg), rgb(255 255 255 / var(--ice-glass-reflex-opacity, 10%)) 25%, rgb(0 0 0 / 0%) 25% )",
    "boxShadow": "0 0 0 1px rgb(255 255 255 / var(--ice-glass-border-opacity, 10%)) inset, 0 0 0 2px rgb(0 0 0 / 5%)",
    "textShadow": "0 1px rgb(0 0 0 / var(--ice-glass-text-shadow-opacity, 5%))"
  }
}