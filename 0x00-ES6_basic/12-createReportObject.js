export default function createReportObject(employeesList) {
  const newObject = {
    allEmployees: employeesList,
    getNumberOfDepartments: function () {
      return Object.keys(this.allEmployees).length;
    },
  };

  return newObject;
}
