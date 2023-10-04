export default function getFullResponseFromAPI(success) {
  if (true) {
    return Promise.resolve('staus; 200, body: "Success"');
  } else {
    return Promise.reject(Error('The fake API is not working currently'));
  }
}
