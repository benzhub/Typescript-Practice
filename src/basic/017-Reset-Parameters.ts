const sum017 = (...numbers: number[]): number => {
  // solution: 1
  return numbers.reduce((acc, cur) => {
      return acc + cur;
  }, 0)

  // // solution: 2
  // let result = 0;
  // numbers.forEach((number) => result += number)
  // return result;

  // // solution: 3
  // let result = 0;
  // for (let number of numbers) {
  //     result += number
  // }
  // return result;

//   // solution: 4
//   let result = 0;
//   for (let i=0; i<numbers.length; i++){
//       result += numbers[i];
//   }
//   return result;
};

const numSum017 = sum017(5, 10, 2, 3.7);
console.log(numSum017); // 20.7
