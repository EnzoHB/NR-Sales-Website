import Data from "./data.js";
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
const storify = ({ name }) => new Store(name);
const profitify = ({ name }) => new Profit(name);
const personify = ({ name }) => new Person(name);
const treasurify = ({ name }) => new Treasure(name);

const treasures = Data.treasures.map(treasurify);
const students = Data.inner.map(personify);
const profits = Data.profits.map(profitify);
const stores = Data.stores.map(storify);

// Adding to the ledger
ledger.add(...treasures);
ledger.add(donation);
ledger.add(magic)
ledger.add(...students);
ledger.add(...profits);
ledger.add(...stores);


export { ledger, treasures, magic };