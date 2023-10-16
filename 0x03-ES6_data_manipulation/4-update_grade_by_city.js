export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  const studentsInCity = students.filter(student => student.location === city);

  const updatedStudents = studentsInCity.map(student => {
    const updatedGrades = newGrades.find(grade => grade.subject === student.subject);
    if (updatedGrades) {
      return { ...student, grade: updatedGrades.score };
    }
    return student;
  });
  return updatedStudents;

}
