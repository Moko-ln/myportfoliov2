/** @type {import('tailwindcss').Config} */
import type { PluginAPI } from 'tailwindcss/types/config'

module.exports = {
  darkMode: "class",
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        ".noscrollbar":{
          "-ms-overflow-style": "none",
          "-scrollbar-width": "none"
        }
      }

      addUtilities(newUtilities)
    }
  ],
}