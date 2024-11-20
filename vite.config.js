import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './', // Укажите базовый путь для корректной работы на GitHub Pages или других хостингах
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/variables.scss";` // Подключает переменные или миксины SCSS глобально
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Упрощает импорт, чтобы не писать относительные пути
    }
  },
  build: {
    outDir: 'dist', // Папка, куда будет собран проект
    assetsDir: 'assets', // Папка для ассетов (CSS, JS, изображения)
    rollupOptions: {
      input: './index.html' // Входная точка вашего приложения
    }
  },
  server: {
    open: true, // Автоматически открывает проект в браузере при запуске dev-сервера
    port: 3000 // Указывает порт для dev-сервера
  }
});