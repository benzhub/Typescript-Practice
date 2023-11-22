interface PersonProps {
  // private name: string;
  readonly name: string;
  greet(phrase: string): void;
}

interface AgeProps {
  age: number;
}

class Person implements PersonProps, AgeProps {
  constructor(readonly name: string, public age: number) {}

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}.`);
    console.log(`${phrase} ${this.age} years old.`);
  }
}

const max = new Person('Max', 35); // porperty name可以 initial，但之後不能再修改
// max.name = 'Lisa'; // 會出錯，因為name 是readonly，不可以修改
max.greet("Hi, I'm"); // Hi, I'm Max. Hi, I'm 35 years old

export {}; 
