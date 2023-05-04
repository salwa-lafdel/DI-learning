
let text = prompt("tapez votre liste de mots :");

// Convertir la chaîne par la m split en un tableau de mots
const words = text.split(",").map(word => word.trim());

// mot le plus long
const maxLength = Math.max(...words.map(word => word.length));

// Créer le cadre rectangulaire avec des étoiles et des espaces
const hBorder = "*".repeat(maxLength + 4);
const vBorder = "*";
const emptyLine = "*" + " ".repeat(maxLength + 2) + "*";
const contentLines = words.map(word => "* " + word.padEnd(maxLength, " ") + " *");

// Afficher le cadre rectangulaire avec les mots à l'intérieur
console.log(hBorder);
console.log(vBorder + " " + " ".repeat(maxLength) + " " + vBorder);
contentLines.forEach(line => console.log(line));
console.log(emptyLine);
console.log(hBorder);