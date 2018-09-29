export const cons = (x, y) => f => f(x, y);

const pair = cons(1, 2);
export const car = pair => pair((x, y) => x); 
export const cdr = pair => pair((x, y) => y); 
console.log(car);
