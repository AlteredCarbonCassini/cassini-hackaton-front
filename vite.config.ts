import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  server: {
    host: "0.0.0.0",
    port: 4000,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  base: "/cassini-hackaton-front/",
});
