const fs = require('fs');

// Créer un nouveau fichier texte et y écrire
fs.writeFile('example.txt', 'Some Text To See', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Le fichier a été créé avec succès.');
});

// Ajouter un autre texte au fichier
fs.appendFile('example.txt', '\nAcheter du jus d\'orange', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Le texte a été ajouté au fichier avec succès.');
});

// Supprimer le fichier
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Le fichier a été supprimé avec succès.');
});
