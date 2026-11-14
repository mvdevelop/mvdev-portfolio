module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      numberOfRuns: 3,
      puppeteerScript: './scripts/puppeteer-setup.js',
      settings: {
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        chromeFlags: '--no-sandbox',
        FormFactor: 'desktop',
        throttlingMethod: 'simulate',
        throttleCPUSlowdown: 4,
        throttleNetwork: 'good2g',
        screenEmulation: {
          mobile: false,
          width: 1440,
          height: 900,
          deviceScaleFactor: 1,
          fitWindow: false,
        },
      },
    },
    assert: {
      assertions: {
        // Performance assertions
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],

        // Individual metrics
        'first-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'speed-index': ['error', { maxNumericValue: 1600 }],

        // Best practices
        'uses-http2': ['error', {}],
        'uses-passive-event-listeners': ['error', {}],
        'no-document-write': ['error', {}],
        'uses-responsive-images': ['error', {}],
        'is-on-https': ['error', {}],
        'valid-source-maps': ['warn', {}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    // Keep the existing build artifacts
    beforeUpload() {},
  },
};
