/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#001b32",
				secondary: "#092b50",
				tertiary: "#579c8a",
				quaternary: "#dbfcd1",
				white: "#fbfbef",
			},
			dropShadow: {
				glow: "3px 3px 5px rgba(219, 252, 209, 0.2)",
				dark: "0px 12px 14px rgba(0,0,0,0.3)",
			},
			boxShadow: {
				scan: "rgba(219, 252, 209, 0.2) 1.95px 1.95px 2.6px",
			},
		},
	},
	plugins: [],
};
