const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: 'Ben',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

let favoriteActivities: string[];
// favoriteActivities = ['Sports', 1]; // 會出錯，陣列(Array)裡面必須都是string
favoriteActivities = ['Sports', '1'];

console.log(person.name); // "Ben"

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
// "SPORTS"
// "COOKING"
export {};
