import tailwindcss from '@tailwindcss/vite'
import path from "path"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),mkcert(),],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
   build: {
    outDir: path.resolve(import.meta.dirname, "PAD NAAR BACKEND"),
    emptyOutDir: true,
  },
  server: {
    https: {},
    port: 5173,
    strictPort: true,
    proxy: {
      "/api": {
        target: "https://localhost:7245",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
