import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { CartPage } from '../pages/cart.page';
import { MenuPage } from '../pages/menu.page';
import { PaymentPage } from '../pages/payment.page';


test.describe('Payment - ', () =>{

    let menuPage: MenuPage;
    let cartPage: CartPage;
    let paymentPage: PaymentPage;

    test.beforeEach(async ({ page }) => {

        await page.goto('/');
        menuPage = new MenuPage(page);
        cartPage = new CartPage(page);
        paymentPage = new PaymentPage(page);
        await menuPage.chooseThreeCoffees();
        await cartPage.goToCart();
        await cartPage.checkout.click();
    })

    test('Verify Payment', async() =>{

        await paymentPage.makePayment(faker.person.firstName(),faker.internet.email());
        expect(paymentPage.successSnackbar).toHaveText('Thanks for your purchase. Please check your email for payment.');

    });



});