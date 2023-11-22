enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}

const Person006: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'Ben',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR,
};

// Person006.role.push('admin'); // 會出錯，物件中的role必須是枚舉Role中的，且非Array不能push
// Person006.role[1] = 10; // 會出錯，物件中的role必須是枚舉Role中的

let favoriteActivities4: string[];
// favoriteActivities4 = ['Sports', 1]; // 會出錯，陣列裡面必須都是string

console.log(Person006.name); // Ben

for (const hobby of Person006.hobbies) {
  console.log(hobby.toUpperCase());
}
// Sports
// Cooking
