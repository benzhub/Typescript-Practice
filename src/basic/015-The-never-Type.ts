function generateError015(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError015('An error occruued', 500); // {message: 'An error occruued', errorCode: 500}
