# SauceDemo Playwright BDD Framework

A **professional end-to-end automation testing framework** for [SauceDemo.com](https://www.saucedemo.com) built with modern tools and best practices (2026 standards).

This project demonstrates **real-world SDET/QA skills**: BDD, clean architecture, API testing, performance testing, reporting, and CI/CD integration.

[![Node.js](https://img.shields.io/badge/Node.js-22.x-green)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/Playwright-Latest-blue)](https://playwright.dev/)
[![Cucumber](https://img.shields.io/badge/Cucumber-BDD-orange)](https://cucumber.io/)
[![k6](https://img.shields.io/badge/k6-Grafana_Cloud-yellow)](https://grafana.com/oss/k6/)
[![Azure Pipelines](https://img.shields.io/badge/Azure_Pipelines-CI/CD-blue)](https://azure.microsoft.com/en-us/services/devops/pipelines/)

## Features

- **BDD with Cucumber** – Human-readable Gherkin scenarios
- **Page Object Model (POM)** – Clean, maintainable, reusable code
- **UI Testing** – Complete checkout flow (login → add product → cart → checkout → success)
- **API Testing** – Health checks + protected route validation (all in BDD)
- **Performance Testing** – k6 load & spike tests with **Grafana Cloud k6** dashboards
- **Reporting** – Beautiful Cucumber HTML report + k6 HTML reports
- **CI/CD** – Azure DevOps pipeline (auto-run on push, publish reports as artifacts)

## Tech Stack

- Playwright Test (JavaScript)
- @cucumber/cucumber
- multiple-cucumber-html-reporter
- k6 + Grafana Cloud k6
- Azure DevOps Pipelines

## Project Structure
```
├── features/                # Gherkin feature files (UI + API)
│   ├── ui/
│   └── api/
├── pages/                   # Page Object Model classes
├── step-definitions/        # Cucumber step definitions
├── performance-tests/       # k6 load & spike scripts
├── reports/                 # Generated HTML reports
├── support/                 # Hooks (browser + API setup)
├── azure-pipelines.yml      # CI/CD pipeline
├── playwright.config.js
├── cucumber.js
└── package.json

```


## Quick Start


## Clone the repo
```
git clone https://github.com/kalyani234/saucedemo-playwright-bdd-framework.git
cd saucedemo-playwright-bdd-framework
```

## Install dependencies
```
npm install
```

## Install browsers
```
npx playwright install --with-deps
```

## Run Tests Locally
- Run UI + API BDD tests
```
npm run test:bdd
```

- Generate Cucumber HTML report
```
npm run report
```
- Open: reports/html-report/index.html

## Run k6 performance tests (results in Grafana Cloud)
```
k6 cloud performance-tests/load.js
k6 cloud performance-tests/spike.js
```

## Test Execution 
https://github.com/user-attachments/assets/85d18aed-224b-4720-a598-aed5bd32b8b9

## Test Results

## Cucumber Test Report
https://github.com/user-attachments/assets/3d55b02d-6b79-463d-99ff-3f418c48f456

## Performance Test Results - Grafana K6
https://github.com/user-attachments/assets/80044691-427f-40a6-86c7-cebe09f034b8
