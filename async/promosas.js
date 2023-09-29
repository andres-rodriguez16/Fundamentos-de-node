function adios(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios,' + ' ' + name);
      resolve(name);
    }, 1000);
  });
}

function hola(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('HELLO,' + ' ' + name);
      resolve(name);
    }, 1000);
  });
}

function saludar(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola mundo');
      resolve(name);
    }, 1000);
  });
}

hola('andres').then(saludar).then(adios);