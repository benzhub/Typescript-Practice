function add001(n1: number, n2: number) {
  if(typeof n1 !== 'number' || typeof n2 !== 'number'){
      throw new Error('Incorrect input!')
  }
  return n1 + n2;
}

const number001 = 5;
const number002 = 2;
const result001 = add001(number001, number002);
console.log(result001); // 7
