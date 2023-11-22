function combine001(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges001 = combine001(30, 26);
console.log(combineAges001); // 56

const combineNames001 = combine001('Ben', 'Simon');
console.log(combineNames001); // BenSimon

const combineMix001 = combine001('Ben', 99);
console.log(combineMix001); // Ben99

const combineMix2001 = combine001(1024, 'Amy');
console.log(combineMix2001); // 1024Amy
