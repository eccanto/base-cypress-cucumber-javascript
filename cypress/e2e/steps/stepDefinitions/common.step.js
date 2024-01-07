import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I see {string} in the title', title => {
    cy.title().should('include', title)
})
