import { Person } from "./Person.js";

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
            this.catalog.set(item.name, 
            this.catalog.get(item.name) ||

                {
                    name: item.name,
                    price: item.price
                }
            );
        };
    };

    receipt(cart) {
        this.receipts.set(cart.name, cart);
    };
};

export { Store }