// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': { 'max': '414px' }
    },
    extend: {
      colors: {
        'green-light': '#08b848',
        'yellow-light': '#fbff00',
        'red-50': '#e20000',
        'red-light': '#b80808',
        'amber-200': '#FDE68A',
        'lime-700': '#007a1d',
        'lime-500': '#84CC16',
        'lime-100': '#ECFCCB',
        'lime-50': '#F7FEE7',
        'emerald-600': '#059669',
        'white-100': '#ffffff52'
      },
      backgroundImage: theme => ({
        'background-info': "url('~assets/img/join.svg')",
      }),
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '12': '20px',
        '20': '5rem',
        '48': '12rem',
        '64': '19rem',
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 1rem',
      }
    }
  }
}