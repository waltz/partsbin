import Browser from 'zombie';
import jasmine from 'jasmine';
import IntegrationServer from './integration_server';

const integration_server_port = 3000;

Browser.localhost('partsbin.club', 3000);
const browser = new Browser();

export { browser };
