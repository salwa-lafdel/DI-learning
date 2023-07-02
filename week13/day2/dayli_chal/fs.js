const fs = require('fs');

// Lire "RightLeft"
fs.readFile('RightLeft', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const symbols = data.trim(); // Supprimer les espaces en début et fin de fichier

  // Calculer la position finale à la fin du fichier
  let position = 0;
  for (const symbol of symbols) {
    if (symbol === '>') {
      position++;
    } else if (symbol === '<') {
      position--;
    }
  }
  console.log(`Position finale à la fin du fichier : ${position} pas vers la droite.`);

  // Calculer le nombre de pas nécessaires pour atteindre la position -1 pour la première fois
  let steps = 0;
  let Position = 0;
  let foundNegativePosition = false;
  while (!foundNegativePosition && Position < symbols.length) {
    const symbol = symbols[Position];
    if (symbol === '>') {
      Position++;
    } else if (symbol === '<') {
      Position--;
    }
    steps++;
    if (Position === -1) {
      foundNegativePosition = true;
    }
  }
  console.log(`Nombre de pas nécessaires pour atteindre la position -1 pour la première fois : ${steps} pas.`);
});
