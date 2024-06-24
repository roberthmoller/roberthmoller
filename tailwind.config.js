/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        borderWidth: {
            DEFAULT: '1px',
        },
        extend: {
            colors: {
                'background-start': '#1d1d1d',
                'background-end': '#000000',
                'card': '#1c1c1c',
                'border': '#242424',
                'sub': '#c9c9c9',
                'sub-more': '#b0b0b0',

            },

        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

