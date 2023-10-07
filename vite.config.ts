import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "@svgr/rollup";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  envPrefix: "REACT_APP_",

  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    visualizer({
      template: "network",
      emitFile: true,
      gzipSize: true,
      brotliSize: true,
      filename: "analyse.html",
    }) as PluginOption,
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
