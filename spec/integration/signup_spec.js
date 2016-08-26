import { browser } from '../support/integration_helper.js';

describe('signup', () => {
  beforeEach(function(done) {
    browser.visit('/', done);
    browser.window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
  });

  it('should return a page', () => {
    browser.clickLink('Sign Up');
    browser.assert.success();
  });

  it('has a title', () => {
    browser.clickLink('Sign Up');
    browser.assert.text('h2', 'Sign Up!');
  });
});
