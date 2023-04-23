// -------------1er mehode-------------
/*const max=6;
let star="";
for(let i=0;i<max;i++){
    star=star+ " * "
    console.log(star)
}*/
//--------------2eme methode------------
const max=6;
for(let i=0;i<max;i++){
    const num=i+1
    let ligne=""
    for(let j=0;j<num;j++){
        ligne=ligne+ " * "
    }
    console.log(ligne)
}