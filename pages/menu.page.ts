import { Locator, Page } from '@playwright/test';

export class MenuPage {
  readonly page: Page;
  menu: Locator;
  total: Locator;
  coffeeList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menu =  page.locator('li').filter({ hasText: 'menu' })
    this.total = page.locator('[data-test="checkout"]')
    this.coffeeList = page.locator('h4')
  }

  async chooseCoffee( coffeeType: string ) {

   await this.page.getByTestId(coffeeType).click();

  }

  async chooseThreeCoffees (){
    await this.page.getByTestId('Espresso').click();
    await this.page.getByTestId('Mocha').click();
    await this.page.getByTestId('Americano').click();
  }

}
