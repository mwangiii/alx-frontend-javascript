export default function signUpUser(firstName, lastName) {
  const userSign = {
    firstName: firstName,
    lastName: lastName
  }
  return Promise.resolve(userSign)
}
