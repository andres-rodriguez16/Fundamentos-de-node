/*para ERRORES que no han sido capturados*/
process.on('uncaughtException', (error, origen) => console.log(error, origen));

/*para PROMESAS rechazadas que no han sido capturados*/
process.on('uncaughtRejection', (err, origen) => {
  console.error('captura promesas rechazadas');
  console.log(err);
});
/*el proceso esta por terminar*/
process.on('beforeExit', () => {
  console.log('El proceso esta a punto de terminar');
  /*no ejecutar setTimeout() acá */
});
/*el proceso ha terminado*/
process.on('exit', () => console.log('Adios'));
