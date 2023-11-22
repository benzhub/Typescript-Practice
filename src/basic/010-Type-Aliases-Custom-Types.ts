type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine010(
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

const combineAges010 = combine010(30, 26, 'as-number');
console.log(combineAges010); // 56

const combinedStringAges010 = combine010('100', '1', 'as-number');
console.log(combinedStringAges010); // 101
const combinedStringAges0102 = combine010('100', 1, 'as-number');
console.log(combinedStringAges0102); // 101
const combinedStringAges0103 = combine010(100, '1', 'as-number');
console.log(combinedStringAges0103); // 101

const combineNames010 = combine010('Josh', 'Adam', 'as-text');
console.log(combineNames010); // JoshAdam

const combineNumtoStr010 = combine010(5, 18, 'as-text');
console.log(combineNumtoStr010); // 518

const combineNumtoStr0102 = combine010(5, '18', 'as-text');
console.log(combineNumtoStr0102); // 518

const combineNumtoStr0103 = combine010('5', 18, 'as-text');
console.log(combineNumtoStr0103); // 518

const combineStrtoNum010 = combine010('Josh', 'Adam', 'as-number');
console.log(combineStrtoNum010); // Uncaught Error: Your input counld not convert to Number

const combineStrtoNum0102 = combine010(123, 'Adam', 'as-number');
console.log(combineStrtoNum0102); // Uncaught Error: Your input counld not convert to Number

const combineStrtoNum0103 = combine010('Josh', 456, 'as-number');
console.log(combineStrtoNum0103); // Uncaught Error: Your input counld not convert to Number
