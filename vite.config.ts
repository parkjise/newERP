import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6001,
    strictPort: false, // 포트가 사용중이면 다른 포트로 안 넘어가고 에러
  },
  resolve: {
    alias: {
      // 2. @를 src 폴더로 매핑
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
