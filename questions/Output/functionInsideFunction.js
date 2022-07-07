// What is the output?
const num = 4;

function outer() {
  let num =2;
  function inner() {
    num ++;
    let num = 3;
    console.log(num);
  }
  inner();
}
outer();