const express = require('express');
const path = require('path');

const app = express();

// Définition du dossier public
app.use(express.static(path.join(__dirname, 'public')));

// pour /aboutMe/:hobby
app.get('/aboutMe/:hobby', (req, res) => {
  const hobby = req.params.hobby;
  if (typeof hobby !== 'string') {
    res.status(404).send('Invalid parameter');
  } else {
    res.send(`Hobby: ${hobby}`);
  }
});

//pour /pic
app.get('/pic', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'image.html'));
});

//pour /form
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

//  récupérer les données 
app.post('/formData', (req, res) => {
  const email = req.body.email;
  const message = req.body.message;
  res.send(`${email} vous a envoyé un message : "${message}"`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
