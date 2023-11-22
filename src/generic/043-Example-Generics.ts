const name1: Array<string> = []; // string[]
// name1.push(1); // Argument of type 'number' is not assignable to parameter of type 
name1.push('2');
console.log(name1); // ['2']

const name2: Array<boolean> = []; // boolean[]
name2.push(true);
name2.push(false);
name2.push(true);
console.log(name2); // [true, false, true]


const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

promise.then(data => {
  data.split(' ');
});

export {};