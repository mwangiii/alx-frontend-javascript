import { uploadPhoto,createUser } from './utils.js';
export default function handleProfileSign() {
  return Promise.all([uploadPhoto(),createUser()])
    .then(([photoRes, userRes]) => {
      console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
