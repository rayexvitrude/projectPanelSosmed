module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#30AADD',
        'secondary' : '#DD6330',
        'dark' : '#101619',
      },
      fontSize: {
        dsplyLg: ['3.563rem', 'auto'],
        'ttlMd': ['1rem',{
            letterSpacing: '0.15%',
            lineHeight: '1.5rem',
        }] ,
      },
    },
  },
  plugins: [],
}
