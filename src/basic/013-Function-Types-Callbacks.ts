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

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// let combinValues: (n1: number, n2: number) => number;
// combinValues = add;

let combinValues: Function;
combinValues = add;

// let combinValues: Function;
// let combinValues = 5; // 會出錯，因為已經定義了combinValues的型別必須是Function

console.log(combinValues(8, 8)); // 16
console.log(combinValues(8)); // NaN

printResult2(add(5, 12)); // Result: 17

addAndHandle(10, 20, result => console.log(result)); // 30
export {};
