import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    base: '/PonderosaHacks2025/',
  },
  

  plugins: [react()],
});