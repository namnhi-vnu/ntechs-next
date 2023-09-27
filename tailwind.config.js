/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                ntechs: "#084183",
                hover: "#EB681B",
            },
            minWidth: {
                menu: "200px",
            },
            lineHeight: {
                13: "3.5rem",
                12: "1.4em",
            },
            fontSize: {
                "5ml": "2.802rem",
            },
        },
    },
    plugins: [],
};
