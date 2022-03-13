import { names } from "./data.js";
import { Ledger } from "./core/Ledger.js"
import { Person } from "./classes/Person.js";
import { Profit } from "./classes/Profit.js"
import { Store } from "./classes/Store.js"
import { Treasure } from "./classes/Treasure.js"

// Ledgers
const ledger = new Ledger('Vendas 1º médio');
const donations = new Ledger('Donation Management');

// Main Members 
const treasure = new Treasure('Caixa');
const donation = new Person('Doações');
const magic = new Profit('Magia');

// Other members 
const storify = name => new Store(name);
const profitify = name => new Profit(name);
const personify = name => new Person(name);

const stores = names.stores.map(storify);
const students = names.students.map(personify);
const profits = names.profits.map(profitify);

// Adding to the ledger
ledger.add(treasure);
ledger.add(donation);
ledger.add(magic)
ledger.add(...students);
ledger.add(...profits);
ledger.add(...stores);

// Adding to the ledger
donations.add(donation);
donations.add(...students);

export { ledger, donations, treasure, magic };