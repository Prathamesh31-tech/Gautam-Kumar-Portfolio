import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-workspace-hero-image',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Serve the workspace image cleanly at /hero-bg.jpg
          if (req.url === '/hero-bg.jpg' || req.url?.includes('Untitled-1')) {
            const imagePath = path.resolve(__dirname, '../Untitled-1 copy.jpg.jpeg');
            if (fs.existsSync(imagePath)) {
              res.setHeader('Content-Type', 'image/jpeg');
              return fs.createReadStream(imagePath).pipe(res);
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173
  }
});
