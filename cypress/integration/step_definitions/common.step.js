import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I see {string} in the title', title => {
    cy.title().should('include', title);
});
