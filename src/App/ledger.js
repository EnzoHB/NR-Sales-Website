import { ledger, treasure, donations, magic } from "./init.js";
import { names } from './data.js'
import { nanoid } from 'nanoid'

// ----------------- Transaction history Management ------------------------ //

ledger.many(...names.students).to('Doações').donate(10).reason('Everyone donates R$ 10,00 to the initial investment')
ledger.get('Doações').to('Caixa').donate(110).reason('Doações collected its first investment and now is gonna use it to buy ingredients for the production');
ledger.get('João Pedro').to('Caixa').donate(6).reason('Donated R$ 6,00 out of his kindness');
ledger.stores.get('Supermercado São Luís').buyer('Caixa').cart('Ingredients').item('Leite Ninho (380g)').price(17.99).amount(1).item('Leite Condensado (295g)').price(7.49).amount(3).item('Creme de Leite (300g)').price(7.99).amount(4).item('Leite (1L)').price(4.99).amount(5).item('Liga Neutra (100g)').price(5.99).amount(1).item('Granulado (750g)').price(9.99).amount(1).pay();
ledger.get('Luísa').to('Caixa').lend(60).reason('Luísa lent the money to buy fruit juice');
ledger.stores.get('Serv Festas').buyer('Caixa').cart('Fruit Juice').item('Suco de Morango (2L)').price(15).amount(3).item('Groselha').price(7.5).amount(2).pay();
ledger.get('João Lucas').to('Caixa').lend(20).reason(`The ingredients bought weren't enough. Enzo is going to the supermaket to buy more`);
ledger.get('Enzo').to('Caixa').lend(13).reason('Helping with more ingredients');
ledger.stores.get('Supermercado São Luís').buyer('Caixa').cart('Buying more ingredients').item('Leite Condensado (295g)').price(7.49).amount(1).item('Creme de Leite (300g)').price(7.99).amount(1).item('Leite (1L)').price(4.99).amount(3).pay()
ledger.profit.get('Juju').seller('Caixa').sale('Vendas de Juju').item('Chocolate').price(3).amount(70).item('Leite Ninho').price(3).amount(26).item('Groselha').price(2).amount(37).item('Morango').price(2).amount(78).close()
ledger.get('Caixa').to('João Lucas').pay(20).reason('Money lending of R$20');
ledger.get('Caixa').to('Enzo').pay(10).reason('Money lending of R$13');
ledger.get('Caixa').to('Luísa').pay(60).reason('Money lending of R$60');
ledger.many('João Lucas', 'Enzo', 'Julia', 'Eduardo', `Luísa`, 'Rian').to('Doações').donate(10).reason('Everyone donates R$ 10,00 to the second investment')
ledger.get('Doações').to('Caixa').donate(60).reason(`Everyone should have donated R$ 10,00 for the second investment, but some of them didn't. They include: João Pedro, Igor, Otto, Miguel, e Brandão`)
ledger.get('João Lucas').to('Caixa').lend(57).reason('Buying cash register. Payment Date: 18/03');
ledger.stores.get('Mercado Livre').buyer('Caixa').cart('Purchase of the cash register').item('Caixa Registradora').price(57).amount(1).pay();
ledger.get('Julia').to('Caixa').lend(69).reason('Banners and A4 Plastifications. Payment Date 18:03');
ledger.stores.get('Papelaria Criativa').buyer('Caixa').cart('Impressions and Plastifications').item('Impressão A3 Colorida').price(2.5).amount(6).item('Impressão A4 Colorida').price(1).amount(15).item('Plastificação A3').price(6).amount(6).item('Plastificação A4').price(3).amount(1).pay();

// 10/03
ledger.get('Enzo').to('Caixa').lend(224.5).reason('The money needed to buy the pizzas')

// 11 / 03
ledger.stores.get('Pizzaria Specialle').buyer('Caixa').cart('Purchase of the products').item('Presunto e Queijo').price(2).amount(350).pay();
ledger.get('Enzo').to('Caixa').lend(50).reason('Purchase of nakpins and change. Payment Date');
ledger.stores.get('Papelaria Central').buyer('Caixa').cart('Purchase of of extra material').item('Tesoura').price(4.5).amount(1).item('Fita Adesiva').price(8.6).amount(1).item('Lápis').price(1.7).amount(1).item('Bloquinho de Notas').price(1.5).amount(1).pay();
ledger.stores.get('Supermercado São Luís').buyer('Caixa').cart('Purchase of napkins').item('Guardanapos').price(3.99).amount(9).pay();
ledger.get('Luísa').to('Caixa').lend(50).reason('Lending the money for those purchases')
ledger.get('Caixa').to('Enzo').pay(50).reason('He couldn\'t pay for everything as he had already lent the money for the purchase of the pizzas')
ledger.get('Enzo').to('Caixa').donate(13.55).reason('Donating coins for extra change as we are gonna need for the sales on march 14th')
//ledger.get('Enzo').to('Caixa').lend(200).reason('Purchase and transportation of the minipizzas');
//ledger.get('Luísa').to('Caixa').lend(60).reason('Napkins and change. Payment Date: 18/03');
//ledger.get('Enzo').to('Caixa').lend(200).reason('Purchase and transportation of the minipizzas');

// 'João Lucas', 'Enzo', 'Julia', 'Eduardo'
// ----------------- Physical Money Management ------------------------ //

// Frist sale

treasure.get(10.00).add(11);
treasure.get(5.000).add(18);
treasure.get(2.000).add(83);

treasure.get(1.000).add(48);
treasure.get(0.500).add(35);
treasure.get(0.250).add(5);
treasure.get(0.100).add(14);
treasure.get(0.050).add(0);
treasure.get(0.010).add(0);

// Donation
treasure.get(10.00).add(3);

// Compra das pizzas
treasure.get(10.00).sub(11);
treasure.get(5.000).sub(18);
treasure.get(2.000).sub(83);
treasure.get(1.000).sub(48);
treasure.get(0.500).sub(35);
treasure.get(0.250).sub(5);
treasure.get(0.100).sub(14);
treasure.get(0.050).sub(0);
treasure.get(0.010).sub(0);
treasure.get(10.00).sub(3);

// Donation
treasure.get(1.000).add(5);
treasure.get(0.500).add(12);
treasure.get(0.250).add(5);
treasure.get(0.100).add(11);
treasure.get(0.050).add(4);
treasure.get(0.010).add(0);


export { ledger, donations, treasure }
// Second donation

console.dir(ledger, { depth: 10 })
console.log(nanoid())


//console.d(donations)