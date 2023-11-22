function combine002(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (resultConversion === 'as-number') {
    result =  +input1 + +input2;
    if(Number.isNaN(result)) throw new Error("String counld not convert to Number")
    return result;
  } else {
    return input1.toString() + input2.toString();
  }
}

const combineAges002 = combine002(30, 26, 'as-number');
console.log(combineAges002); // 56

const combinedStringAges002 = combine002('30', '28', 'as-number');
console.log(combinedStringAges002); // 58

const combineNames002 = combine002('Josh', 'Adam', 'as-text');
console.log(combineNames002); // JoshAdam

const combineNumtoStr0021 = combine002(5, 18, 'as-text');
console.log(combineNumtoStr0021); // 518

const combineNumtoStr0022 = combine002(5, '18', 'as-text');
console.log(combineNumtoStr0022); // 518

const combineNumtoStr0023 = combine002('5', 18, 'as-text');
console.log(combineNumtoStr0023); // 518

const combineStrtoNum0021 = combine002('Josh', 'Adam', 'as-number');
console.log(combineStrtoNum0021); // Uncaught Error: Your input counld not convert to Number

const combineStrtoNum0022 = combine002(123, 'Adam', 'as-number');
console.log(combineStrtoNum0022); // Uncaught Error: Your input counld not convert to Number

const combineStrtoNum0023 = combine002('Josh', 456, 'as-number');
console.log(combineStrtoNum0023); // Uncaught Error: Your input counld not convert to Number