import {
    makePoint, getX, getY, toString as pointToString,
  } from 'hexlet-points';
  import { cons, car, cdr } from 'hexlet-pairs';
  
  // BEGIN (write your solution here)
  export const makeSegment = (point1, point2) => cons(point1, point2);
  
  const segment = makeSegment(makePoint(1, 2), makePoint(-4, -2));
  
  export const startSegment = segment => getX(segment);
  
  export const endSegment = segment => getY(segment);
  
  export const segmentToString = segment => '[' + pointToString(car(segment)) + ', ' + pointToString(cdr(segment)) + ']'; 
  
  export const midpointSegment = segment => {
    const f = (car(getX(segment)) + car(getY(segment))) / 2; 
    const f2 = (cdr(getX(segment)) + cdr(getY(segment))) / 2; 
    return makePoint(f, f2);   
  } 
  // END
  