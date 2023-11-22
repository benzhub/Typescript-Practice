function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26);
console.log(combineAges); // 56

const combineNames = combine('Ben', 'Simon');
console.log(combineNames); // BenSimon

const combineMix = combine('Ben', 99);
console.log(combineMix); // Ben99

const combineMix2 = combine(1024, 'Amy');
console.log(combineMix2); // 1024Amy

export {};