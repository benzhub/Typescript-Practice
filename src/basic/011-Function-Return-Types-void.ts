function add011(n1: number, n2: number): number {
  return n1 + n2;
}

// Function 如果沒有return的話，我們在Function的return的型別上我們給予void
function printResult011(num: number): void {
  console.log('Result: ' + num);
}

// Function的return如果沒有任何東西，我們在Function的return的型別上我們給予undefined
function printResult011_2(num: number): undefined {
  console.log('Result: ' + num);
  return;
}

printResult011(add011(5, 12)); // "Result: 17"
