function add(n1: number, n2: number): number {
  return n1 + n2;
}

// Function 如果沒有return的話，我們在Function的return的型別上我們給予void
function printResult1(num: number): void {
  console.log('Result: ' + num);
}

// Function的return如果沒有任何東西，我們在Function的return的型別上我們給予undefined
function printResult2(num: number): undefined {
  console.log('Result: ' + num);
  return;
}

printResult1(add(10, 12)); // Result: 22
printResult2(add(5, 12)); // Result: 17
export {};