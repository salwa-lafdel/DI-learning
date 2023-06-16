// ----------------------part 3------------------------

const getCurrentDateTime = require('./mainPart3.js');
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  const currentDateTime = getCurrentDateTime(); 

  const responseHTML = `
    <html>
      <head>
        <title>Serveur Node.js</title>
      </head>
      <body>
        <p>Date et heure actuelles : ${currentDateTime}</p>
      </body>
    </html>
  `;

  res.end(responseHTML);
});

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
});
