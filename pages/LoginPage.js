class LoginPage {
  
  // Constructor — gives this page access to the browser
  constructor(page) {
    this.page = page;
  }

  // Locators — where things are on the login page
  get emailField()    { return this.page.getByRole('textbox', { name: 'Username' }); }
  get passwordField() { return this.page.getByRole('textbox', { name: 'Password' }); }
  get loginButton()   { return this.page.getByRole('button', { name: 'Login' }); }
  get errorMessage()  { return this.page.getByText('Your username is invalid!'); }

  // Actions — what you can do on the login page
  async goto() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

}

export default LoginPage;