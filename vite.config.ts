import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === "build") {
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
      build: {
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo: any) => {
              let extType = assetInfo.name.split(".").at(1);
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                extType = "img";
              } else if (/woff|woff2/.test(extType)) {
                extType = "css";
              }
              return `${extType}/[name]-[hash][extname]`;
            },
            chunkFileNames: "js/[name]-[hash].js",
            entryFileNames: "js/[name]-[hash].js",
          },
        },
      },
      base: "/myplace/",
    };
  } else {
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
      server: {
        open: true,
        host: "0.0.0.0",
        port: 8080,
      },
    };
  }
});
