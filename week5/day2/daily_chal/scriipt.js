// Obtenir les éléments HTML dont nous avons besoin
const libForm = document.querySelector('#libform');
const nounInput = document.querySelector('#noun');
const adjInput = document.querySelector('#adjective');
const personInput = document.querySelector('#person');
const verbInput = document.querySelector('#verb');
const placeInput = document.querySelector('#place');
const storyOutput = document.querySelector('#story');
const shuffleButton = document.createElement('button');
shuffleButton.textContent = 'Shuffle';

// Générer l'histoire
function generateStory() {
  // Vérifier que tous les champs sont remplis
  if (!nounInput.value || !adjInput.value || !personInput.value || !verbInput.value || !placeInput.value) {
    console.log('Please fill out all fields');
    return;
  }
  // Construire l'histoire
  const story = `${personInput.value} went to ${placeInput.value} and saw a ${adjInput.value} ${nounInput.value}. ${personInput.value} ${verbInput.value} and was very happy.`;
  storyOutput.textContent = story;
}

// Ajouter un gestionnaire d'événement pour le bouton "Lib it!"
libForm.addEventListener('submit', function (event) {
  event.preventDefault();
  generateStory();
});

// Ajouter un bouton "shuffle"
document.body.appendChild(shuffleButton);
let stories = [
  'One day, the {noun} went to the {place} and met a very {adjective} {person}. . They had a great time together!',
  'Once upon a time, in a {place} far, far away, there was a {adjective} {noun} named {person}.  loved to {verb} every day. One day, {person} went on an adventure and met a very interesting person.',
  'There once was a {adjective} {noun} who lived in a {place}. {noun} loved to {verb} and would do it every day. One day, {person} who changed life forever.'
];
shuffleButton.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * stories.length);
  const storyTemplate = stories[randomIndex];
  const story = storyTemplate
    .replace('{noun}', nounInput.value)
    .replace('{adjective}', adjInput.value)
    .replace('{person}', personInput.value)
    .replace('{verb}', verbInput.value)
    .replace('{place}', placeInput.value);
  storyOutput.textContent = story;
});
