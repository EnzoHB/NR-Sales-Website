import { writeFileSync } from 'fs';

const global = {};

const treasures = [
    'Registradora', 
    'Reserva', 
    'Nubank'
]; 

const inner = [
    'Enzo', 
    'João Lucas', 
    'João Pedro', 
    'Rian', 
    'Brandão', 
    'Otto', 
    'Julia', 
    'Luísa', 
    'Igor', 
    'Miguel', 
    'Eduardo'
];
const outer = [];

const stores = [
    'Pizzaria Specialle', 
    'Supermercado São Luís', 
    'Mercado Livre', 
    'Serv Festas', 
    'Papelaria Criativa', 
    'Papelaria Central', 
    'Sorveteria Barufi'
];

const profits = [
    'Juju', 
    'Minipizza', 
    'Sorvete'
];

const others = [];

// -------------- Constructing -------------------- //

const phone = null;
const email = null;
const photo = null;
const pix = null;
const classroom = null;
const address = null;

global.raw = { inner, outer, treasures, stores, profits, others };
global.inner = inner.map(name => ({ name, phone, email, photo, pix, classroom }));
global.outer = outer.map(name => ({ name, phone, email, photo, pix, classroom }));
global.treasures = treasures.map(name => ({ name, photo, pix }));
global.stores = stores.map(name => ({ name, phone, email, photo, pix, address }));
global.profits = profits.map(name => ({ name, photo }));
global.others = others.map(name => ({ name, phone, email, photo, pix  }));

writeFileSync('./src/App/data.js', `export default ${JSON.stringify(global)}`)
