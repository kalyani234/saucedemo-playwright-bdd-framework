// cucumber.js

module.exports = {
  default: {
    // Load ALL step definitions from both UI and API folders
    require: [
      'step-definitions/**/*.js',   // Includes checkout.steps.js and api/api.steps.js
      'support/hooks.js'            // Browser + API request setup/teardown + screenshots
    ],

    // Output formats
    format: [
      'progress-bar',                              // Clean real-time progress in terminal
      'json:reports/cucumber-report.json',         // Required for generate-report.js to create HTML
      // Optional: Add 'html:reports/quick-report.html' for instant basic HTML
    ],

    // Parallel execution – run scenarios concurrently for speed
    // 3 is safe and fast (adjust based on your machine or CI resources)
    parallel: 3,

    // Retry failed scenarios once – helps with rare network flakiness
    retry: 1,

    // Fail immediately if there are undefined or pending steps
    strict: true,

    // Optional: Enable dry run to validate step definitions without executing
    // dryRun: false,

    // Optional: Use tags to run specific scenarios (e.g., @ui or @api)
    // Example: tags: '@ui',
    // tags: '@api',
    // tags: '@smoke'
  }
};