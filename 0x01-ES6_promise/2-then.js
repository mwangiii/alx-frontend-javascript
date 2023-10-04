export default function handleResponseFromAPI (promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'success' });
    } else {
      reject(new Error());
      console.log('Got a response from the API');
    }
  })
 .then((result) => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' }
  })
  .catch((error) => {
    return new Error();
  });
}
