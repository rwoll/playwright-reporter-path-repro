import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  reporter: [
    ['html', { outputFolder: '../../dist/apps/playwright-project/playwright-report' }],
    ['json', { outputFile: '../../dist/apps/playwright-project/playwright-report/test-results.json' }]
  ]
};

export default config;
