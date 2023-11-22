const Person005: {
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

Person005.role.push('admin');
console.log(Person005.role); // [2, "author", "admin"]
// Person005.role[1] = 10; // 會出錯，因為在Person005物件中的role有定義元組中indexof 1的位址，類型必須是string，不可以改成number類型

let favoriteActivities2: string[];
// favoriteActivities2 = ['Sports', 1]; // 會出錯，陣列裡面element必須都是string

console.log(Person005.name); // 'Ben'

for (const hobby of Person005.hobbies) {
  console.log(hobby.toUpperCase());
}
// "SPORTS"
// "COOKING"
