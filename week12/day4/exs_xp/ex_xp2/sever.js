const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const user = {
    firstname: 'John',
    lastname: 'Doe'
  };

  res.send(user);
});

app.use(express.static('public'));

const server = app.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
