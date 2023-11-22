// 兩個interface property都要實現

interface PersonProps {
  name: string;
  greet(phrase: string): void;
}

interface AgeProps {
  age: number;
}

class Person implements PersonProps, AgeProps {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}.`);
    console.log(`${phrase} ${this.age} years old.`);
  }
}

const anna = new Person('Anna', 30);
anna.greet("Hi, I'm"); // Hi, I'm Anna. Hi, I'm 30 years old.

export {};
