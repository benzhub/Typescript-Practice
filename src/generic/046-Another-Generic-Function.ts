interface Length2 {
  readonly length: number;
  run: (people: string) => void;
}

class Test2 implements Length2 {
  constructor(public length: number) {
    this.length = length;
  }
  run(people: string) {
    console.log(people);
  }
}

const test2 = new Test2(5);
console.log(test2.length); // 5

// 我們這邊利用length來限制輸入的類型必須是有length屬性的
// String, Array
interface Length {
  length: number;
}

function countAndprint<T extends Length>(element: T): [T, string] {
  let descriptionText = 'Got no Value.';
  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndprint('Hi there!')); // ['Hi there', 'Got 8 elements.']
console.log(countAndprint(['Sports', 'Cooking'])); // [Array(2), 'Got 2 elements.']
// console.log(countAndprint(10)); // Argument of type 'number' is not assignable to parameter of type

export {};
