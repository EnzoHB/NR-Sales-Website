import { Person } from "./Person.js";
import { nanoid } from 'nanoid'

class Store extends Person {
    constructor(name) { 
        super(name);

        this.balance = Infinity;
        this.sending = false;
        this.catalog = new Map;
        this.receipts = new Map;
        this.address = null;
    };

    product(...items) {
        for(const item of items) {
            const product = this.catalog.get(item.name) || {};
            
            product.name = item.name;
            product.description = product.description || '';
            product.price = item.price;

            this.catalog.set(product.name, product);
        };
    };

    receipt(cart) {
        this.receipts.set(cart.name, cart);
    };
};

export { Store }