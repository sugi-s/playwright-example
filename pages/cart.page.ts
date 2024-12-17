import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  checkout: Locator;
  cartListHeader: Locator;
  cartItems: Locator;
  cartMenu: Locator

  constructor(page: Page) {
    this.page = page;
    this.cartMenu = page.getByLabel('Cart page')
    this.checkout =  page.getByTestId('checkout')
    this.cartListHeader = page.locator('.list-header div')
    this.cartItems = page.locator('li.list-item')

  }

  async goToCart(){
    this.cartMenu.click();
  }

  async removeCartItem(itemName:string) {
    await this.page.getByRole('button', { name: `Remove all ${itemName}` }).click();
  }

  async increaseQuantity(itemName: string) {
    await this.page.getByRole('button', { name: `Add one ${itemName}` }).click();
  }
 
  async decreaseQuantity(itemName: string) {
    await this.page.getByRole('button', { name: `Remove one ${itemName}` }).click();
  }

}
