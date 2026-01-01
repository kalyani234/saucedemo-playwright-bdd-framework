import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: '2m', target: 100 },   // Ramp-up to 100 VUs
    { duration: '10m', target: 100 },  // Steady at 100 VUs
    { duration: '2m', target: 0 },     // Ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],  // 95% requests under 500ms
    'http_req_failed': ['rate<0.01'], // <1% errors
  },
};

export default function () {
  const res = http.get('https://www.saucedemo.com/');
  check(res, { 
    'status is 200': (r) => r.status === 200 
  });
  sleep(1);
}

// handleSummary must be at top level (after default function)
export function handleSummary(data) {
  return {
    'reports/k6-load-report.html': htmlReport(data),
  };
}