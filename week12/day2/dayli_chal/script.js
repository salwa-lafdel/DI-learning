let result= require('./main.js');
const b = 5;
console.log(result.Num +b)

// ------------part 2-----------
const http1 = require('http');

const server = http1.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  const resultFromPartI = result.Num +b;

  const responseHTML = `
    <html>
      <head>
        <title>Mon serveur Node.js</title>
      </head>
      <body>
        <h1>Bonjour a tout le monde</h1>
        <p>My Module is ${resultFromPartI}</p>
      </body>
    </html>
  `;

  res.end(responseHTML);
});

server.listen(3000, () => {
  console.log("I'm listening on http://localhost:3000/");
  //http://localhost:3000/ l'ouverture de se url dans le navigateur affiche mon resultat
});
