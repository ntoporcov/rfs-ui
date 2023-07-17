/** @type {import('vite').UserConfig} */

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/

const libEntry = "src/lib/index.ts";
export default defineConfig(({ command }) => {
  const plugins = [];

  if (command === "build") {
    plugins.push(
      dts({
        insertTypesEntry: true,
        exclude: [
          "**/playground/**",
          "**/src/**/*.stories.ts",
          "**/src/**/*.stories.tsx",
          "**/*.mdx",
        ],
      }),
    );
  }

  return {
    plugins: [react(), ...plugins],
    server: {
      port: 3000,
    },
    build: {
      lib: {
        entry: {
          index: resolve(__dirname, "src/lib/index.ts"),
          Providers: resolve(__dirname, "src/lib/Providers/index.ts"),
          OC: resolve(__dirname, "src/lib/OC/index.ts"),
        },
        name: "@rfs/ui",
        formats: ["es"],
        fileName: (format, entryName) => `${entryName}.js`,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          chunkFileNames: "[name]-[hash].js",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
  };
});
