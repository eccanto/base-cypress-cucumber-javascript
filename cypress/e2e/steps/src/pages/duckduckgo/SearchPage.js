export default class SearchPage {
    #CSS_RESULT_SEARCH = '#react-layout [data-testid="mainline"]'

    resultContain(callback) {
        cy.get(this.#CSS_RESULT_SEARCH, { timeout: 20000 }).then(($elem) => {
            callback($elem.text())
        })
    }
}
