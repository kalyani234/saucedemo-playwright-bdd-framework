// performance-tests/spike.js

import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  cloud: {
    projectID: 6283091,          // ← This sends it to your custom project
    // name: 'SauceDemo Spike Test'  // Optional - shows this name in dashboard
  },
  stages: [
    { duration: '10s', target: 20 },
    { duration: '20s', target: 100 },
    { duration: '30s', target: 100 },
    { duration: '20s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000'],
    'http_req_failed': ['rate<0.9'],
  },
};

const BASE_URL = 'https://www.saucedemo.com';

export default function () {
  const loginRes = http.get(BASE_URL + '/');
  check(loginRes, { 'Login page returns 200': (r) => r.status === 200 });

  const inventoryRes = http.get(BASE_URL + '/inventory.html');
  check(inventoryRes, { 'Inventory protected (404)': (r) => r.status === 404 });

  const cartRes = http.get(BASE_URL + '/cart.html');
  check(cartRes, { 'Cart protected (404)': (r) => r.status === 404 });

  sleep(1);
}

export function handleSummary(data) {
  return {
    'reports/k6-spike-report.html': htmlReport(data),
  };
}