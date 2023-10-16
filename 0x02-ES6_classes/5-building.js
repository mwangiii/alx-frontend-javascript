export default class Building {
  constructor (sqft) {
    if (sqft !== 'number') {
      throw TypeError('sqft should be a number');
    }
    this._sqft = sqft;
  }

  get sqft () {
    return this._sqft;
  }

  set sqft (newSqft) {
    this._sqft = newSqft;
  }

  evacuationWarningMessage () {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
