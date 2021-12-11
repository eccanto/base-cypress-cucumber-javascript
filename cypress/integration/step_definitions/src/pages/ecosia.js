const BaseSearchEngine = require('./baseSearchEngine');

class EcosiaPage extends BaseSearchEngine {
    _url = 'https://www.ecosia.org/';

    _inputSearch = 'input[type=search]';
    _btnSearch = 'button[type=submit]';
    _resultSearch = '.mainline';
}

module.exports = EcosiaPage;
