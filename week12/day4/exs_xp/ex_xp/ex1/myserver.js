const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === '/') {
    res.write('<h1>Bienvenue sur le serveur Node.js!</h1>');
    res.write('<p>Ceci est la première ligne HTML.</p>');
    res.write('<p>Voici la deuxième ligne HTML.</p>');
  } else {
    res.write('<h1>Page introuvable</h1>');
    res.write('<p>La page que vous recherchez n\'existe pas.</p>');
  }

  res.end();
});

server.listen(3000)
  console.log('Le serveur est en écoute sur http://localhost:3000/');
;
