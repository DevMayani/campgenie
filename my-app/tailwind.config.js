module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Include your source files.
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        lite: '#43AD69', // Custom color added under extend
        greenlite:'#1A3729',
      },
      flex: {
        '1': '1 1 0%',
        auto: '1 1 auto',
        initial: '0 1 auto',
        inherit: 'inherit',
        none: 'none',
        '2': '2 1 0%',
        '3': '3 1', // Adjusted flex value for flex-3
      },
      fontFamily: {
        exo: ['"Exo"', 'sans-serif'], // Correctly specified 'Exo'
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'], // Correctly specified 'Nunito Sans'
      },
    },
  },
  plugins: [],
};
