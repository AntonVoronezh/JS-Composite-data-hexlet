import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
const sumOfPairs = (pair1, pair2) => cons(car(pair1) + car(pair2), cdr(pair1) + cdr(pair2));
// END
export default sumOfPairs;

///////////////////////////////////////////

import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
const reversePair = (pair) => cons(cdr(pair), car(pair));
// END
export default reversePair;

//////////////////////////////////

import { car, cdr, isPair, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
const findPrimitiveBox = pair => { 
let out = pair;

if (isPair(car(out)) === true) {out = findPrimitiveBox(car(out));}
if (isPair(cdr(out)) === true) {out = findPrimitiveBox(cdr(out));} 

return out;   
}
//
// END
