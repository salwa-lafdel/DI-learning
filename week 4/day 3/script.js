function playTheGame(){
    let play=confirm("Vous souhaite jouer au cette jeu ?")
    if (play===false){
        alert("Pas de problème, au revoir")
    }
    else{
        let nomb=(prompt("entre un nombre entre 0 et 10"))
        if (nomb==="" || isNaN(nomb)){
            alert("Désolé, pas un numéro, au revoir")
        } 
        else if( nomb<0 || nomb>10){
            alert(" Désolé, ce n'est pas un bon chiffre, au revoir")
        }
        else{
            computerNumber=Math.floor(Math.random() *11)
            compareNumbers(nomb,computerNumber)
        }
    }
}
function compareNumbers(userNumber,computerNumber) {
    for(i=0;i<3;i++){ // cette boucle pour afficher propmt 3 fois
    if(i==2 && userNumber!=computerNumber)
    {
        alert("hors de chances et le computerNumber est: " +computerNumber)
    }
    if(userNumber==computerNumber){
        alert("WINNER")
        break;
    }
    else if(userNumber>computerNumber){
        userNumber = prompt("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau")
    }
    else if(userNumber<computerNumber){
        
        userNumber = prompt("Votre numéro est plus petit que celui de l'ordinateur, devinez à nouveau")
    }
   

    
    }
}
