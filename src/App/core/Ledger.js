import { Person } from "../classes/Person.js";
import { Store } from "../classes/Store.js";
import { Entry } from "../classes/helper/Entry.js";
import { Receipt } from '../classes/helper/Receipt.js';
import { Profit } from "../classes/Profit.js";

class Ledger {
    constructor(name) {
        this.name = name;
        this.members = new Map;
        this.history = [];
    };

    add(...members) {
        members.forEach(member => this.members.set(member.name, member))
    };

    isMember(name, instance) { 
        if (!this.members.has(name))
        throw new Error(`${name} is not a ledger member`); 

        if (instance)

        if (!(this.members.get(name) instanceof instance))
        throw new Error(`${name} is not a instance of ${instance.name}`);
    };

    many(...names) {
        const that = this;

        // ------------ //

        let description;
        let operation;
        let targets;
        let amount;

        const finish = { done, reason };

        const receive = $ => ( amount = $, operation = 'receive', finish);
        const donate = $ => ( amount = $, operation = 'donate', finish);
        const lend = $ => ( amount = $, operation = 'lend', finish);
        const pay = $ => ( amount = $, operation = 'pay', finish);

        const start = { to };
        const actions = { receive, donate, lend, pay };

        function to(...names) {
            targets = names;
            return actions;
        };
        
        function reason(message) {
            description = message;
            done();
        };

        function done() {
            targets.forEach(target => {
                names.forEach(name => {
                    that.get(name).to(target)[operation](amount).reason(description);
                })
            });
        };

        return start;
    };

    get(name) {
        const {  members } = this;
        const {  history } = this;
        const isMember = this.isMember.bind(this);
        
        isMember(name);

        // ---------------------------------------------- // 

        var note;
        var operation;
        var target;
        var amount;

        // ----------------------------- //

        const start = { to };
        const finish = { done, reason };
        const actions = { receive, donate, lend, pay } ;

        // ----------------------------- //

        function receive($) {
            operation = 'receipt';
            amount = $

            members.get(name).receive($);
            members.get(target).send($);

            return finish;
        };
    
        function donate($){
            operation = 'donation';
            amount = $

            members.get(name).send($);
            members.get(target).receive($);

            return finish;
        };

        function lend($) {
            operation = 'lent';
            amount = $

            members.get(name).send($);
            members.get(target).receive($);

            return finish;
        };

        function pay($) {
            operation = 'payment';
            amount = $

            members.get(name).send($);
            members.get(target).receive($);

            return finish;
        };

        function to(name) {
            isMember(name); 
            target = name;
            return actions;
        };

        function reason(message) {
            note = message;
            done();
        };

        function done() {
            var subject = name;
            var entry = new Entry({ subject, operation, target, amount, note });

            history.push(entry);
        };

        return start;
    }; 

    get stores() {

        const ledger = this;
        const {  members } = this;
        const getMember = members.get.bind(members);
        const isMember = this.isMember.bind(this);

        // ----------------------- //

        var member;
        var store;
        var receipt = new Receipt();

        // ----------------------- //

        function get(name) {
            store = 
            getMember(name);
            isMember(name, Store); 
            return { buyer }
        };

        function buyer(name) {
            member = 
            getMember(name); 
            isMember(name, Person);
            return { cart }
        };

        function cart(name, note) {
            receipt.name = name;
            receipt.note = note;

            return { item }
        };

        function item(name) {
            var p;

            const amount = n => (receipt.item(name).price(p).amount(n).add(), { item, pay, tax });
            const price = $ => (p = $, { amount });

            return { price };
        };

        function tax($) {
            receipt.tax = $;
            receipt.total += $;
            return { pay }
        };

        function pay() {
            store.receipt(receipt);
            store.product(...receipt.items);
            ledger.get(member.name).to(store.name).pay(receipt.total).reason(receipt);
        };

        return { get };
    };

    get profit() {

        const ledger = this;
        const {  members } = this;
        const getMember = members.get.bind(members);
        const isMember = this.isMember.bind(this);

        // ----------------------- //

        var member;
        var profit;
        var receipt = new Receipt();

        // ----------------------- //

        function get(name) {
            profit = 
            getMember(name);
            isMember(name, Profit); 
            return { seller }
        };

        function seller(name) {
            member = 
            getMember(name); 
            isMember(name, Person);
            return { sale }
        };

        function sale(name, note) {
            receipt.name = name;
            receipt.note = note;

            return { item }
        };

        function item(name) {
            var p;

            const amount = n => (receipt.item(name).price(p).amount(n).add(), { item, close });
            const price = $ => (p = $, { amount });

            return { price };
        };

        function close() {
            profit.receipt(receipt);
            profit.product(...receipt.items);
            ledger.get(member.name).to(profit.name).receive(receipt.total).reason(receipt);
        };

        return { get };
    };
};

export { Ledger }