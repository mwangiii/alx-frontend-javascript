export default function signUpUser(firstName, lastName) {
  const userSign = {
    firstName,
    lastName,
  };
  return Promise.resolve(userSign);
}
