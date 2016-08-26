import { browser } from '../support/integration_helper.js';

describe('homepage', () => {
  beforeEach(function(done) {
    browser.visit('/', done);
    browser.window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
  });

  it('should return a page', () => {
    browser.assert.success();
  });

  it('has a title', () => {
    browser.assert.text('title', 'welcome to partsbin!');
  });
});
