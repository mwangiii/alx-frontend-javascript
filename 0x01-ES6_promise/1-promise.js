export default function getResponseFromAPI(success) {
  const cond = true;
  if (cond) {
    return Promise.resolve('staus; 200, body: "Success"');
  }else {
    return Promise.reject(Error('The fake API is not working currently'));
  }
}
