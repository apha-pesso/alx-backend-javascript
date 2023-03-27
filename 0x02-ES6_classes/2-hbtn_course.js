export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  //   Get and set name property
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  //   Get and set length property
  get length() {
    return this._length;
  }

  set length(newlength) {
    if (typeof newlength === 'number') {
      this._name = newlength;
    } else {
      throw new TypeError('length must be a number');
    }
  }

  //   Get and set students property
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
