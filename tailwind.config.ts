import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
                montserrat: ["var(--font-montserrat)", "sans-serif"],
            },
            colors: {
                background: "rgb(239, 239, 239)",
                secondary: "rgb(217, 215, 206)",
                green1: "rgb(166, 177, 142)",
                green1dark: "rgb(139, 148, 120)",
                green2: "rgb(97, 128, 91)",
                green3: "rgb(65, 89, 66)",

                green4: "rgb(58, 77, 66)",
                sidebar: "rgb(217, 215, 206)",
                // This is just for John because I think it's nice
                niceTeal: "rgb(119, 176, 187)",
            },
        },
        
    },
    plugins: [],


} satisfies Config;
