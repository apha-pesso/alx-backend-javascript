export default function createIteratorObject(report) {
  function* iterator() {
    for (const employeeList of Object.values(report.allEmployees)) {
      for (const employee of employeeList) {
        yield employee;
      }
    }
  }
  return iterator();
}
