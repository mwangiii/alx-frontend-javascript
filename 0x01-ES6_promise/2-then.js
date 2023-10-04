export default function handleResponseFromAPI (promise) {
  return promise
    .then((result = { status: 200, body: 'success' }) => result)
    .catch((error = new Error()) => error)
    .finally(console.log('Got a response from the API'));
}
