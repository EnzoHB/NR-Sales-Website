import { unstable_composeClasses } from '@mui/material';
import { nanoid } from 'nanoid';

// Store Receipt
// Profit Receipt


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

class StoreReceipt {
    constructor(name, note) {
        this.id = nanoid();
        this.name = name;
        this.note = note;
        this.total = 0;
        this.tax = 0;
        this.items = [];
    };

    item(name) {
        return {
            price: price => ({
                amount: amount => this.items.push({ name, price, amount })
            })
        };
    };

    build() {
        return (
            this.total += 
            this.items.reduce((acc, { price, amount}) => acc += price * amount, this.tax),
            this
        );
    };
};

class ProfitReceipt {
    constructor(name, note) {
        this.name = name;
        this.note = note;
        this.total = 0;
        this.sales = 0;
        this.pendent = 0;

        this.items = new Map();
        this.cuffs = new Map();
    };

    item(name) {
        return {
            price: price => ({
                amount: amount => this.items.set(name, { name, price, amount })
            })
        };
    };

    cuff(item) {
        return {
            from: from => ({
                amount: amount => ({
                    payed: payed => this.cuffs.set(from, { item, from, amount, payed })
                })
            })
        };
    };

    build() {

        // Validating Cuffs and Items
        this.cuffs.forEach(cuff => { 
            if (!this.items.has(cuff.item))
                throw new Error(`${cuff.item} was not defined as an available item`)  
        })

        // --------------------------- //

        var items = Array.from(this.items.values());
        var cuffs = Array.from(this.cuffs.values());

        this.sales = items.reduce((acc, { price, amount }) => acc += price * amount, 0);
        this.pendent = cuffs.reduce((acc, { item, amount, payed }) => {

            if (payed) return acc;
            var pendent = this.items.get(item).price * amount;

            this.sales -= Number(pendent); 
            return acc += Number(pendent);

        }, 0);
        
        return (

            this.items = items,
            this.cuffs = cuffs,

            this.total = 
            this.sales +
            this.pendent,

            this
        );
    };
};

export { Receipt, StoreReceipt, ProfitReceipt };