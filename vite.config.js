import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  darkMode: 'class', // ou 'media' selon votre préférence
  theme: {
    extend: {
      // ...existing code...
    },
  },
  variants: {
    extend: {
      // Ajoutez ici vos variantes personnalisées
      backgroundColor: ['dark'],
      textColor: ['dark'],
      // Ajoutez d'autres propriétés si nécessaire
    },
  },
  plugins: [
    tailwindcss(),
  ],
})