export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.reduce((sum, student) => sum + student.id, 0);
}
