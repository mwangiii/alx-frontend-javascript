import { uploadPhoto,createUser } from './2-then.js';
export default function handleProfileSign() {
  return new Promise ((resolve,reject) => {
    if (promise){
      resolve({body:{firstName,lastName}});
    } else {
      reject(new Error('Signup system offline'))
    }
  })
}
