let suma = 0;
console.time('bucle');
for (let i = 0; i < 10; i++) {
  suma += i;
}
console.timeEnd('bucle');
console.log(suma);

function asincrona() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('termino');
    }, 1000);
  });
}

console.time('asincrona');
console.log('empieza la promesa');
asincrona().then(r => {
  console.timeEnd('asincrona', r);
});
