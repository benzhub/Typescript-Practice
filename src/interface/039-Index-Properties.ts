// index properties
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a charcter!' }
  [prop: string]: number | string;
}

const errorBag: ErrorContainer = {
  email: 'test@test.com',
  age: 100,
  name: 'Lanchester',
};
