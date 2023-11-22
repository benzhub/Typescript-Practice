// obj key value in Generic Function

function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

const result = extractAndConvert({ name: 'Lisa' }, 'name');
console.log(result); // Value: Lisa

export {};