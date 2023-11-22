const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title); // CEO
console.log(fetchedUserData?.job?.description); // My own company

fetch('https://dog.ceo/api/breeds/image/random', {
  method: 'GET',
  redirect: 'follow',
})
  .then(response => response.json())
  .then(result => console.log(result?.message?.title)) //  undefined
  .catch(error => console.log('error', error));
