let userInput1: unknown;
let userName1: string;

userInput1 = 5;
userName1 = 'Max';
// userName1 = userInput1; // 會出錯 // Type 'unknown' is not assignable to type 'string'.

//////////////////////////////////
let userInput2: any;
let userName2: string;

userName2 = 'Max';
userInput2 = userName1; // 正常

//////////////////////////////////
// unknown 還是必須做型別檢查
let userInput3: unknown;
let userName3: string;

userInput3 = 5;
userInput3 = 'Max';
if (typeof userInput3 === 'string') {
  userName3 = userInput3; // 這樣才會正常
}

export {};
