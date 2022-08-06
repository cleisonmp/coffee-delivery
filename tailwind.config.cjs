/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif',        
      },
      fontSize: {
        xxs: ['0.625rem'],        
      },
      colors: {
        purple: {
          100: '#EBE5F9',
          500: '#8047F8',
          900: '#4B2995',
        },
        yellow: {
          100: '#F1E9C9',
          500: '#DBAC2C',
          900: '#C47F17',
        },
        base: {
          title: '#272221',
          subtitle: '#403937',
          text: '#574F4D',
          label: '#8D8686',
          hover: '#D7D5D5',
          button: '#E6E5E5',
          input: '#EDEDED',
          card: '#F3F2F2',
          background: '#FAFAFA',
        }        
      },
      boxShadow: {
        'outline': '0 0 0 1px',
      },      
    },
  },
  plugins: [],
}
