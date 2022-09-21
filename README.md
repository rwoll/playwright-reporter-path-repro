From root dir, run:

```
$ npm i
$ npx playwright test --config apps/playwright-project/playwright.config.ts
```

Observe HTML Report ends up:

```
//dist/html/index.html
```

but JSON Report ends up:

```
//../../dist/json/test-results.json
```