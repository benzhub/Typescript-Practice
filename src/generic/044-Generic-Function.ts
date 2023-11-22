// Creating A Generic Function
function mergeFunc<T extends {}, U extends {}>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = mergeFunc({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

console.log(mergeObj); // {name: 'Max', hobbies: Array(1), age: 30}
console.log(mergeObj.name); // Max
console.log(mergeObj.hobbies); // ['Sports']
console.log(mergeObj.age); // 30

interface NameProps {
  name: string;
  hobbies: string[];
}

interface AgeProps {
  age: number;
}

const mergeObj2 = mergeFunc<NameProps, AgeProps>(
  { name: 'Jackson', hobbies: ['Cooking'] },
  { age: 30 }
);
console.log(mergeObj2); // {name: 'Jackson', hobbies: Array(1), age: 30}

export {};