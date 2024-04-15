import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  rollupOptions: {
    input: {
      main: resolve(__dirname, "index.html"),
    },
    external: {},
  },
});
