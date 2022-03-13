import { Person } from "./Person.js";

class Profit extends Person {
    constructor(type) {
        super(type);

        this.balance = Infinity;
        this.receiving = false;
        this.products = new Map;
        this.sales = new Map;
    };

    product(...items) {
        for(const item of items) {
            const product = this.products.get(item.name) || {};

            product.name = item.name;
            product.description = product.description || '';
            product.price = item.price;

            this.products.set(product.name, product);
        };
    };

    receipt(receipt) {
        this.sales.set(receipt.name, receipt);
    };
};

export { Profit };