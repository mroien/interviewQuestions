function capitalizeWords(str) {
  let words = str.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(' ');
}

console.log(capitalizeWords('I woke up early today'))
console.log(capitalizeWords('I went straight to the beach'))