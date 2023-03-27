class DuckduckgoPage {
  _url = 'https://duckduckgo.com/'

  _inputSearch = '#search_form_input_homepage'
  _btnSearch = '#search_button_homepage'
  _resultSearch = '#links'

  load() {
    cy.visit(this._url)
    cy.get('body').should('be.visible')
  }

  fillSearch(text) {
    cy.get(this._inputSearch).should('be.visible').type(text)
  }

  search() {
    cy.get(this._btnSearch).should('be.visible').click()
  }

  resultText(callback) {
    cy.get(this._resultSearch, { timeout: 20000 }).then(($elem) => {
      callback($elem.text())
    })
  }
}

module.exports = DuckduckgoPage
