// Creating A Generic Function
function mergeFunc<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = mergeFunc(
  { name: 'Amy', hobbies: ['Sports'] },
  { height: 166 }
);
console.log(mergeObj); // {name: 'Amy', hobbies: Array(1), height: 166}
console.log(mergeObj.name); // Amy
console.log(mergeObj.hobbies); // ['Sports']
console.log(mergeObj.height); // 180

export {};