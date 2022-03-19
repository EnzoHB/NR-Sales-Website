import { ledger, treasure, donations, magic } from "./init.js";
// import { memoryUsage, cpuUsage } from 'process';
import { names } from './data.js'

// const startUsage = cpuUsage();

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
ledger.many(...names.students).to('Doações').donate(10).reason('Everyone donates R$ 10,00 to the second investment')
ledger.get('Doações').to('Caixa').donate(110).reason(`Everyone has donated R$ 10,00 for the second investment`)
ledger.get('João Lucas').to('Caixa').lend(57).reason('Buying cash register. Payment Date: 18/03');
ledger.stores.get('Mercado Livre').buyer('Caixa').cart('Purchase of the cash register').item('Caixa Registradora').price(57).amount(1).pay();
ledger.get('Julia').to('Caixa').lend(69).reason('Banners and A4 Plastifications. Payment Date 18:03');
ledger.stores.get('Papelaria Criativa').buyer('Caixa').cart('Impressions and Plastifications').item('Impressão A3 Colorida').price(2.5).amount(6).item('Impressão A4 Colorida').price(1).amount(15).item('Plastificação A3').price(6).amount(6).item('Plastificação A4').price(3).amount(1).pay();
ledger.get('Enzo').to('Caixa').lend(250).reason('The money needed to buy the pizzas')
ledger.stores.get('Pizzaria Specialle').buyer('Caixa').cart('Purchase of the products').item('Presunto e Queijo').price(2).amount(350).tax(5.5).pay()
ledger.get('Enzo').to('Caixa').lend(50).reason('Purchase of nakpins and change. Payment Date');
ledger.stores.get('Papelaria Central').buyer('Caixa').cart('Purchase of of extra material').item('Tesoura').price(4.5).amount(1).item('Fita Adesiva').price(8.6).amount(1).item('Lápis').price(1.7).amount(1).item('Bloquinho de Notas').price(1.5).amount(1).pay();
ledger.stores.get('Supermercado São Luís').buyer('Caixa').cart('Purchase of napkins').item('Guardanapos').price(3.99).amount(9).pay();
ledger.get('Luísa').to('Caixa').lend(50).reason('Lending the money for those purchases')
ledger.get('Caixa').to('Enzo').pay(50).reason('He couldn\'t pay for everything as he had already lent the money for the purchase of the pizzas')
ledger.get('Enzo').to('Caixa').donate(13.55).reason('Donating coins for extra change as we are gonna need for the sales on march 14th')

ledger.profit.get('Minipizza').seller('Caixa').sale('Venda de Minipizzas')
.item('Minipizza').price(5).amount(350)
.cuff('Otto').amount(6).payed(true)
.cuff('Miguel').amount(2).payed(false) // false
.cuff('Julia').amount(3).payed(true)
.cuff('Enzo').amount(8).payed(true)
.cuff('João Lucas').amount(12).payed(true)
.cuff('Brandão').amount(1).payed(false) // false
.cuff('Sérgio').amount(4).payed(true)
.cuff('Tati').amount(6).payed(false) // false
.cuff('Cíntia').amount(1).payed(false) // false
.cuff('David').amount(2).payed(true)
.cuff('Vanessa').amount(4).payed(true)
.cuff('Ana Laura').amount(1).payed(false) // false
.cuff('Ravi').amount(2).payed(true)
.item('Sobra').price(-5).amount(38).close();

ledger.stores.get('Sorveteria Barufi').buyer('Caixa').cart('Compra dos Sorvetes')
.item('Chocolate').price(0.95).amount(24 * ( 10 - 5) + 12)
.item('Morango').price(0.95).amount(24 * ( 7 - 1) + 22)
.item('Limão').price(0.85).amount(24 * ( 7 - 3) + 12)
.item('Flocos').price(0.95).amount(24 * ( 7 - 4) + 22).pay();

ledger.profit.get('Sorvete').seller('Caixa').sale('Venda de Sorvetes')
.item('Chocolate').price(3).amount(24 * ( 10 - 5) + 12)
.item('Morango').price(2).amount(24 * ( 10 - 1) + 22)
.item('Limão').price(2).amount(24 * ( 10 - 3) + 12)
.item('Flocos').price(3).amount(24 * ( 10 - 4) + 22)

