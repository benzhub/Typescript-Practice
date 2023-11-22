function combine008(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges008 = combine008(30, 26);
console.log(combineAges008); // 56

const combineNames008 = combine008('Ben', 'Simon');
console.log(combineNames008); // BenSimon

const combineMix008 = combine008('Ben', 99);
console.log(combineMix008); // Ben99

const combineMix0082 = combine008(1024, 'Amy');
console.log(combineMix0082); // 1024Amy
