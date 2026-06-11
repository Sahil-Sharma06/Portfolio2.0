/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#0E0E0C',
        bg2:     '#141412',
        fg:      '#E8E4DC',
        muted:   '#5C5A54',
        accent:  '#C8B89A',
        border:  '#232320',
        'hover-bg': '#181816',
      },
      fontFamily: {
        syne:  ['Syne', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        up: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        drawline: {
          to: { width: '100%' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'up-1': 'up 0.6s 0.1s forwards',
        'up-2': 'up 0.6s 0.25s forwards',
        'up-3': 'up 0.6s 0.35s forwards',
        'up-4': 'up 0.6s 0.45s forwards',
        'up-5': 'up 0.6s 0.6s forwards',
        'up-6': 'up 0.6s 0.75s forwards',
        drawline:         'drawline 1.4s cubic-bezier(0.16,1,0.3,1) 1s forwards',
        marquee:          'marquee 18s linear infinite',
        'marquee-slow':   'marquee 30s linear infinite',
        'marquee-medium': 'marquee 25s linear infinite',
        'marquee-fast':   'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
}

