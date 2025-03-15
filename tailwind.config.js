/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#2563eb', // A more standard blue
              light: '#60a5fa',
              hover: '#1e40af'
            },
            success: '#059669',
            gray: {
              50: '#f9fafb',
              100: '#f3f4f6',
              200: '#e5e7eb',
              300: '#d1d5db',
              400: '#9ca3af',
              500: '#6b7280',
              600: '#4b5563',
              700: '#374151',
              800: '#1f2937',
              900: '#111827'
            },
            dark: {
              bg: '#111827',
              card: '#1f2937',
              hover: '#374151'
            }
          },
          animation: {
            'fade-in': 'fadeIn 0.5s ease-out',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(10px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            }
          },
          fontFamily: {
            sans: ['"Inter"', '"Noto Sans"', 'sans-serif'] // Changed to Inter font
          },
          opacity: {
            '15': '0.15'
          }
        },
      },
      plugins: [
        require('@tailwindcss/forms')({
          strategy: 'class'
        })
      ]
    }
