// Tableau des planètes du système solaire
const planets = [
    { name: "Mercure", color: "orange", moons: 0 },
    { name: "Vénus", color: "yellow", moons: 0 },
    { name: "Terre", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturne", color: "lightyellow", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
  ];
  
  // Récupérer la section dans le HTML
  const listPlanets = document.querySelector(".listPlanets");
  
  // Créer et ajouter les divs des planètes à la section
  planets.forEach(planet => {
    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.innerText = planet.name;
    listPlanets.appendChild(planetDiv);
  
    // Créer les divs des lunes pour chaque planète
    if (planet.moons > 0) {
      const moonDivs = createMoonDivs(planet.moons);
      moonDivs.forEach(moonDiv => {
        planetDiv.appendChild(moonDiv);
      });
    }
  });
  
  // Fonction pour créer les divs des lunes
  function createMoonDivs(numMoons) {
    const moonDivs = [];
    for (let i = 0; i < numMoons; i++) {
      const moonDiv = document.createElement("div");
      moonDiv.className = "moon";
     // Tableau des planètes du système solaire
const planets = [
    { name: "Mercure", color: "orange", moons: 0 },
    { name: "Vénus", color: "yellow", moons: 0 },
    { name: "Terre", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturne", color: "lightyellow", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
  ];
  
  // Récupérer la section dans le HTML
  const listPlanets = document.querySelector(".listPlanets");
  
  
  planets.forEach(planet => {
    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.innerText = planet.name;
    listPlanets.appendChild(planetDiv);
  
    // Créer les divs des lunes pour chaque planète
    if (planet.moons > 0) {
      const moonDivs = createMoonDivs(planet.moons);
      moonDivs.forEach(moonDiv => {
        planetDiv.appendChild(moonDiv);
      });
    }
  });
  
 
  function createMoonDivs(numMoons) {
    const moonDivs = [];
    for (let i = 0; i < numMoons; i++) {
      const moonDiv = document.createElement("div");
      moonDiv.className = "moon";
      // positionner de manière aléatoire à l'intérieur de chaque planète. 
      //*80 : pour obtient des val entre 0-80
      //(0 + 10 a 80 + 10)éviter que les divs de lune trop prochesdes bords de la planète.
      moonDiv.style.left = `${Math.random() * 80 + 10}%`;
      moonDiv.style.top = `${Math.random() * 80 + 10}%`;
      moonDivs.push(moonDiv);
    }
    return moonDivs;
  }
  
      moonDivs.push(moonDiv);
    }
    return moonDivs;
  }
  