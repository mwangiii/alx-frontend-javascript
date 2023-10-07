import {signUpUser} from './4-user-promise';
import {uploadPhoto} from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName){
  const arr = {
    status: 'status_of_the_promise',
    value: 'value or error returned by the Promise',
  }
  return Promise.all ([arr])
}