import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
    plugins: [react(), svgr({ include: "**/*.svg?react" })],
    server: isProduction
        ? undefined
        : {
              proxy: {
                  "/myanimelist": {
                      target: `https://api.myanimelist.net/v2`,
                      changeOrigin: true,
                      rewrite: (path) => path.replace(/^\/myanimelist/, ""),
                  },
              },
          },
});
