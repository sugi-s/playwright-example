# Example playwright test using coffee-cart app

## Coffee cart app

https://coffee-cart.app/

## Running linting and playwright tests

```
npm run lint
npm run e2e-test
```
## Reports

- Test result json is generated in test-results directory. Screenshots and video recording can be found on failures
- Html report is generated in playwright-report directory.

## CI

- Github actions are integrated with the repo and tests run on PR and merge to main. 
- Workflows in the pipeline can be seen from Actions tab on github.
- Test results are uploaded and are available under Artifacts.