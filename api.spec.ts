import { test } from './fixture';

test.describe.configure({ mode: 'parallel' });
test.describe('API Get Tests', () => {
  test('should verify API success response', async ({ apiTest }) => {
    await apiTest.verifySuccessResponse('/posts');
  });

  test('should verify post assertions', async ({ apiTest }) => {
    await apiTest.verifyPostAssertions('/posts', 100); // Assuming API returns 100 posts
  });
});