import { defineConfig } from '@playwright/test';

const BASE_URL='https://jsonplaceholder.typicode.com'

export default defineConfig({
  use: {
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
  testDir: './',
});
 export  {BASE_URL};