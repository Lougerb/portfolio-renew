import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
// For github purposes: index page is /portfolio-renew/
export default defineConfig({
	base: "/portfolio-renew/",
	plugins: [react()],
	css: {
		postcss: {
			plugins: [autoprefixer({})],
		},
	},
});
