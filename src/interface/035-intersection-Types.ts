type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// intersection
type ElevatedEmployee1 = Admin & Employee;
const el1: ElevatedEmployee1 = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};
console.log(el1);


// intersection
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
//const test1: Universal = 'test1'; // Type 'string' is not assignable to type 'number'
// const test2: Universal = true; // Type 'boolean' is not assignable to type 'number'
const test3: Universal = 123;
console.log(test3); // 123


////////////////////////////////////////////

// intersection
interface ElevatedEmployee2 extends Admin, Employee {}

const el2: ElevatedEmployee2 = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

console.log(el2);

export {};