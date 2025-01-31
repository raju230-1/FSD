
const symbol1 = Symbol('uniqueSymbol');
const symbol2 = Symbol('uniqueSymbol');
const obj = {
  [symbol1]: 'Value associated with symbol1',
  [symbol2]: 'Value associated with symbol2'
};
console.log(obj[symbol1]); 
console.log(obj[symbol2]);
console.log(symbol1 === symbol2); 
