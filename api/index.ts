import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Import the production app
import('../server/index-prod.ts').catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
