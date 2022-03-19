import { Person } from "../classes/Person.js";
import { Store } from "../classes/Store.js";
import { ProfitReceipt, StoreReceipt } from '../classes/helper/Receipt.js';
import { Profit } from "../classes/Profit.js";
import { LedgerEntry as Entry} from '../classes/helper/Entry.js'

class Ledger {
    constructor(name) {
        this.name = name;
        this.members = new Map;
        this.history = [];
    };

    add(...members) {
        members.forEach(member => this.members.set(member.name, member))
    };

    is(name, instance) { 
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
        const isMember = this.is.bind(this);
        
        isMember(name);

        // ---------------------------------------------- // 

        var subject = name;
        var target;
        var operation;
        var amount;
        var note;

        // ----------------------------- //

        const start = { to };
        const finish = { done, reason };
        const actions = { receive, donate, lend, pay } ;

        // ----------------------------- //

        function receive($) {
            operation = 'payment';
            subject = target;
            target = name;
            amount = $

            members.get(name).receive($);
            members.get(target).send($);

            return finish;

            // Caixa -- Receives from -- Enzo
            // Enzo -- pays -- Caixa
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
            var entry = new Entry({ subject, operation, target, amount, note });

            history.push(entry);
        };

        return start;
    }; 

    get stores() {

        const ledger = this;

        const {  members } = this;
        const {  history } = this;

        const _is = ledger.is.bind(this);
        const _get = members.get.bind(members);

        // ----------------------- //

        var member;
        var store;
        var receipt = new StoreReceipt();

        // ----------------------- //

        function get(name) {
            store = 
            _get(name);
            _is(name, Store); 
            return { buyer }
        };

        function buyer(name) {
            member = 
            _get(name);
            _is(name, Person); 
            return { cart }
        };

        function cart(name, note) {
            receipt.name = name;
            receipt.note = note;

            return { item }
        };

        function item(name) {
            var p;

            const amount = n => (receipt.item(name).price(p).amount(n), { item, pay, tax });
            const price = $ => (p = $, { amount });

            return { price };
        };

        function tax($) {
            receipt.tax = $;
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
        const {  history } = this;

        const _is = ledger.is.bind(this);
        const _get = members.get.bind(members);

        // ----------------------- //

        var member;
        var profit;
        var receipt = new ProfitReceipt();

        // ----------------------- //

        function get(name) {
            profit = 
            _get(name);
            _is(name, Profit); 
            return { seller }
        };

        function seller(name) {
            member = 
            _get(name);
            _is(name, Person); 
            return { sale }
        };

        function sale(name, note) {
            receipt.name = name;
            receipt.note = note;

            return { item }
        };

        function item(name) {
            var refs = {};

            function price($) {
                refs.price = $;
                return { amount };
            };

            function amount(n) {
                receipt.item(name).price(refs.price).amount(n);
                return { item, cuff, close };
            };

            function cuff(buyer) {
                var refs = {};

                function amount($) {
                    refs.amount = $;
                    return { payed }
                };

                function payed(p) {
                    receipt.cuff(name).from(buyer).amount(refs.amount).payed(p);
                    return { cuff, item };
                };

                return { amount };
            };

            return { price };
        };

        function close() {
            profit.receipt(receipt);
            profit.product(...receipt.items);
            ledger.get(member.name).to(profit.name).receive(receipt.total).reason(receipt);
        };

        return { get };
    };

    get fetch() {
    
        var some  = props => this.history.filter(entry => Object.entries(props).some (([key, filter]) => entry[key] === filter(entry, key)))
        var every = props => this.history.filter(entry => Object.entries(props).every(([key, filter]) => entry[key] === filter(entry, key)))

        return {
            some,
            every
        }
    };

    get profile() {
        const ledger = this;

        const {  members } = this;
        const {  history } = this;

        const _is = ledger.is.bind(ledger);
        const _get = members.get.bind(members);

        // --------- Closure Variables -------- //

        var member;
        var entries;

        // -------------------------- //

        const Profile = { entries, fetch, snapshots }
        const methods = { fetch, identity, snapshots }

        function get(name) {
            member = 
            _get(name); 
            _is(name);

            // ---- After ---- //

            entries = ledger.fetch.some({ 

                subject: () => member.name,
                target: () => member.name

            }).map(reference => {
                
                var entry =  Object.create(reference);
                var { subject, target, operation } = reference; 
                var { name } = member;

                entry.flow = 
                    subject === name? -1 :
                    target  === name?  1 : 0; 
 
                return entry;
            });

            return Profile;
        };

        function identity() {

        };

        function fetch() {
    
            var some  = props => entries.filter(entry => Object.entries(props).some (([key, filter]) => entry[key] === filter(entry, key)))
            var every = props => entries.filter(entry => Object.entries(props).every(([key, filter]) => entry[key] === filter(entry, key)))
        
            return {
                some,
                every
            }        
        };

        function snapshots() {
            var next;
            var done;

            var index = 0;
            var balance = 0;

            return () => {

                balance += 
                entries[index].flow * 
                entries[index].amount;

                next = { balance };
                index++;

                return { next, done }
            }
        };

        return { get }
    };
};

export { Ledger }