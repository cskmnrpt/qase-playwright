import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [
    [
      "playwright-qase-reporter",
      {
        /*
        // You can define the reporter options here, or in a separate `qase.config.json` file.
        mode: 'testops',
        debug: false,
        testops: {
          api: {
            token: 'api_key',
          },
          project: 'project_code',
          uploadAttachments: true,
          run: {
          //  id: 1,
            title: "Your test run title",
            description: "Automated Test run by Playwright",
            complete: true,
          },
          environment: 'prod',
        },
      */
      },
    ],
  ],
  use: {
    screenshot: "only-on-failure", // options: 'on', 'off', 'only-on-failure'
    video: "on", // options: 'on', 'off', 'on-first-retry'
    viewport: { width: 1280, height: 720 },
  },

  outputDir: "test-results/",
});
