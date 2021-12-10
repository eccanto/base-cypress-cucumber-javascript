import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const EcosiaPage = require('./src/pages/ecosia');
const DuckDuckGoPage = require('./src/pages/duckduckgo');

Given('I go to the Ecosia page', () => {
    const browser = new EcosiaPage();
    browser.load();

    cy.wrap(browser).as('browser');
});

Given('I go to the Duckduckgo page', () => {
    const browser = new DuckDuckGoPage();
    browser.load();

    cy.wrap(browser).as('browser');
});

Given('I fill the search input with the {string} term on the Search Engine page', (text) => {
    cy.get('@browser').then((browser) => {
        browser.fillSearch(text);
    });
});

When('I click on the search button on the Search Engine page', () => {
    cy.get('@browser').then((browser) => {
        browser.search();
    });
});

Then('the text {string} should be visible on the result page on the Search Engine page', (text) => {
    cy.get('@browser').then((browser) => {
        browser.resultText((elemText) => {
            expect(elemText).contains(text);
        });
    });
});
