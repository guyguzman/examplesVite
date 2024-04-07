import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "public/img"),
      "@javascript": path.resolve(__dirname, "js"),
    },
  },
});
