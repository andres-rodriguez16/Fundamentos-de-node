 console.log(global);
// let i = 0;
// let intervalo = setInterval(() => {
//   console.log('hello');
//   if (i === 4) {
//     clearInterval(intervalo);
//   }

//   i++;
//   console.log(i);
// }, 1000);

setImmediate(function () {
  console.log("hello");
})
console.log(__dirname);
console.log(__filename);

// crear variable grobales

// global.newVariable = "elvalor"
// console.log(newVariable);