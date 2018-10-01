import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

export const has = (numbers, num) => {
  if (isEmpty(numbers) === false) {
    if (head(numbers) === num) {
      return true;
    }
    return has(tail(numbers), num);
  }
  return false;
};

export const reverse = (numbers) => {
  let acc = l(); console.log(`${acc} acc`);

  const iter = (numbers) => {
    if (isEmpty(numbers) === false) {
      acc = cons(head(numbers), acc);
      console.log(`${acc} acc`);
      return iter(tail(numbers));
    }
    return acc;
  };
  return iter(numbers);
};

export const concat = (numbers, numbers2) => {
  const recurs = (n) => {
    if (isEmpty(n) === true) {
      return numbers2;
    }
    return cons(head(n), recurs(tail(n)));
  };
  return recurs(numbers);
};
