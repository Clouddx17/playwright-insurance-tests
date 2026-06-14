class QuotePage {

  constructor(page) {
    this.page = page;
  }

  // Locators
  get ageField()        { return this.page.getByLabel('Age'); }
  get genderDropdown()  { return this.page.getByLabel('Gender'); }
  get sumAssuredField() { return this.page.getByLabel('Sum Assured'); }
  get policyTermField() { return this.page.getByLabel('Policy Term'); }
  get calculateButton() { return this.page.getByRole('button', { name: 'Calculate' }); }
  get premiumResult()   { return this.page.getByTestId('premium-amount'); }
  get errorMessage()    { return this.page.getByRole('alert'); }

  // Actions
  async goto() {
    await this.page.goto('/quote');
  }

  async fillQuoteForm(age, gender, sumAssured, term) {
    await this.ageField.fill(age);
    await this.genderDropdown.selectOption(gender);
    await this.sumAssuredField.fill(sumAssured);
    await this.policyTermField.fill(term);
  }

  async calculatePremium() {
    await this.calculateButton.click();
  }

  async getPremiumAmount() {
    return await this.premiumResult.textContent();
  }

}

export default QuotePage;