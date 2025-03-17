/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        artichokegreen: {
         50: '#4B6F44',
        },
        aspargus: {
          50: '#87A96B',
        },
        avocado: {
          50: '#568203',
        },
        celadon: {
          50: '#ACE1AF',
        },
        darkseagreen: {
          50: '#8FBC8B',
        },
        crocodile: { 
          20: '#dedad4',
          30: '#c9c4ba',
          40: '#a19786',
          50: '#796b52',
          60: '#6d604a',
        }
      },
      
      boxShadow: {
        '3xl' : '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },

      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
        'hero': "url('/images/background/IMG_8779.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};