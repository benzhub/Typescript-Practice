const person2: {
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

console.log(person2.name); // "Ben"

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
}
// "SPORTS"
// "COOKING"
