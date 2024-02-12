import type { Config } from "tailwindcss";

const config: Config = {
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
        },
    },
    safelist: [
        "bg-yellow-400",
        "bg-red-400",
        "bg-orange-200",
        "bg-white",
        "bg-orange-400",
        "bg-stone-400",
        "bg-teal-300",
        "bg-pink-200",
        "bg-green-400",
        "bg-yellow-300",
        "bg-cyan-200",
        "bg-purple-400",
        "bg-blue-200"
    ],  
    plugins: [],
};
export default config;
