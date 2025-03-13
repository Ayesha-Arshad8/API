import { test as baseTest } from '@playwright/test';
import { ApiTest } from './API-logic/getapi';

export const test = baseTest.extend<
{
    apiTest: ApiTest;
  }>
({
    apiTest: async ({}, use) => {
        await use(new ApiTest());
      },
    });
    export const expect = test.expect;