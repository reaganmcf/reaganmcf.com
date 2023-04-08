/** @type {import('tailwindcss').Config} */

// Modify your tailwind.config.js
const disabledCss = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
  'code::before': false,
  'code::after': false,
}

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        typography: {
          DEFAULT: { css: disabledCss },
          sm: { css: disabledCss },
          lg: { css: disabledCss },
          xl: { css: disabledCss },
          '2xl': { css: disabledCss },
        },
      },
    },
    plugins: [require('@tailwindcss/typography')]
  }

