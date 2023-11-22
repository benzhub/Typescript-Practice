type Combinable = number | string;

function addFuc(a: number, b: number): number;
function addFuc(a: string, b: string): string;
function addFuc(a: string, b: number): string;
function addFuc(a: number, b: string): string;
function addFuc(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addFuc('Max', ' Schwarz');
console.log(result.split(' ')); // ['Max', 'Schwarz']
const result2 = addFuc('Max ', 3);
console.log(result2.split(' ')); // ['Max', '3']

export {};