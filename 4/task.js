// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeRectangle = (start, width, height) => cons(start, makePoint(width, height));
const rectangle = makeRectangle(makePoint(0, 1), 5, 4); //
export const getStartPoint = rectangle => getX(rectangle);
export const getWidth = rectangle => car(getY(rectangle));
export const getHeight = rectangle => cdr(getY(rectangle));
export const square = rectangle => getWidth(rectangle) * getHeight(rectangle);
export const perimeter = rectangle => (getWidth(rectangle) + getHeight(rectangle)) * 2;

export const containsTheOrigin = rectangle => {
  let pravNizWidth = car(getStartPoint(rectangle)) + getWidth(rectangle);
  let pravNizHeight = cdr(getStartPoint(rectangle)) - getHeight(rectangle); 
  let pravNiz = makePoint(pravNizWidth, pravNizHeight);
  const difference = quadrant(getStartPoint(rectangle)) === 2 && quadrant(pravNiz) === 4 ? true : false;
  return difference;
}
