import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
    plugins: [react()],
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
