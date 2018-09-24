import { makePoint, getX, getY } from 'hexlet-points'; // eslint-disable-line

// BEGIN (write your solution here)
export const getQuadrant = point => {
  //console.log(getX(point), getY(point));
let x = getX(point);
let y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;   
  } 
  return null;
}

 export const getSymmetricalPoint = point => {
   return  makePoint(-getX(point), -getY(point));
}    

export const calculateDistance = (point1, point2) => {

let x1 = getX(point1);
let y1 = getY(point1);
let x2 = getX(point2);
let y2 = getY(point2);

return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// END
