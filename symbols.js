//Symbols
// Symbol is primitive type, and its completely unique 
//Symbols cant be equals to each others

const symbol1 =  Symbol('subaru');
const symbol2 =  Symbol('subaru');

console.log(symbol1, typeof symbol1);
console.log(symbol2, typeof symbol2);

console.log(symbol1 === symbol2);

const car1 = {};

car1.hps = 300;
car1['brand'] = 'subaru';
// This one will overwrite the brand property
car1['brand'] = 'bmw';

car1[symbol1] = 'subaru';
car1[symbol2] = 'subaru';

console.log(car1);