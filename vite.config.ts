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
        entry: resolve(__dirname, libEntry),
        name: "@rfsmart/UI",
        formats: ["es", "umd"],
        fileName: (format) => `rfs-ui.${format}.js`,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
  };
});
