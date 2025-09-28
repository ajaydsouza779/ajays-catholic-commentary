import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Catholic-themed color palette
        primary: {
          gold: '#D4AF37',
          navy: '#1B365D',
          cream: '#F5F5DC',
        },
        secondary: {
          burgundy: '#800020',
          sage: '#9CAF88',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#80868B',
          700: '#5F6368',
          800: '#3C4043',
          900: '#202124',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              fontFamily: 'Playfair Display, serif',
              color: '#1B365D',
            },
            h2: {
              fontFamily: 'Playfair Display, serif',
              color: '#1B365D',
            },
            h3: {
              fontFamily: 'Playfair Display, serif',
              color: '#1B365D',
            },
            blockquote: {
              borderLeftColor: '#D4AF37',
              color: '#6B7280',
            },
            a: {
              color: '#1B365D',
              textDecoration: 'underline',
              '&:hover': {
                color: '#D4AF37',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
