/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        primary: '#FF007F',
        secondary: '#00E5FF',
        accent: '#FFD600',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|secondary|accent)/,
      variants: ['hover', 'focus', 'active', 'disabled'],
    },
    {
      pattern: /(bg|text|border)-(\[#FF007F\]|\[#00E5FF\]|\[#FFD600\])/,
      variants: ['hover', 'focus', 'active', 'disabled'],
    },
    {
      pattern: /(from|via|to)-(\[#FF007F\]|\[#00E5FF\]|\[#FFD600\])/,
      variants: ['hover', 'focus', 'active', 'disabled'],
    },
  ],
}
