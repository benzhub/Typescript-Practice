// const hobby1 = newActiveHobbies1[0];
// const hobby2 = newActiveHobbies1[1];
const newActiveHobbies = ['Sports', 'Cooking', 'Cooking', 'Sports', 'Cooking'];
const [hobby1, hobby2, ...remainingHobbies] = newActiveHobbies; // 解構賦值
console.log(hobby1); // 'Sports'
console.log(hobby2); // 'Cooking'
console.log(remainingHobbies); // ['Cooking', 'Sports', 'Cooking']

const person = {
  firstName: 'Jack',
  lastName: 'Clark',
  age: 30,
};

// const { firstName, lastName, age } = person;
// console.log(firstName); // Jack
// console.log(lastName); // Clark
// console.log(age); // 30

const { firstName: userName1, lastName: userName2, age: userAge } = person;
console.log(userName1); // Jack
console.log(userName2); // Clark
console.log(userAge); // 30

export {};