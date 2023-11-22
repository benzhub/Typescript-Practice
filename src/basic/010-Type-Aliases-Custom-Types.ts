type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine4(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor)  {
    let result;
    if (resultConversion === 'as-number') {
      result =  +input1 + +input2;
      if(Number.isNaN(result)) throw new Error("String counld not convert to Number")
      return result;
    } else {
      return input1.toString() + input2.toString();
    }
}

const combineAges2 = combine4(30, 26, 'as-number');
console.log(combineAges2); // 56

const combinedStringAges2 = combine4('100', '1', 'as-number');
console.log(combinedStringAges2); // 101
const combinedStringAges21 = combine4('100', 1, 'as-number');
console.log(combinedStringAges21); // 101
const combinedStringAges22 = combine4(100, '1', 'as-number');
console.log(combinedStringAges22); // 101

const combineNames2 = combine4('Josh', 'Adam', 'as-text');
console.log(combineNames2); // JoshAdam

const combineNumtoStr = combine4(5, 18, 'as-text');
console.log(combineNumtoStr); // 518

const combineNumtoStr2 = combine4(5, '18', 'as-text');
console.log(combineNumtoStr2); // 518

const combineNumtoStr3 = combine4('5', 18, 'as-text');
console.log(combineNumtoStr3); // 518

const combineStrtoNum = combine4('Josh', 'Adam', 'as-number');
console.log(combineStrtoNum); // Uncaught Error: Your input counld not convert to Number

const combineStrtoNum2 = combine4(123, 'Adam', 'as-number');
console.log(combineStrtoNum2); // Uncaught Error: Your input counld not convert to Number

const combineStrtoNum3 = combine4('Josh', 456, 'as-number');
console.log(combineStrtoNum3); // Uncaught Error: Your input counld not convert to Number