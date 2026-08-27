import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-framer-motion';
            if (id.includes('react-icons') || id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('bootstrap')) return 'vendor-bootstrap';
            if (id.includes('react-router-dom') || id.includes('@remix-run')) return 'vendor-router';
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
            return 'vendor-others';
          }
        },
      },
    },
  },
});

