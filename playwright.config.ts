import { defineConfig, devices } from '@playwright/test';

// Tests run against the production build, served by `vite preview`
// at the GitHub Pages base path (see vite.config.ts).
const port = 4173;

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: `http://localhost:${port}/portfolio/`,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `npm run preview -- --port ${port} --strictPort`,
    url: `http://localhost:${port}/portfolio/`,
    reuseExistingServer: true,
  },
});
