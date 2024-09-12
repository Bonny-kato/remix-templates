import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

export default {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#352E76",
                    "50": "#F4F0F7",
                    "100": "#EBE4F2",
                    "200": "#CBBDDE",
                    "300": "#A997C7",
                    "400": "#6A5A9E",
                    "500": "#352E76",
                    "600": "#2B2569",
                    "700": "#1E1957",
                    "800": "#151047",
                    "900": "#0D0A36",
                    "950": "#060421",
                },
            },

            backgroundImage: {
                // skeleton loader overlay background
                "skeleton-gradient":
                    "linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5)                  60%, rgba(255, 255, 255, 0))",
            },

            fontFamily: {
                helvetica: ["Helvetica Neue", ...fontFamily.sans],
                jetBrainsMono: ["JetBrainsMono", ...fontFamily.sans],
            },
            // shimmer skeleton loader config
            animation: {
                shimmer: "shimmer 3s infinite",
            },
            keyframes: {
                shimmer: {
                    "100%": {transform: "translateX(100%)"},
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwindcss-debug-screens"),
    ],
} satisfies Config;
