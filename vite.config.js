import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/studio-medico/', // <--- QUESTA RIGA È FONDAMENTALE
})