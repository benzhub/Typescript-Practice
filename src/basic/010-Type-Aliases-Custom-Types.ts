type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (resultConversion === 'as-number') {
    result = +input1 + +input2;
    if (Number.isNaN(result))
      throw new Error('String counld not convert to Number');
    return result;
  } else {
    return input1.toString() + input2.toString();
  }
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges); // 56

const combinedStringAges1 = combine('100', '1', 'as-number');
console.log(combinedStringAges1); // 101
const combinedStringAges2 = combine('100', 2, 'as-number');
console.log(combinedStringAges2); // 102
const combinedStringAges3 = combine(100, '3', 'as-number');
console.log(combinedStringAges3); // 103

const combineNames = combine('Josh', 'Adam', 'as-text');
console.log(combineNames); // JoshAdam

const combineNumtoStr1 = combine(100, 1, 'as-text');
console.log(combineNumtoStr1); // 101

const combineNumtoStr2 = combine(100, '2', 'as-text');
console.log(combineNumtoStr2); // 102

const combineNumtoStr3 = combine('100', 3, 'as-text');
console.log(combineNumtoStr3); // 103

// const combineStrtoNum1 = combine('Josh', 'Adam', 'as-number');
// console.log(combineStrtoNum1); // Uncaught Error: Your input counld not convert to Number

// const combineStrtoNum2 = combine(123, 'Adam', 'as-number');
// console.log(combineStrtoNum2); // Uncaught Error: Your input counld not convert to Number

// const combineStrtoNum3 = combine('Josh', 456, 'as-number');
// console.log(combineStrtoNum3); // Uncaught Error: Your input counld not convert to Number

export {};