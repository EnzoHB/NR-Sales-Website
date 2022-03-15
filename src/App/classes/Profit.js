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
            this.products.set(item.name, 
            this.products.get(item.name) ||

                {
                    name: item.name,
                    price: item.price
                }
            );
        };
    };

    receipt(receipt) {
        this.sales.set(receipt.name, receipt.build());
    };
};

export { Profit };