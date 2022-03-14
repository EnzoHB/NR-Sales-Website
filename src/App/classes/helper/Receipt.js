import { nanoid } from 'nanoid';

class Receipt {
    constructor(name, note) {
        this.id = nanoid();
        this.name = name;
        this.note = note;
        this.total = 0;
        this.tax = 0;
        this.items = [];
    };

    item(name) {
        var that = this;
        var p;
        var a;

        const amount = n => (a = n, { add }); 
        const price = $ => (p = $, { amount });

        function add() {

            let price = p;
            let amount = a;

            that.items.push({ name, price, amount });
            that.total = that.items.reduce((value, { price, amount }) => value += price * amount, that.tax); 

            return that; 
        };

        return { price };
    };
};

export { Receipt };