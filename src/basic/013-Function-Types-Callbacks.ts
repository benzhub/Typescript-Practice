function add013(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult013(num: number): void {
  console.log('Result: ' + num);
}

function printResult013_2(num: number): undefined {
  console.log('Result: ' + num);
  return;
}

function addAndHandle013(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combinValues013: (n1: number, n2: number) => number;
combinValues013 = add013;

let combinValues013_2: Function;
combinValues013_2 = printResult013;

let combinValues013_3: Function;
// let combinValues013_3 = 5; // 會出錯，因為已經定義了combinValues013的型別必須是Function

console.log(combinValues013(8, 8)); // 16
console.log(combinValues013_2(8)); // Result: 8 undefined

printResult013(add013(5, 12)); // Result: 17

addAndHandle013(10, 20, result => console.log(result)); // 30
