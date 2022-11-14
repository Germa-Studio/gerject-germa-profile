/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                fikriTheme: {
                    // eslint-disable-next-line @typescript-eslint/no-var-requires
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=corporate]"
                    ],
                    "base-100": "#FBFEFE",
                    secondary: "#11469B",
                    accent: "#22EF9D",
                },
            },
            "night",
        ],
    },
};
