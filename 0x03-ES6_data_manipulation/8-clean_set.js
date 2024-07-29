function cleanSet(set, startString) {
    if (startString === '' || typeof startString !== 'string') {
      return '';
    }
  
    let result = [];
  
    for (const element of set) {
      if (element.startsWith(startString)) {
        result.push(element.slice(startString.length));
      }
    }
  
    return result.join('-'); /* separates element of the array into a string using a speciffied delimeter */
  }
  
  export default cleanSet;
  