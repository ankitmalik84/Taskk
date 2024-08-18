import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This will listen on all available network interfaces
    port: 5173, // Optional: specify the port you want to use
  },
});
