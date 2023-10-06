import { uploadPhoto,createUser } from './2-then.js';
export default function handleProfileSign() {
  return promise 
    .then ((result = { status: 200, body: { firstName, lastName }}) => result)
    .catch((error = new Error('Signup system offline')) => error)
}
