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
console.log(array.join('\r\n'));
}
fizzbuzz();

for (let i = 1; i < 100; i++) {
    if (i % 3 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}