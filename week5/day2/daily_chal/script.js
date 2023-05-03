const libForm = document.getElementById('libform');//recuperer form
const story = document.getElementById('story');//recuperer la zone de texte
function generateStory(event) {
    event.preventDefault();
     // Récupérer les valeurs saisies par l'utilisateur
     const noun = document.getElementById('noun').value;
     const adjective = document.getElementById('adjective').value;
     const person = document.getElementById('person').value;
     const verb = document.getElementById('verb').value;
     const place = document.getElementById('place').value;
    
        // Vérifier si les champs ne sont pas vides
    if (noun && adjective && person && verb && place) {
    //3: Générer l'histoire en utilisant les valeurs saisies par l'utilisateur
    const newStory = `${person} went to ${place} and saw a ${adjective} ${noun}. They decided to ${verb} the ${noun} and it was a great experience.`;

    // Afficher l'histoire dans la zone de texte
    story.textContent = newStory;
   } else {
   // Afficher un message d'erreur si les champs sont vides
   story.textContent = 'Please fill in all fields';
    }
}

const libButton = document.getElementById('lib-button');
libButton.addEventListener('click', generateStory);


// Tableau d'histoires à choisir au hasard
const stories = [
    `${person} went to ${place} and saw a ${adjective} ${noun}. They decided to ${verb} the ${noun} and it was a great experience.`,
    `${person} was walking in the ${place} when they found a ${adjective} ${noun}. They couldn't resist the urge to ${verb} the ${noun} and it was amazing.`,
    `${person} always dreamed of visiting ${place} and when they finally got there, they saw a ${adjective} ${noun}. They knew they had to ${verb} the ${noun} and it was the highlight of their trip.`,
  ];
// Fonction pour choisir une histoire aléatoire et la remplir avec les valeurs saisies par l'utilisateur
function shuffleStory() {
    // Récupérer les valeurs saisies par l'utilisateur
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;
  
    if (noun && adjective && person && verb && place) {
        // Choisir une histoire aléatoire
        const randomStory = stories[Math.floor(Math.random() * stories.length)];
    
        // Remplacer les valeurs dans l'histoire choisie
        const newStory = randomStory
          .replace('${person}', person)
          .replace('${place}', place)
          .replace('${adjective}', adjective)
          .replace('${noun}', noun)
          .replace('${verb}', verb);
    
        
        story.textContent=newStory
    }
}
  
 