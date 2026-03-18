import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/TRWStoragePanel.tsx'),
      name: 'TRWStoragePanel',
      fileName: () => 'trw-storage-panel.js',
      formats: ['iife'],
    },
    rollupOptions: {
      // InvenTree already has React in scope; externalise to avoid double-loading.
      // If your InvenTree version does NOT provide React globally, remove these externals.
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: path.resolve(__dirname, '../static/trw_storage'),
    emptyOutDir: false,
  },
});
