import { test, expect } from '@playwright/test';
import { MenuPage } from '../pages/menu.page';
import { CartPage } from '../pages/cart.page';

test.describe('Menu - ', () =>{

    let menuPage: MenuPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        menuPage = new MenuPage(page);
        cartPage = new CartPage(page);
        await menuPage.chooseThreeCoffees();
        await cartPage.goToCart();
    })

    test('Verify Cart page', async() =>{

        expect(cartPage.checkout).toBeVisible();
        expect(cartPage.checkout).toHaveText('Total: $25.00');
        expect(cartPage.cartItems).toHaveCount(3);

    });

    test('Verify updating quantity of items' , async() =>{

        expect(cartPage.checkout).toHaveText('Total: $25.00');
        await cartPage.increaseQuantity('Espresso');
        expect(await cartPage.checkout).toHaveText('Total: $35.00');
        await cartPage.decreaseQuantity('Americano');
        expect(await cartPage.checkout).toHaveText('Total: $28.00');
        await cartPage.removeCartItem('Mocha');
        expect(await cartPage.checkout).toHaveText('Total: $20.00');
    });

});