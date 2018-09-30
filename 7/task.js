export const car = (num) => {
    if (num === 1) {
      return 0;
    }
    let count = 0;
    const acc = num;
  
    const f = (acc) => {
      count += 1;
      acc /= 2;
      return acc % 2 === 0 ? f(acc) : count;
    };
    return f(acc);
  };
  
  export const cdr = (num) => {
    if (num === 1) {
      return 0;
    }
    let count = 0;
    const acc = num / 2 ** car(num);
    const f = (acc) => {
      count += 1;
      acc /= 3;
      return acc % 3 === 0 ? f(acc) : count;
    };
    return f(acc);
  };
  
  export const cons = (x, y) => (x === 0 && y === 0 ? 1 : (2 ** x) * (3 ** y));
  