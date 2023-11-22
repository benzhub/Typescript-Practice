function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occruued', 500); // {message: 'An error occruued', errorCode: 500}

export {};
