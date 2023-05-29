//----------------exercice 1-------------------
/*                 //part 1
function infoAboutMe(){
    
    console.log("je m'appelle Salwa j'ai 19ans et j'aime le voyage")
}
infoAboutMe()
                //part 2

 function infoAboutPerson(personName, personAge, personFavoriteColor)
{
    console.log("Your name is",personName)
    console.log("Your Age is",personAge)
    console.log("Your Favorite Color is",personFavoriteColor)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")*/
//----------------exercice 2-------------------
// function calculateTip(){
//     let facture = prompt(" how much is the bill?")
//     let tip
//     if(facture<50)  tip=0.2
//     if(facture>50 && facture<200)  tip=0.15
//     if(facture>200)  tip=0.1
//     let tipAmount=facture*tip;
//     let total=facture+tipAmount;
//     console.log(`Le montant du pourboire est de ${tipAmount.toFixed(2)}$ et le montant total à payer est de ${total}$`);
// }
// calculateTip()
// //----------------exercice 3-------------------
// function isDivisible(divisor){
//     let som=0
//     for(let i=0;i<500; i++){
//     if(i%divisor===0) {
//         console.log (i)  ;
//          som= som+i
//     }
    
//     }
//     console.log("la somme des nombres diviser par se nombre est :",som)

// }
// isDivisible(23)
//----------------exercice 4-------------------
/*onst stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList=[ "banana", "orange","pomme"]
function myBill(){
    for(const item of shoppingList){
        const QTEENStock=stock[item]
        if (QTEENStock>0){
            const price=prices[item]
            console.log('the price of ',item,"is",price)
            console.log("and we have this many in stock :",stock[item])
        }
        else{
            console.log("there is no ",item, "in stock")
        }
    }
        
    }
    myBill()*/
//----------------exercice 5------------------
// function changeEnough(itemPrice, amountOfChange){
//     const som=calculsom( amountOfChange)
//     if (som> itemPrice || som===itemPrice){
//         console.log(" you can afford it")
//         return true
//     }
//     else{
//         console.log("you can't afford it")
//         return false
//     }
// }
// function calculsom(arr){
//     let som=0
//     for (let i = 0; i < arr.length; i++) {
//       let coinValue
//       const numberOfCoins=arr[i]
//       if (i===0){ coinValue=0.25}
//       if (i===1){ coinValue=0.10}
//       if (i===2){ coinValue=0.05}
//       if (i===3){ coinValue=0.01}
//       console.log("we have", numberOfCoins,"coins that have a value of" ,coinValue)
//     som=som+numberOfCoins*coinValue        
//     }
//     console.log("you own",som)
//     return som
// }
//----------------------Exercice 6-----------------------
//1
function hotelCost() {
    let prixParNuit = 140;
    let nombreNuits = 0;
  
    while (isNaN(nombreNuits) || nombreNuits <= 0) {
      let result = prompt("Combien de nuits souhaitez-vous séjourner à l'hôtel?");
      nombreNuits = parseInt(result);
    }
  
    var prixTotal = prixParNuit * nombreNuits;
    return prixTotal;
  }
  //2
  function planeRideCost() {
    let destination = "";
  
    while (typeof destination !== "string" || destination.trim() === "") {
      destination = prompt("Quelle est votre destination?");
    }
  
    destination = destination.trim().toLowerCase();
  
    switch (destination) {
      case "londres":
        return 183;
      case "paris":
        return 220;
      default:
        return 300;
    }
  }
  
  let prixVol = planeRideCost();
console.log("Le prix du vol vers votre destination est de " + prixVol + "$.");
//3
function rentalCarCost() {
    let prixParJour = 40;
    let nombreJours = 0;
  
    while (isNaN(nombreJours) || nombreJours <= 0) {
      let Input = prompt("Combien de jours souhaitez-vous louer la voiture?");
      nombreJours = parseInt(Input);
    }
  
    let prixTotal = prixParJour * nombreJours;
  
    if (nombreJours > 10) {
      let reduction = prixTotal * 0.05;
      prixTotal -= reduction;
    }
  
    return prixTotal;
  }
  let prixLocation = rentalCarCost();
console.log("Le prix total de la location de la voiture est de " + prixLocation + "$.");
//4
function totalVacationCost() {
    let prixVol = planeRideCost();
    let prixHotel = hotelCost();
    let prixLocationVoiture = rentalCarCost();
  
    let coutTotal = prixVol + prixHotel + prixLocationVoiture;
  
    console.log("Le coût des billets d'avion est de " + prixVol + "$.");
    console.log("Le coût de l'hôtel est de " + prixHotel + "$ par nuit.");
    console.log("Le coût de la location de voiture est de " + prixLocationVoiture + "$ par jour.");
  
    return coutTotal;
  }
  
  totalVacationCost();
  

  

  
