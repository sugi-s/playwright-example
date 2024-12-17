import { Locator, Page } from '@playwright/test';

export class PromoPage {
  readonly page: Page;
  promoText: Locator;
  yesButton: Locator;
  noButton: Locator;
  promoDialog: Locator;

  constructor(page: Page) {
    this.page = page;
    this.promoText =  page.locator('.promo', { hasText: 'It\'s your lucky day! Get an extra cup of Mocha for $4.' })
    this.promoDialog = page.locator('.promo')
    this.yesButton = page.getByRole('button', {name: 'Yes, of course!'})
    this.noButton = page.getByRole('button', {name: 'Nah, I\'ll skip.'})
  }

  async addPromo() {
   await this.yesButton.click();
  }

  async discardPromo() {
    await this.noButton.click();
  }

}