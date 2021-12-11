/**
 * Abstract Class BaseSearchEngine.
 *
 * @class BaseSearchEngine
*/
class BaseSearchEngine {
    _url;

    _inputSearch;
    _btnSearch;
    _resultSearch;

    constructor() {
        if (this.constructor === BaseSearchEngine) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    load() {
        cy.visit(this._url);
        cy.get('body').should('be.visible');
    }

    fillSearch(text) {
        cy.get(this._inputSearch).should('be.visible').type(text);
    }

    search() {
        cy.get(this._btnSearch).should('be.visible').click();
    }

    resultText(callback) {
        cy.get(this._resultSearch, { timeout: 20000 }).then(($elem) => {
            callback($elem.text());
        });
    }
}

module.exports = BaseSearchEngine;
