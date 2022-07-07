const myArray = ['a', 'b', 'c', 'd', 'e'];

// myArray = ['start', ...myArray];
// Output: [ 'start', 'a', 'b', 'c', 'd', 'e' ]

// myArray = [...myArray, 'end'];
// Output: [ 'a', 'b', 'c', 'd', 'e', 'end' ]

myArray = ['start', ...myArray, 'end'];
// Output: [ 'start', 'a', 'b', 'c', 'd', 'e', 'end' ]

console.log(myArray);