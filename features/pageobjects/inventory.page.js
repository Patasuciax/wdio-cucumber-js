import Page from "./page";

class InventoryPage extends Page {
    get frmProducts () {
        return $$('//div[@data-test="inventory-item-description"]');
    }

    // Identificators used for children objects in the DOM
    
    get identificatorProductName () {
        return ('//div[@data-test="inventory-item-name"]')
    }

    get identificatorProductDescription () {
        return ('//div[@data-test="inventory-item-desc"]')
    }

    get identificatorProductPrice () {
        return ('//div[@data-test="inventory-item-price"]')
    }

    async getProductDescriptionByName (prName) {
        let arrProductNames = await this.frmProducts
        
        for (let element of arrProductNames) {
            let aux = await element.$(this.identificatorProductName).getText();
            if (aux == prName) {
                return (await element.$(this.identificatorProductDescription).getText());
            }          
        }
        throw new Error(`Product not found: prName`);
    }

    async getProductPriceByName (prName) {
        let arrProductNames = await this.frmProducts
        
        for (let element of arrProductNames) {
            let aux = await element.$(this.identificatorProductName).getText();
            if (aux == prName) {
                return await element.$(this.identificatorProductPrice).getText();
            }          
        }
        throw new Error(`Product not found: prName`);
    }
}

export default new InventoryPage();