.item('Cuffs on R$ 3,00').price(3).amount(0)

.cuff('Enzo').amount(3).payed(false)
.cuff('Julia').amount(1).payed(false)
.cuff('João Lucas').amount(2).payed(false)
.cuff('Eduardo').amount(1).payed(false)
.cuff('Luísa').amount(1).payed(false)
.cuff('Otto').amount(1).payed(false)
.cuff('Igor').amount(1).payed(false)
.cuff('Lilian').amount(2).payed(false)
.cuff('Luísa 8º').amount(1).payed(false)
.cuff('Lucas 7º').amount(1).payed(false)
.cuff('Eduardo 1º').amount(1).payed(false)
.cuff('Isadora 9º').amount(1).payed(false)
.cuff('Noah').amount(1).payed(false)

.item('Cuffs on R$ 2,00').price(2).amount(0)

.cuff('Julia').amount(2).payed(false)
.cuff('João Lucas').amount(1).payed(false)
.cuff('Luísa').amount(1).payed(false)
.cuff('Luísa 8º').amount(1).payed(false)
.cuff('João Miguel').amount(1).payed(false)
.cuff('Theo Maternal').amount(1).payed(false)
.cuff('Rodrigo').amount(1).payed(false)
.cuff('Gabriela').amount(1).payed(false)
.cuff('João Miguel').amount(1).payed(false)
.cuff('Lucas 7º').amount(1).payed(false)
.cuff('João Gabriel 9º').amount(1).payed(false)
.cuff('Ravi').amount(1).payed(false)
.cuff('Lucas 9º').amount(2).payed(false)
.cuff('Isadora 9º').amount(1).payed(false)
.cuff('Rafael').amount(1).payed(false).close()


//ledger.get('Caixa').to('Enzo').pay(250).reason('Money lent of R$ 250')
//ledger.get('Caixa').to('Luísa').pay(50).reason('Money lent of R$ 50')
//ledger.get('Caixa').to('Julia').pay(69).reason('Money lent of R$ 69')
//ledger.get('Julia').to('Pay').pay(69).reason('Money lent of R$ 69')
//ledger.get('Caixa').to('João Lucas').pay(57).reason('Money lent of R$ 57');

// ----------------- Physical Money Management ------------------------ //

treasure.put('Vendas do Juju').type(10).amount(10).type(5).amount(18).type(2).amount(83).type(1).amount(48).type(0.5).amount(35).type(0.25).amount(5).type(0.1).amount(14).save()
treasure.put('Segundo Investimento (1)').type(10).amount(3).save();
treasure.take('Compra das Minipizzas').wipe();
treasure.put('Doação do Otto').type(5).amount(2).save();
treasure.put('Vendas das Minipizzas').type(50).amount(5).type(20).amount(8).type(10).amount(31).type(5).amount(60).type(2).amount(58).type(1).amount(26).type(0.5).amount(33).type(0.25).amount(25).type(0.1).amount(19).type(0.05).amount(7).save()
treasure.put('Marcações das Minipizzas')
.type(20).amount(3)
.type(10).amount(3)
.type(1).amount(6)
.type(2).amount(6)
.type(5).amount(6)
.type(2).amount(2)
.type(10).amount(7)
.save();

treasure.take('Esqueci quantas notas tinham anteriormente').wipe();
treasure.put('Venda dos sorvetes')
.type(50).amount(7)
.type(20).amount(18)
.type(10).amount(42)
.type(5).amount(106)
.type(2).amount(138)
.type(1).amount(71)
.type(0.5).amount(72)
.type(0.25).amount(55)
.type(0.1).amount(21)
.type(0.05).amount(7)
.save();


export { ledger, treasure }

// 110.60

console.log(`
Treasure
- Balance: ${treasure.balance}
- Digital: ${treasure.digital}
- Physical ${treasure.physical}
`)

console.log(treasure)
console.dir(ledger, { depth: 20 });
// console.log(Object.fromEntries(Object.entries(memoryUsage(       )).map(([key, value]) => [key, `${((value / 1024 / 1024)).toPrecision(2)} MB`])));
// console.log(Object.fromEntries(Object.entries(cpuUsage(startUsage)).map(([key, value]) => [key, `${((value / 1000       )).toPrecision(2)}s`])))

//console.d(donations)