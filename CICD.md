# What does CI/CD exactly means?

- Continuous Integration
- Continuous Delivery

  - Not continuous deployment.
  - **What’s the difference?**

    - Automation pauses when developers push to production.
    - Continuous deployment automates the entire release process.
    - Code changes are deployed to customers as soon as they pass all the required tests.
    - Since continuous deployment relies on:

      - Rigorous testing tools
      - A mature testing culture

      Most software teams start with continuous delivery and integrate more automated testing over time.

# CI

- Package up files and components into release artifacts automatically
- Run tests for quality, performance, and other requirements.

# CD

- Send builds off to the operations team for further testing and staging.

# Steps:

1. Open pull request
2. Check code style
3. Build project
4. Unit tests
5. These two thing in parallel:
   1. Deploy into the staging server
   2. E2E tests

# References:

- [GitHub article](https://resources.github.com/ci-cd/)
