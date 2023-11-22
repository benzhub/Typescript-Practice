function combine009(
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

const combineAges009 = combine009(30, 26, 'as-number');
console.log(combineAges009); // 56

const combinedStringAges009 = combine009('30', '28', 'as-number');
console.log(combinedStringAges009); // 58

const combineNames009 = combine009('Josh', 'Adam', 'as-text');
console.log(combineNames009); // JoshAdam

const combineNumtoStr009 = combine009(5, 18, 'as-text');
console.log(combineNumtoStr009); // 518

const combineNumtoStr0092 = combine009(5, '18', 'as-text');
console.log(combineNumtoStr0092); // 518

const combineNumtoStr0093 = combine009('5', 18, 'as-text');
console.log(combineNumtoStr0093); // 518

const combineStrtoNum009 = combine009('Josh', 'Adam', 'as-number');
console.log(combineStrtoNum009); // Uncaught Error: Your input counld not convert to Number

const combineStrtoNum0092 = combine009(123, 'Adam', 'as-number');
console.log(combineStrtoNum0092); // Uncaught Error: Your input counld not convert to Number

const combineStrtoNum0093 = combine009('Josh', 456, 'as-number');
console.log(combineStrtoNum0093); // Uncaught Error: Your input counld not convert to Number