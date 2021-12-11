export default class Context {
    static init() {
        cy.wrap({}).as('_context');
    }

    static set(attributeName, value) {
        cy.get('@_context').then((context) => {
            context[attributeName] = value;
            cy.wrap(context).as('_context');
        });
    }

    static get(attributeName, callback) {
        cy.get('@_context').then((context) => {
            callback(context[attributeName]);
        });
    }

    static setBrowser(browser) {
        this.set('browser', browser);
    }

    static getBrowser(callback) {
        this.get('browser', callback);
    }
}
