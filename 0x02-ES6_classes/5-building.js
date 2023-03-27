export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  //   get and set sqft property
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }

  // Define the abstract method
  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
