const div1=document.getElementById('container');
console.log(div1)

document.querySelector(".list").children[1].textContent="Richard";

const li2=document.querySelectorAll(".list");
li2[1].children[1].remove()//la suuppression de la 2eme li de la 2eme ul

li2.forEach(list=>list.firstElementChild.textContent="salwa")//changement dela 1er li des 2 ul

li2.forEach(list=>list.classList.add("student_list"))// ajout d'un class dans les 2 ul

