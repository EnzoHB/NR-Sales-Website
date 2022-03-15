import { types } from "../data.js";
import { Person } from './Person.js';
import { Counter } from "./helper/Counter.js";
import { TreasureEntry as Entry } from './helper/Entry.js';

class Treasure extends Person {
    constructor(name, digital = 0) {
        super(name);

        this.locker = new Map();
        this.digital = digital;
        this.history = [];

        delete this.balance;

        for (const type of types) 
            this.locker.set( type, new Counter( type ));
    };

    get(type) {
        const that = this;
        const start = { add, sub };

        var counter = this.locker.get(type);

        if (!counter)
        throw new Error(`${type} doesn't exist`);

        function add($) {
            counter.add($);
            that.digital -= counter.value * $;
        };

        function sub($) {
            counter.sub($);
            that.digital += counter.value * $;
        };

        return start;
    };

    get physical() {
        var value = 0;

        for (const [ type, counter ] of this.locker) 
            value += counter.value * counter.count;

        return value;
    };

    get balance() {
        return this.digital + this.physical;
    };

    set balance(amount) {
        return this.digital = amount;
    };

    put(reason) {
        var that = this;
        var entry = new Entry(reason);
        var save = () => this.history.push ( entry.build() );

        function type(t) {
            return {
                amount: a => {
                    that.get(t).add(a);
                    entry.type(t).amount(a);

                    return { type, save }
                }
            };
        };

        return { type };
    };

    take(reason) {
        var that = this;
        var entry = new Entry(reason);
        var save = () => this.history.push ( entry.build() );

        function type(t) {
            return {
                amount: a => {
                    that.get(t).sub(a);
                    entry.type(t).amount(a);

                    return { type, save }
                }
            };
        };

        function wipe() {
            var buffer = that.take(reason)
            
            for (const type of types) 
                buffer = buffer.type(type).amount(that.locker.get(type).count)
                buffer.save();
        };

        return { type, wipe };
    };
};

export { Treasure }