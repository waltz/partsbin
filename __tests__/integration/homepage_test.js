jest.disableAutomock();

import Browser from 'zombie';

Browser.localhost('partsbin.club', 3000);
const browser = new Browser();

describe('homepage', () => {
  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('should return a page', () => {
    browser.assert.success();
  });

  it('has a title', () => {
    browser.assert.text('title', 'welcome to partsbin!');
  });
});
