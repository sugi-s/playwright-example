import { Locator, Page } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;
  paymentModal: Locator;
  heading: Locator;
  email: Locator;
  name: Locator;
  submit: Locator;
  successSnackbar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paymentModal = page.locator('.modal-content')
    this.heading =  this.paymentModal.filter({ has: page.getByRole('heading')})
    this.name = page.getByLabel('Name')
    this.email = page.getByLabel('Email')
    this.submit = page.getByRole('button', { name: 'Submit' })
    this.successSnackbar = page.locator('.success')
  }

 

  async makePayment(name:string, email:string) {
    await this.name.click();
    await this.name.fill(name);
    await this.email.click();
    await this.email.fill(email);
    await this.submit.click();
  }

}
