function envoyerFormulaire() {
    let nom = document.getElementById("nom").value;
    let nomFamille = document.getElementById("nomFamille").value;
  
    let donnees = {
      "nom": nom,
      "nomFamille": nomFamille
    };
  
    let jsonString = JSON.stringify(donnees);
    document.getElementById("output").textContent = jsonString;
  }
  