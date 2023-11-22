const userInput = '';
const storedData = userInput || 'DEFAULT';
console.log(storedData); // 'DEFAULT'

const userInput2 = undefined;
const storedData2 = userInput2 || 'DEFAULT';
console.log(storedData2); // 'DEFAULT'

const userInput3 = 0;
const storedData3 = userInput3 || 'DEFAULT';
console.log(storedData3); // 'DEFAULT'


const userInput4 = undefined;
const storedData4 = userInput4 ?? 'DEFAULT';
console.log(storedData4); // 'DEFAULT'

const userInput5 = '';
const storedData5 = userInput5 ?? 'DEFAULT';
console.log(storedData5); // ''

const userInput6 = 0;
const storedData6 = userInput6 ?? 'DEFAULT';
console.log(storedData6); // 0
