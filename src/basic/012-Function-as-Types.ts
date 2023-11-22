function add012(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult012(num: number): void {
  console.log('Result: ' + num);
}

function printResult012_2(num: number): undefined {
  console.log('Result: ' + num);
  return;
}

let combinValues012: (input1: number, input2: number) => number;
combinValues012 = add012;

let combinValues012_2 = add012;

let combinValues012_3: Function;
combinValues012_3 = add012;

// combinValues012 = 5; // 會出錯，因為已經定義了combinValues012的型別必須是Function，且input/output的類型也要一致
// combinValues012 = printResult012; // 會出錯，因為已經定義了combinValues012的型別必須是Function，且input/output的類型也要一致
// combinValues012 = printResult012_2; // 會出錯，因為已經定義了combinValues012的型別必須是Function，且input/output的類型也要一致

console.log(combinValues012(8, 8)); // 16
console.log(combinValues012_2(18, 8)); // 26
console.log(combinValues012_3(18, 100)); // 26

printResult012(add012(5, 12)); // "Result: 17"
