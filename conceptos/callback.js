function soyAsincrona(nombre, mycallback) {
  setTimeout(() => {
    console.log('HELLO,' + ' ' + nombre);
    mycallback(nombre);
  }, 1000);
}

function adios(name, callBack) {
  setTimeout(() => {
    console.log('Adios,' + ' ' + name);
    callBack()
  }, 1000);
}


soyAsincrona(
  'andres', function (nombre) {
    console.log("se ejecuta el primer callBack");
    adios(nombre, () => {
      console.log("se termino el proceso");
    })
  }
);

