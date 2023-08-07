const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const users = [];

app.get('/registerForm', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

app.get('/loginForm', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
  const { username, password, firstName, lastName, email } = req.body;

  if (users.some(user => user.username === username || user.password === password)) {
    res.send('erreur1');
  } else {
    const newUser = { username, password, firstName, lastName, email };
    users.push(newUser);
    res.send('enregistrer');
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    res.send('connexion');
  } else {
    res.send('erreur2');
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
