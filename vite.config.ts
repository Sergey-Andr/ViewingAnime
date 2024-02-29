import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), svgr({ include: "**/*.svg?react" })],
    server: {
        proxy: {
            "/myanimelist": {
                target: `https://api.myanimelist.net/v2`,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/myanimelist/, ""),
            },
        },
    },
});
