import { types } from "../data.js";
import { Person } from './Person.js';
import { Money } from "./helper/Money.js";

class Treasure extends Person {
    constructor(name, digital) {
        super(name);

        const bills = new Map();
        const coins = new Map();
        
        this.bills = bills;
        this.coins = coins;
        this.digital = digital || 0;

        delete this.balance;

        for (const type of types) {
            const money = new Money(type);

            type > 1? 
                this.bills.set(type, money) :
                this.coins.set(type, money) ;
        };
    };

    get(type) {
        const that = this;
        const { bills } = this;
        const { coins } = this;
        const start = { add, sub };

        var money = 
         bills.get(type) ||
         coins.get(type);

        if (!money)
        throw new Error(`${type} doesn't exist`);

        function add($) {
            money.add($);
            that.digital -= money.type * $;
        };

        function sub($) {
            money.sub($);
            that.digital += money.type * $;
        };

        return start;
    };

    digitalize() {

    };

    get physical() {
        const { bills } = this;
        const { coins } = this;

        let value = 0;

        for (const [ type, money ] of bills) 
            value += money.total;

        for (const [ type, money ] of coins) 
            value += money.total;

        return value;
    };

    get balance() {
        return this.digital + this.physical;
    };

    set balance(amount) {
        return this.digital = amount;
    };
};

export { Treasure }