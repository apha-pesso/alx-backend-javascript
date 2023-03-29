export default function updateStudentGradeByCity(students, city, newGrade) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === city).map((student) => {
    const grade = newGrade.find((grade) => grade.studentId === student.id);

    if (grade) {
      student.grade = grade.grade;
    } else {
      student.grade = 'N/A';
    }

    return student;
  });
}
