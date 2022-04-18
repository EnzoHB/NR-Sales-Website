import { Person } from "../classes/Person.js";
import { Store } from "../classes/Store.js";
import { ProfitReceipt, StoreReceipt } from '../classes/helper/Receipt.js';
import { Profit } from "../classes/Profit.js";
import { Profile } from "../classes/helper/Profile.js";
import { Transaction } from "../classes/helper/Transaction.js";
import { Funding } from "../classes/helper/Funding.js";

class Ledger {
    constructor(name) {
        this.name = name;
        this.members = new Map;
        this.pendent = new Map;
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

    transaction() {

<<<<<<< Updated upstream
        // ------------ //

        let description;
        let operation;
        let targets;
        let amount;

        const finish = { done, reason };

        const donate = $ => ( amount = $, operation = 'donate', finish);
        const lend = $ => ( amount = $, operation = 'lend', finish);
        const pay = $ => ( amount = $, operation = 'pay', finish);

        const start = { to };
        const actions = { donate, lend, pay };

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
        var note;
        var operation;
        var target;
        var amount;

        // ----------------------------- //

        const start = { to };
        const finish = { done, reason };
        const actions = { donate, lend, pay } ;

        // ----------------------------- //
    
        function donate($){
            operation = 'donation';
            amount = $
=======
        const ledger = this;
>>>>>>> Stashed changes

        const { members } = this;
        const { history } = this;
        const { pendent } = this;

        Transaction.init = transaction => {
            ledger.pendent.set(transaction.properties.id, transaction);
        };

        Transaction.done = transaction => {

            ledger.is(transaction.subject);
            ledger.is(transaction.target);

            members.get(transaction.subject).send(transaction.amount);
            members.get(transaction.target).receive(transaction.amount);

            pendent.delete(transaction.id);
            history.push(transaction); 

            return ledger;
        };

        return new Transaction;
    };

    funding() {

        let ledger = this;

        Funding.done = instance => {
            instance.subjects.forEach(subject => {
                ledger
                .transaction()
                    .subject(subject)
                    .target(instance.target)
                    .donate(instance.amount)
                    .note(instance.note)
                .build();
            })
        };

        return new Funding;
    };

    stores() {

        let ledger = this;

        StoreReceipt.done = instance => {

            ledger.is(instance.seller, Store);
            ledger.is(instance.buyer, Person);

            ledger.members.get(instance.seller).receipt(instance);
            ledger
            
            .transaction()
            
            .store(instance)

            .subject(instance.buyer)

            .target(instance.seller)

            .pay(instance.total)

            .note(instance.note)

            .build();
        };

        return new StoreReceipt;
    };

    profits() {

        let ledger = this;

        ProfitReceipt.done = instance => {

            ledger.is(instance.seller, Person);
            ledger.is(instance.provider, Profit);

            ledger.members.get(instance.provider).receipt(instance);
            ledger
            
            .transaction()
            
            .profit(instance)

            .subject(instance.provider)

            .target(instance.seller)

            .pay(instance.total)

            .note(instance.note)

<<<<<<< Updated upstream
        function close() {
            profit.receipt(receipt);
            profit.product(...receipt.items);
            ledger.get(profit.name).to(member.name).pay(receipt.total).reason(receipt);
=======
            .build();
>>>>>>> Stashed changes
        };

        return new ProfitReceipt;
    };

    fetch(entries = this.history) {
    
        var some  = props => entries.filter(entry => Object.entries(props).some (([key, filter]) => filter(entry[key], key, entry)));
        var every = props => entries.filter(entry => Object.entries(props).every(([key, filter]) => filter(entry[key], key, entry)));

        return {
            some,
            every
        }
    };
<<<<<<< Updated upstream

    get profile() {
        const ledger = this;

        const {  members } = this;
        const {  history } = this;

        // Cuffs
        // Lents
        // Donations
        // Payments
        // Items
        // Entries
        // Name

        const _is = ledger.is.bind(ledger);
        const _get = members.get.bind(members);

        // --------- Closure Variables -------- //

        var member;
        var entries;

        // -------------------------- //

        const Profile = { entries, fetch, snapshots };

        function get(name) {
            member = 
            _get(name); 
            _is(name);

            // ---- After ---- //

            fetchInformation();

            return Profile;
        };

        function fetchInformation() {
            entries = ledger.fetch.some({ 

                subject: () => member.name,
                target: () => member.name

            });
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
=======
>>>>>>> Stashed changes
};


// /\.?(\w+)\((()|(.+?))\)/g;
export { Ledger }