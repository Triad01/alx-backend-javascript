/* eslint-disable no-unused-vars */
/* eslint-disable */
export default class HolbertonClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    set size(size) {
      this._size = size;
    }
  
    get size() {
      return this._size;
    }
  
    set location(location) {
      this._location = location;
    }
  
    get location() {
      return this._location;
    }
  
    [Symbol.toPrimitive](hint) {
      if (hint === 'string') {
        return this._location;
      }
      if (hint === 'number') {
        return this._size;
      }
      return null;
    }
  }