interface HeightProps {
  height: number;
}

interface AgeProps {
  age: number;
}

interface PersonProps extends AgeProps, HeightProps {
  // private name: string;
  readonly name: string;
  greet(phrase: string): void;
}

class Person implements PersonProps {
  constructor(
    readonly name: string,
    public age: number,
    public height: number
  ) {}

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}.`);
    console.log(`${phrase} ${this.age} years old.`);
    console.log(`${phrase} ${this.height} cm.`);
  }
}

const max = new Person('Johnny', 25, 180);
// max.name = "Lisa"; // 會出錯，因為name 是readonly，不可以修改
max.greet("Hi, I'm");
// Hi, I'm Johnny.
// Hi, I'm 25 years old.
// Hi, I'm 180 cm.

export {};