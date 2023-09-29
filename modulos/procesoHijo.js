const { exec, spawn } = require('child_process');

// exec('node modulos/console.js', (err, stdount, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
//   console.log(stdount);
// });

let proceso = spawn('dir');

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', data => {
  console.log("¿Está muerto?");
  console.log(proceso.connected);
  console.log(data.toString());
});

proceso.on("exit", () => {
  console.log("El proceso termino");
  console.log(proceso.killed);
 
})