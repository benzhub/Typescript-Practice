const person005: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Ben',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

person005.role.push('admin');
console.log(person005.role); // [2, "author", "admin"]
// person005.role[1] = 10; // 會出錯，因為在person005物件中的role有定義元組中indexof 1的位址，類型必須是string，不可以改成number類型

let favoriteActivities2: string[];
// favoriteActivities2 = ['Sports', 1]; // 會出錯，陣列裡面element必須都是string

console.log(person005.name); // 'Ben'

for (const hobby of person005.hobbies) {
  console.log(hobby.toUpperCase());
}
// "SPORTS"
// "COOKING"
