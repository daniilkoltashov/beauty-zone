import js from '@eslint/js' // Плагин/конфиг с рекомендуемыми правилами для JS
import globals from 'globals' // Глобальные переменные (например, браузерные)
import { defineConfig } from 'eslint/config' // Функция для типизированного flat-конфига ESLint

export default defineConfig([
  {
    // На какие файлы применять правила
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],

    // Подключаемые плагины
    plugins: { js },

    // Базовые рекомендуемые правила ESLint для JS
    extends: ['js/recommended'],

    // Кастомные правила для твоего проекта
    rules: {
      'no-console': 'warn', // Предупреждать при использовании console.log
      eqeqeq: 'warn', // Предупреждать, если не использовать ===/!==
      curly: 'warn', // Предупреждать, если нет фигурных скобок в блоках
      'no-else-return': 'warn', // Предупреждать, если есть else после return
    },

    // Глобальные переменные, доступные в коде
    languageOptions: { globals: globals.browser },
  },
])
