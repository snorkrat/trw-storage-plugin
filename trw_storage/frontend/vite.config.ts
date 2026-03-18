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
    rollupOptions: {},
    outDir: path.resolve(__dirname, '../static/trw_storage'),
    emptyOutDir: false,
  },
});
