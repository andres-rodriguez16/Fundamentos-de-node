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

function saludar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola mundo');
      resolve();
    }, 1000);
  });
}

const main = async () => {
  let nombre = await hola("andres")
  await saludar()
  await adios(nombre)
  console.log("termino el proceso");
}
console.log("primera interación");
main()
console.log("segunda interación");