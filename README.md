# Log build context action

Logs process env variables set by Github  

Custom env variables can be added with `GLOBAL_` prefix on workflow level and will be logged first.
```
name: Workflow name

env:
  GLOBAL_TAG: v0.1.0
```

Add action to workflow:
```
jobs:
  build-context:
    runs-on: ubuntu-latest
    steps:
      - uses: danubetech/github-action-log-build-context@v0.1.0
```
