//EXERCICE 1
//---------------------part 1---------------
/*const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
console.log(people)//supprimer Greg
people.splice(2,1,"Jason")
console.log(people)// remplacer "James" par "Jason".
people.push("Salwa")
console.log(people)//ajouter mon nom
console.log(people.indexOf("Mary"))
//
const NewPeople=people.slice(1)
console.log(NewPeople);
//
console.log(people.indexOf("Foo"))
const last=people[people.length-1]
console.log(last)*/
//---------------------part 2---------------
/*const people = ["Greg", "Mary", "Devon", "James"];
for(const x of people){
   console.log("this person is :",x)
   if(x==="Mary"){
    break;
   }
}*/
//----------------EXERCICE 2-----------------------------
 /*const colors=["blanc","noir","rose","rouge","violet"]
 const suffixes=["er","eme","eme","eme","eme"];
 for (let i= 1; i < colors.length; i++) {
    console.log(`${i}${suffixes[i]} choie est ${colors[i]}`)
    
 }*/
 //----------------EXERCICE 3-----------------------------
 /*let number=null
 while(number !=10){
    const answer=prompt('plrase enter a number')
    number=Number(answer)
 }*/
 //----------------EXERCICE 4-----------------------------
 /*const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors)
console.log("apparetement on fitst floor:",building.numberOfAptByFloor.firstFloor)
console.log("apparetement on third floor:",building.numberOfAptByFloor.thirdFloor)

console.log("second tenant :", building.nameOfTenants[1]);
console.log("dan has this many rooms :", building.numberOfAptByFloor.dan[0])

const sarahRent=building.numberOfRoomsAndRent.sarah[1]
const davidRent=building.numberOfRoomsAndRent.david[1]
let danrent=building.numberOfRoomsAndRent.dan[1]
if (sarahRent + davidRent > danrent){
    danrent=1200
}
console.log( building)*/
 //----------------EXERCICE 5-----------------------------
 /*const famille={
    pére:"ahmed",
    mére:"nadia",
    fille: "lina"
 }
 for (x in famille){
    console.log( "les clés est", x) }
for ( y in famille){
    console.log( famille[y]) }*/
//----------------EXERCICE 6-----------------------------
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
let sentence=""
for (const x in details){
    sentence=sentence +" "+x+ " "+details[x]
}
console.log(sentence)
//----------------EXERCICE 7-----------------------------
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let acronym=""
const sortedNames= names.sort()
for(const name of sortedNames){
    console.log(name)
    acronym= acronym+name[0]
}
console.log(acronym)