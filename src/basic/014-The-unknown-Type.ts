let userInput014: unknown;
let userName014: string;

userInput014 = 5;
userInput014 = 'Max';
// userName014 = userInput014; // 會出錯 // Type 'unknown' is not assignable to type 'string'.

//////////////////////////////////
let userInput014_2: any;
let userName014_2: string;

userName014_2 = 'Max';
userInput014_2 = userName014_2; // 正常

//////////////////////////////////
// unknown 還是必須做型別檢查
let userInput014_3: unknown;
let userName014_3: string;

userInput014_3 = 5;
userInput014_3 = 'Max';
if (typeof userInput014_3 === 'string') {
  userName014_3 = userInput014_3; // 這樣才會正常
}
