const os = require('os');

console.log(os.arch()); //
console.log(os.platform()); // en que equipo se esta usando el programa
console.log(os.cpus().length); // caractisticas de cpu que esta usando el programa
//  console.log(os.constants); Me muestran todos los errores de sistema.


const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}
// saber cuanta memoria ram tiene tu computador,
// y cuanto memoria tiene disponible para ejecutar algun programa
// console.log(gb(os.freemem()));
// console.log(gb(os.totalmem()));
// console.log(os.freemem()); // valor de tu memoria de ram en bytes

// console.log(os.hostname()); // voy a saber el hostname de la máquina

// console.log(os.tmpdir())//-->Me muestra los directorios temporales, temproales una imagen que voy a procesar
// console.log(os.homedir()) // Me permite saber cual es el directorio raíz
console.log(os.networkInterfaces());