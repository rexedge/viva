/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "#06070b",
				dimWhite: "rgba(255, 255, 255, 0.7)",
				secondary: "rgb(29,35,46)",
				tertairy : "rgb(56,61,71)"
			},
		},
	},
	plugins: [],
};
