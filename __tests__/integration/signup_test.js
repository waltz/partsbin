jest.disableAutomock();

import Browser from 'zombie';

Browser.localhost('partsbin.club', 3000);
const browser = new Browser();

describe('signup', () => {
  beforeEach(function(done) {
    browser.visit('/signup', done);
    browser.window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
  });

  it('should return a page', () => {
    browser.assert.success();
  });

  xit('has a title', () => {
    browser.assert.text('title', 'welcome to partsbin!');
  });
});
