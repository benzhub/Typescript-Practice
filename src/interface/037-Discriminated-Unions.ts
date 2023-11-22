////////////////////////////////////////////
// Discriminated Unions

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving with speed: ${speed}.`);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 }); // Moving with speed: 10.
moveAnimal({ type: 'horse', runningSpeed: 15 }); // Moving with speed: 15.

export {};
