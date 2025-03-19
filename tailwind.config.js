/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: 'var(--color-dark)',
            lineHeight: '1.5',
            pre: {
              whiteSpace: "pre-wrap",
              marginTop: "0.5rem",
              marginBottom: "1.25rem",
              fontSize: "15px",
            },
            code: {
              color: 'var(--color-bluesky-600)',
            }
          }
        },
        dark: {
          css: {
            color: 'var(--color-light)',
            code: {
              color: 'var(--color-bluesky-600)',
            }
          }
        }
      }
    }
  }
}