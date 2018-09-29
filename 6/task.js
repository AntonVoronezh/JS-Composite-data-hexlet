import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

export const make = (x, y) => cons(x, y);
export const numer = f => car(f);
export const denom = f => cdr(f);
export const toString = f => `${numer(f)} / ${denom(f)}`;
export const isEqual = (x, y) => (numer(x) * denom(y) === numer(y) * denom(x) ? true : false);
export const add = (x, y) => make((numer(x) * denom(y) + numer(y) * denom(x)), (denom(x) * denom(y)));
export const sub = (x, y) => make((numer(x) * denom(y) - numer(y) * denom(x)), (denom(x) * denom(y)));
export const mul = (x, y) => make((numer(x) * numer(y)), (denom(x) * denom(y)));
export const div = (x, y) => make((numer(x) * denom(y)), (numer(y) * denom(x)));
