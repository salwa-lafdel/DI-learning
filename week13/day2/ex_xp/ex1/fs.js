const fs = require('fs');

// Lire le fichier texte
fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  // Afficher la sortie dans le terminal
  console.log(data);
});
