class Login {

    getAccountButton() {
        return cy.get('a[href="https://shop.demoqa.com/my-account/"]')
    }

    getEmailField() {
        return cy.get('#username')
    }

    getPasswordField() {
        return cy.get('#password')
    }

    getButtonConfirmLogin() {
        return cy.get('button.woocommerce-form-login__submit[name="login"]')
    }

    getLogoAccount() {
        return cy.get('.page-title')
    }

    NewLogin = (email, password) => {
        this.getAccountButton().click()
        this.getEmailField().type(email)
        this.getPasswordField().type(password)
        this.getButtonConfirmLogin().click()
    }
}



export default new Login