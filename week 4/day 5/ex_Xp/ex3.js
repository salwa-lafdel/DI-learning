let navb=document.getElementById("navBar");
console.log(navb)
navb.setAttribute("id","socialNetworkNavigation")//changement de id


let lii=document.createElement("li");
let lagout=document.createTextNode("lagout")
lii.appendChild(lagout)
console.log(lii)

let ull=navb.firstElementChild
console.log(ull)
ull.appendChild(lii)