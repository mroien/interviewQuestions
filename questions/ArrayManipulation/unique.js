// Return true only if all values are unique, otherwise false
// Using Array, Object, String method lastIndexOf()
// no Set Data Structure

// Array
function unique(str) {
  let values = [];
  for (let letter of str) {
    if(values.indexOf(letter) !== -1) {
      return false;
    }
    values = [...values, letter];
  }
  return true;
}

console.log(unique('abcde'));
console.log(unique('abacdefb'));

// Object
function uniqueOb(str) {
  let values = {};
  for (let letter of str) {
    if (values[letter]) {
      return false;
    }
    values[letter] = true;
  }
  return true;
}

console.log(uniqueOb('abcde'));
console.log(uniqueOb('abacdefb'));

// Last IndexOf
function uniqueIndex(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}

console.log(uniqueIndex('abcde'));
console.log(uniqueIndex('abacdefb'));