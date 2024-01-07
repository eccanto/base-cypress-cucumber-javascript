import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import SearchPage from '../../src/pages/duckduckgo/SearchPage'
import HomePage from '../../src/pages/duckduckgo/HomePage'

Given('I go to the Duckduckgo page', function () {
    this.homePage = new HomePage()
    this.homePage.open()
})

Given('I fill the search input with the {string} term on the Search Engine page', function (text) {
    this.homePage.fillSearch(text)
})

When('I click on the search button on the Search Engine page', function () {
    this.homePage.search()
})

Then('the text {string} should be visible on the result page on the Search Engine page', function (text) {
    this.searchPage = new SearchPage()
    this.searchPage.resultContain((elemText) => {
        expect(elemText).contains(text)
    })
})
