import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/PonderosaHacks2025/' : '/'
  return {
    base,
    plugins: [react()]
  }
})
