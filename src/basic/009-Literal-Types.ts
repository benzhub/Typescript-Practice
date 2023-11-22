function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
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

const combinedStringAges = combine('30', '28', 'as-number');
console.log(combinedStringAges); // 58

const combineNames = combine('Josh', 'Adam', 'as-text');
console.log(combineNames); // JoshAdam

const combineNumtoStr1 = combine(5, 18, 'as-text');
console.log(combineNumtoStr1); // 518

const combineNumtoStr2 = combine(5, '18', 'as-text');
console.log(combineNumtoStr2); // 518

const combineNumtoStr3 = combine('5', 18, 'as-text');
console.log(combineNumtoStr3); // 518

const combineStrtoNum1 = combine('Josh', 'Adam', 'as-number');
console.log(combineStrtoNum1); // Uncaught Error: Your input counld not convert to Number

const combineStrtoNum2 = combine(123, 'Adam', 'as-number');
console.log(combineStrtoNum2); // Uncaught Error: Your input counld not convert to Number

const combineStrtoNum3 = combine('Josh', 456, 'as-number');
console.log(combineStrtoNum3); // Uncaught Error: Your input counld not convert to Number

export {};