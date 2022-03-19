const types = [ 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01];
const students = ['Enzo', 'João Lucas', 'João Pedro', 'Rian', 'Brandão', 'Otto', 'Julia', 'Luísa', 'Igor', 'Miguel', 'Eduardo'];
const stores = ['Pizzaria Specialle', 'Supermercado São Luís', 'Mercado Livre', 'Serv Festas', 'Papelaria Criativa', 'Papelaria Central', 'Sorveteria Barufi'];
const profits = ['Juju', 'Minipizza', 'Sorvete'];
const error = 'Operation not allowed';
const notdesc = 'This product does not have a description';

// Wrapper
const names = { students, stores, profits };

export { types, names, error, notdesc };