const colors = require('tailwindcss/colors')
module.exports = {
    // purge: {
    //   enabled: true,
    //   content:['./*.html']
    // },
    purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                fuchsia: colors.fuchsia,
                cyan: colors.cyan,
                emerald: colors.emerald,
                teal: colors.teal,
                'cyprus': {
                    '50': '#f3f5f6', 
                    '100': '#e6ecec', 
                    '200': '#c1cfd0', 
                    '300': '#9cb2b4', 
                    '400': '#51787c', 
                    '500': '#073e44', 
                    '600': '#06383d', 
                    '700': '#052f33', 
                    '800': '#042529', 
                    '900': '#031e21'
                }
            },
            container: {
                center: true,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}