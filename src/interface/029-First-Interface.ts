interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person = {
  name: 'Tommy',
  age: 30,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}.`);
  },
};

user1.greet("Hi, I'm"); // Hi, I'm Tommy.

export {};
