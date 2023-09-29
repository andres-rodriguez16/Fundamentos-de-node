const http = require('http');

const router = (req, res) => {
  console.log(req.url);
  if (req.url === '/hello') {
    res.writeHead(201, { 'Content-Type': 'text/plain' });
    res.write('hola');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('error no se lo que quieras ');
    res.end();
  }
};

http.createServer(router).listen(3000);

console.log('escuchando en el puerto 3000');
