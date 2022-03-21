import { names } from "./data.js";
import { Ledger } from "./core/Ledger.js"
import { Person } from "./classes/Person.js";
import { Profit } from "./classes/Profit.js"
import { Store } from "./classes/Store.js"
import { Treasure } from "./classes/Treasure.js"

// Ledgers
const ledger = new Ledger('Vendas 1º médio');

// Members
const donation = new Person('Doações');
const magic = new Profit('Magia');

// Other members 
const storify = name => new Store(name);
const profitify = name => new Profit(name);
const personify = name => new Person(name);
const treasurify = name => new Treasure(name);

const treasures = names.treasures.map(treasurify);
const students = names.students.map(personify);
const profits = names.profits.map(profitify);
const stores = names.stores.map(storify);

// Adding to the ledger
ledger.add(...treasures);
ledger.add(donation);
ledger.add(magic)
ledger.add(...students);
ledger.add(...profits);
ledger.add(...stores);

const treasure = ledger.members.get('Caixa');

export { ledger, treasure, magic };