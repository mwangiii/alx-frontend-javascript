export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  const sumOfIds = students.reduce((accumulator, student) => accumulator + student.id, 0);
  return sumOfIds;
}
