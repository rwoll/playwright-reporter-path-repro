From root dir, run:

```
$ npm i
$ npx playwright test --config apps/playwright-project/playwright.config.ts
```

Observe HTML Report ends up:

```
//dist/apps/playwright-project/playwright-report/index.html
```

but JSON Report ends up:

```
//../../dist/apps/playwright-project/playwright-report/test-results.json
```