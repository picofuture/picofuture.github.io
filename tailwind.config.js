const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./**/*.html", "./**/*.md"],
    darkMode: "class",
    theme: {
        extend: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            colors: {
                teal: colors.teal,
                cyan: colors.cyan,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
