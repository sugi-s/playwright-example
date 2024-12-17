import { test, expect } from '@playwright/test';
import { MenuPage } from '../pages/menu.page';
import { PromoPage } from '../pages/promo.page';


test.describe('Menu - ', () =>{

    let menuPage: MenuPage;
    let promoPage: PromoPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        menuPage = new MenuPage(page);
        promoPage = new PromoPage(page);
    
    })


    test('has title', async ({ page }) => {
   
        await expect(page).toHaveTitle('Coffee cart');
    });

    test('verify menu page contents', async() =>{

       await expect( menuPage.total).toBeVisible()
       await expect(menuPage.total).toHaveText('Total: $0.00')
       await expect(menuPage.coffeeList).toHaveCount(9);
       
    });

    test('verify adding promo', async() =>{

        await menuPage.chooseCoffee('Espresso');
        await expect(menuPage.total).toHaveText('Total: $10.00')
        await menuPage.chooseCoffee('Cappuccino');
        await expect(menuPage.total).toHaveText('Total: $29.00')
        await menuPage.chooseCoffee('Flat_White');
        await expect(menuPage.total).toHaveText('Total: $47.00')
        expect(promoPage.promoText).toBeInViewport();
        await promoPage.addPromo();
        await expect(menuPage.total).toHaveText('Total: $51.00')

    });

    test('verify discarding promo', async() =>{

        await menuPage.chooseThreeCoffees();
        expect(promoPage.promoText).toBeInViewport();
        await promoPage.discardPromo();
        await expect(menuPage.total).toHaveText('Total: $25.00')
        await expect(promoPage.promoDialog).toBeHidden();

    });

});