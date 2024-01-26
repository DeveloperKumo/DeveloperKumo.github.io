module.exports = {
  ".rating input": {
    "appearance": "none",
    "WebkitAppearance": "none"
  },
  ".rating :where(input)": {
    "animation": "rating-pop var(--ice-animation-input, 0.25s) ease-out",
    "height": "1.5rem",
    "width": "1.5rem",
    "backgroundColor": "rgba(var(--ice-base-content) / var(--tw-bg-opacity))",
    "--tw-bg-opacity": "1"
  },
  ".rating .rating-hidden": {
    "width": "0.5rem",
    "backgroundColor": "transparent"
  },
  ".rating input[type=radio]:checked": {
    "backgroundImage": "none"
  },
  ".rating input:checked~input,.rating input[aria-checked=true]~input": {
    "--tw-bg-opacity": "0.2"
  },
  ".rating input:focus-visible": {
    "transitionProperty": "transform",
    "transitionTimingFunction": [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0, 0, 0.2, 1)"
    ],
    "transitionDuration": "300ms",
    "transform": "translateY(-0.125em)"
  },
  ".rating input:active:focus": {
    "animation": "none",
    "transform": "translateY(-0.125em)"
  },
  ".rating-half :where(input:not(.rating-hidden))": {
    "width": "0.75rem"
  },
  "@keyframes rating-pop": {
    "0%": {
      "transform": "translateY(-0.125em)"
    },
    "40%": {
      "transform": "translateY(-0.125em)"
    },
    "100%": {
      "transform": "translateY(0)"
    }
  }
}