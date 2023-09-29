// const fs = require('fs').promises;

// async function leer(ruta) {
//  const file = await fs.readFile(ruta, {encoding : "utf-8"});
//  console.log(file);
// }

// leer('./archivo.txt')

const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
       console.log(data.toString()); 
    })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) console.log(err);
    else console.log("funciona");
  })
}
function delete1(ruta, cb) {
  fs.unlink(ruta, cb)
}
//  leer('./archivo.txt')
// escribir("./texto1.txt", "soy un nuevo archivo", console.log)
// delete1("./texto1.txt", console.log)

  


 
