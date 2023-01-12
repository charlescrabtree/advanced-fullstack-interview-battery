function fizzbuzz() {
  const array = [];
  let max = "..........".length;

for(let i = ".".length;i <= (max * max);i++){
  if (i % 3 === 0 && i % 5 === 0) {
    array.push('fizzbuzz')
  } else if (i % 3 === 0) {
    array.push('fizz')
  } else if (i % 5 === 0) {
 array.push('buzz') 
  } else {
    array.push(i)
  }
}
console.log(array);
}
fizzbuzz();
