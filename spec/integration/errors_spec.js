import { browser } from '../support/integration_helper.js';

describe('errors', () => {
  beforeEach(function(done) {
    browser.visit('/really-weird-error-page', done);
    browser.window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
  });

  it('should return a page', () => {
    browser.assert.success();
  });

  it('has a title', () => {
    browser.assert.text('h2', "sorry, we couldn't find that page.");
  });
});
