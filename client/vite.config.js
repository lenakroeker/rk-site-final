import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Other build options...
    rollupOptions: {
      // Other Rollup options...
      output: {
        // Other output options...
        html: {
          // Enable the html.cspNonce option
          cspNonce: true,
        },
      },
    },
  },
});
