import Browser from 'zombie';
import jasmine from 'jasmine';

Browser.localhost('partsbin.club', 3000);
const browser = new Browser();

export { browser };
