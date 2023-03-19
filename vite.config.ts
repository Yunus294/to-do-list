import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: '/',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      lib: {
        entry: {
          main: resolve(__dirname, 'src/index.ts'),
        },
        formats: ['es', 'cjs'],
      },
    },
    rollupOptions: {
      // external: ['vue'],
    },
  };
});
