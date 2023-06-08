let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values);
    // expected output: Array [3, 42, "foo"]
  })
  .catch(error => {
    console.log(error);
  });
  //Promise.all est une fonction qui prend en argument un tableau de promesses
  //Lorsque toutes les promesses sont résolues, la fonction then est appelée avec un tableau contenant les valeurs résolues
  //Si l'une des promesses est rejetée, la fonction catch est appelée
