export default function getResponseFromAPI(success) {
  const condition = true;
  if (condition) {
    return Promise.resolve('staus; 200, body: "Success"');
  }
  else{
    return Promise.reject('The fake API is not working currently')
  }
}
