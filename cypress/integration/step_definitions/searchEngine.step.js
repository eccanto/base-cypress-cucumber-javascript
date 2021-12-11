import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';

const EcosiaPage = require('./src/pages/ecosia');
const DuckDuckGoPage = require('./src/pages/duckduckgo');
import Context from './src/context';

Before(() => {
    Context.init();
});

Given('I go to the Ecosia page', () => {
    const browser = new EcosiaPage().load();
    Context.setBrowser(browser);
});

Given('I go to the Duckduckgo page', () => {
    const browser = new DuckDuckGoPage().load();
    Context.setBrowser(browser);
});

Given('I fill the search input with the {string} term on the Search Engine page', (text) => {
    Context.getBrowser((browser) => {
        browser.fillSearch(text);
    });
});

When('I click on the search button on the Search Engine page', () => {
    Context.getBrowser((browser) => {
        browser.search();
    });
});

Then('the text {string} should be visible on the result page on the Search Engine page', (text) => {
    Context.getBrowser((browser) => {
        browser.resultText((elemText) => {
            expect(elemText).contains(text);
        });
    });
});
