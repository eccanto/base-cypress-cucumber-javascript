const BaseSearchEngine = require('./baseSearchEngine');

class DuckDuckGoPage extends BaseSearchEngine {
    _url = 'https://duckduckgo.com/';

    _inputSearch = '#search_form_input_homepage';
    _btnSearch = '#search_button_homepage';
    _resultSearch = '#links';
}

module.exports = DuckDuckGoPage;
