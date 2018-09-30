export const car = (num) => {
    if (num === 1) {
      return 0;
   } else {
  let count = 0;
  let acc = num;
  
    const f = acc => {
      count += 1;
      acc = acc / 2;
      return acc % 2 === 0 ? f(acc) : count;
      //console.log(acc);
      }
    return f(acc);
   }
  };
  
  export const cdr = num => {
    if (num === 1) {
      return 0;
      } else {
        let count = 0;
        let acc = num / 2 ** car(num);
        const f = acc => {
            count += 1;
            acc = acc / 3;
            return acc % 3 === 0 ? f(acc) : count;
            }
        return f(acc);
      }
  }
  
  export const cons = (x, y) => x === 0 && y === 0 ? 1: (2 ** x) * (3 ** y);
  