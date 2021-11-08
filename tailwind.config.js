module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                "primary-light": "#cdced5",
                primary: "#393C5A",
                "primary-dark": "#1c1d2c",
                "secondary-light": "#e3e3e8",
                secondary: "#9092A3",
                "secondary-dark": "#484851",
                "tertiary-light": "#f1ebe5",
                tertiary: "#C7B299",
                "tertiary-dark": "#958572",
                background: "#FFFEFC",
            },
            animation: {
                "pulse-slow": "pulse 3s linear",
                "spin-slow": "spin 3s cubic-bezier(0.3,0,1,1)",
            },
        },
    },

    variants: {
        extend: {},
    },

    plugins: [],
};
