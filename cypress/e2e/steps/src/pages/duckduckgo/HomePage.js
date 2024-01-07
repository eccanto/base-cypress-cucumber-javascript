export default class HomePage {
    #BASE_URL = 'https://duckduckgo.com/'

    #CSS_INPUT_SEARCH = '#searchbox_input'
    #CSS_BUTTON_SEARCH = '#searchbox_homepage button[type="submit"]'

    open() {
        cy.visit(this.#BASE_URL)
        cy.get('body').should('be.visible')
    }

    fillSearch(text) {
        cy.get(this.#CSS_INPUT_SEARCH).should('be.visible').type(text)
    }

    search() {
        cy.get(this.#CSS_BUTTON_SEARCH).should('be.visible').click()
    }
}
