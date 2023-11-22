const addNum1 = (a: number, b: number): number => {
  return a + b;
};

const addNum2 = (a: number, b: number): number => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

console.log(addNum1(2, 5)); // 7
console.log(addNum2(2, 5)); // 7
printOutput(addNum1(3, 7)); // 10

// Array Function連續箭頭，需要先理解函數柯里化的用意
// https://zh.wikipedia.org/zh-tw/%E6%9F%AF%E9%87%8C%E5%8C%96
let getters1 = {
  total: (state: string) => (symbol: string) => {
    return (symbol || '$') + state;
  },
};

// getters.total(state, symbol)  // 調用失敗
console.log(getters1.total('check1')('function')); // 調用成功 => functioncheck1

// 相當於
let getters2 = {
  total: function (state: string) {
    return function (symbol?: string) {
      return (symbol || '$') + state;
    };
  },
};

// getters.total(state, symbol)  // 調用失敗
console.log(getters2.total('check2')()); // 調用成功 => $check2
console.log(getters2.total('check2')('function')); // 調用成功 => functioncheck2

export {};
