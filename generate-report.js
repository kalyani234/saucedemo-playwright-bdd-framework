// generate-report.js

const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports',                    // Folder where cucumber-report.json is
  reportPath: 'reports/html-report',     // Output folder for the HTML report
  openReportInBrowser: true,             // Auto-open in browser after generation (set false if annoying)
  displayDuration: true,                 // Show step durations
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest'
    },
    device: 'Desktop',
    platform: {
      name: 'macOS',                     // Change to 'Windows' or 'Linux' if needed
      version: 'Sonoma'                  // Or your OS version
    }
  },
  customData: {
    title: 'SauceDemo BDD Execution Report',
    data: [
      { label: 'Project', value: 'SauceDemo Playwright BDD Framework' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Tester', value: 'Your Name' },
      { label: 'Execution Date', value: new Date().toLocaleString() }
    ]
  }
});