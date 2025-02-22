import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                background: "rgb(239, 239, 239)",
                secondary: "rgb(217, 215, 206)",
                green1: "rgb(166, 177, 142)",
                green2: "rgb(97, 128, 91)",
                green3: "rgb(65, 89, 66)",
                green4: "rgb(58, 77, 66)",
                // This is just for John because I think it's nice
                niceTeal: "rgb(119, 176, 187)",
            },
        },
    },
    plugins: [],
} satisfies Config;
