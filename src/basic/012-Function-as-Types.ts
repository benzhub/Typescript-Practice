function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult1(num: number): void {
  console.log('Result: ' + num);
}

function printResult2(num: number): undefined {
  console.log('Result: ' + num);
  return;
}

let combinValues: (input1: number, input2: number) => number;
combinValues = add;

// let combinValues: Function;
// combinValues = add;

// combinValues = 5; // 會出錯，因為已經定義了combinValues的型別必須是Function，且input/output的類型也要一致
// combinValues = printResult; // 會出錯，因為已經定義了combinValues的型別必須是Function，且input/output的類型也要一致
// combinValues = printResult; // 會出錯，因為已經定義了combinValues的型別必須是Function，且input/output的類型也要一致

console.log(combinValues(8, 8)); // 16
console.log(combinValues(18, 8)); // 26
console.log(combinValues(18, 100)); // 118

printResult1(add(10, 12)); // "Result: 22"
printResult2(add(5, 12)); // "Result: 17"
export {};