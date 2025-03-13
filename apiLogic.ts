import { request, expect } from '@playwright/test';
import {BASE_URL} from './playwright.config';

export class ApiTest {
  public async verifySuccessResponse(endpoint: string): Promise<void> {
    const requestContext = await request.newContext();
    const response = await requestContext.get(`${BASE_URL}${endpoint}`);
    console.log(`Status Code: ${response.status()}`); // Print status code
    expect(response.status()).toBe(200); // Assert success status
    console.log(`Status Code: ${response.statusText()}`); // Print status Text
    expect(response.statusText()).toBe('OK'); // Assert OK status text

  }

  public async verifyPostAssertions(endpoint: string ,expectedCount: number) {
    const requestContext = await request.newContext();
    const response = await requestContext.get(`${BASE_URL}${endpoint}`);
    const responseBody = await response.json();
    console.log(`Total Posts count Received: ${responseBody.length}`);
    console.log(`First Post: ${JSON.stringify(responseBody[0], null, 2)}`); // Log first post
    // Assertions
    expect(responseBody.length).toBe(expectedCount); // Validate total count
    expect(responseBody[0].title).toBeTruthy(); // Ensure title is not empty
    expect(responseBody[0].body).toBeTruthy(); // Ensure body is not empty
  }
}

