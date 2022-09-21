import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  reporter: [
    ['html', { outputFolder: '../../dist/html' }],
    ['json', { outputFile: '../../dist/json/test-results.json' }]
  ]
};

export default config;
