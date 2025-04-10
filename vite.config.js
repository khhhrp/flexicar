import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";
import { createHtmlPlugin } from "vite-plugin-html";

const getHtmlInputs = () => {
  const files = fs
    .readdirSync(__dirname)
    .filter((file) => file.endsWith(".html"));

  return files.reduce((inputs, file) => {
    const key = file.replace(/\.html$/, "");
    inputs[key] = resolve(__dirname, file);
    return inputs;
  }, {});
};

export default defineConfig({
  root: __dirname,
  base: "",
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    rollupOptions: {
      input: {
        ...getHtmlInputs(),
        main: resolve(__dirname, "src/js/script.js"),
      },
    },
    outDir: "dist",
    assetsDir: "assets",
  },
});
