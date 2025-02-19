import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.gif'],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "datatables.net-dt/css/dataTables.dataTables.min.css";`,
      },
    },
  },
});