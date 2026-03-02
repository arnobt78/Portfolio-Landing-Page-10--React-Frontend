import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config: enables React Fast Refresh and JSX/TSX handling
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
