export default function getFullResponseFromAPI(success) {
  const cond = true
  return Promise((resolve, reject) => {
    if (cond){
      resolve({ status: 200, body: 'Success'});
    } else {
      reject(Error('The fake APi is not working currently'));
    }
  })
}
