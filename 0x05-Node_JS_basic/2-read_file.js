// Reading a file synchronously
const fs = require('fs');

function countStudents(path) {
  //   fs.readFile(path, (err, data) => {
  //     if (err) {
  //       throw new Error("Cannot load the database");
  //     }

  //     console.log(data.toString());
  //   });
  const data = fs.readFileSync(path);
  if (!data) {
    throw new Error('Cannot load the database');
  }
  // console.log(data.toString());
  nameList = data
    .toString()
    .split('\n')
    .filter((name) => name.length > 0);
  // console.log(name_list);
  const students = nameList.length - 1;
  console.log(`Number of students: ${students}`);

  const CSname = [];
  const SWEname = [];

  nameList.forEach((element) => {
    if (element.includes('CS')) {
      CSname.push(element.split(',')[0]);
    } else if (element.includes('SWE')) {
      SWEname.push(element.split(',')[0]);
    }
  });

  console.log(
    `Number of students in CS: ${CSname.length}. List: ${CSname.join(', ')}`
  );
  console.log(
    `Number of students in SWE: ${SWEname.length}. List: ${SWEname.join(', ')}`
  );
  //   console.log(CSname);
  //   console.log(SWEname);
}

module.exports = countStudents;
