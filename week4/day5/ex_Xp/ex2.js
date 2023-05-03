let div1=document.querySelector("div");
div1.style.backgroundColor="lightblue";

let users=document.querySelectorAll("li")
users[0].style.display="none";//la disparition de la 1er li
//console.log(users[0])
users[1].style.border="1px solid black";
let bd=document.querySelector("body")
bd.style.fontSize="24px"
//bonnus
if(div1==="lightblue"){
    alert(`Bonjour${users[0].textContent} et ${users[1].textContent}`)
}