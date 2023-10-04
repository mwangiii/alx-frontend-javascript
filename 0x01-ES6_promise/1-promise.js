export default function getFullResponseFromAPI(success) {
  return Promise((resolve, reject) => {
    if (success){
      resolve({ status: 200, body: 'Success'});
    } else {
      reject(new Error('The fake APi is not working currently'));
    }
  })
}
