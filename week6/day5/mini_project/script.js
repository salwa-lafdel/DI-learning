let quotes=[
    {
        "id":0,
        "author":"auteur1",
        "quote":"1=La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
       "Likes":0
    },
    {
        "id":1,
        "author":"auteur2",
        "quote":"2=La vie est un gjlmystère qu'il faut vivre, et non un problème à résoudre.",
        "Likes":0
       
    },
    {
        "id":2,
        "author":"auteur1",
        "quote":"3=La vie est unjlkl mystère qu'il faut vivre, et non un problème à résoudre.",
        "Likes":0
    }
];

let section=document.querySelector('section');
let btn=document.getElementById('Générerdevis');
let newqt=null;
btn.addEventListener('click',function(){

   //methode 1
   /* let newQuote=quotes[Math.floor(Math.random() * quotes.length)];
    while(newQuote===newqt){
    ; newQuote=quotes[Math.floor(Math.random() * quotes.length)];
    }
    newqt=newQuote;
    return quotes[newQuote]*/


    
   let newQuote=quotes[Math.floor(Math.random() * quotes.length)];
    section.textContent=newQuote.quote
    //ou bien
    let quote=quotes.find((x)=> x.id ==newQuote.id)
    console.log(quote)

    console.log(Math.floor(Math.random() * quotes.length)) //pour afficher la position de quote afficher
    span[3].textContent=quote.Likes //pour initialise les nombres de like a 0 lorsqu'on génére une nouvelle devise
})

let citation=document.getElementById('text1');
let auteur=document.getElementById('text2');
let bntAjout=document.getElementById('bntAjout');
let bntLike=document.getElementById('bntLike');

bntAjout.addEventListener('click',function(e){
    e.preventDefault()
    let newCitation={
            "id":quotes.length,
            "author":auteur.value,
            "quote":citation.value,
            "Likes":0
            
        }
        quotes.push(newCitation)
        auteur.value="",citation.value=""//pour vider l'input
        console.log(quotes)
  
}
)
//avec espace
let span=document.querySelectorAll('span');
let avec_espace=document.getElementById('btnCalcul');
avec_espace.addEventListener('click',(e)=>{
    e.preventDefault()   
    span[0].textContent=(section.textContent).length
})

//sans espace
let sans_espace=document.getElementById('btnCalcul2');
sans_espace.addEventListener('click',(e)=>{
    e.preventDefault()
    const str = section.textContent.replace(/ /g,'');
    span[1].textContent=str.length
    console.log(str);

})
//nombre des mots
let Nombre_mot=document.getElementById('btnCalcul3');
Nombre_mot.addEventListener('click',(e)=>{
    e.preventDefault();
    
   const quoteText = section.textContent.split("-")[0].trim();
   span[2].textContent=quoteText.split(" ").length

console.log(`The quote "${quoteText}"`);
})

//nombre des j'aime
let Nombre_jaime=document.getElementById('bntLike');
Nombre_jaime.addEventListener('click',(e)=>{
 e.preventDefault();    

  const quoteText = section.textContent.split("-")[0].trim();
  
  const quote=quotes.find((q) => q.quote === quoteText);
  span[3].textContent=quote.Likes
   
  if (quote) {
    quote.Likes++;
      console.log(`You liked the quote "${quoteText}" (${span[3].textContent.likes} likes).`);
    }

})//partie 3 --------------------------------------------
const citationEl = document.getElementById("citation"); // s'affiche ici
		const prevBtn = document.getElementById("prevBtn");
		const nextBtn = document.getElementById("nextBtn");

		let filteredQuotes = quotes;
		let Index = -1;
//1
		function filterQuotes() {
			const author = document.getElementById("author").value.trim().toLowerCase();
			if (author === "") {
				filteredQuotes = quotes;
			} else {
				filteredQuotes = quotes.filter(q => q.author.toLowerCase() === author);
			}
			Index = -1;
			showQuote();
		}
//les boutton
		function showQuote() {
			if (filteredQuotes.length === 0) {
				citationEl.textContent = "Aucune citation trouvée.";
				prevBtn= true;
				nextBtn = true;
			} else {
				Index = (Index + filteredQuotes.length) % filteredQuotes.length;
				const quote = filteredQuotes[Index];
				citationEl.textContent = `"${quote.quote}" - ${quote.author}`;
				prevBtn.disabled = Index === 0;      //une fois il passe 3 les boutton (disabled)
				nextBtn.disabled = Index === filteredQuotes.length - 1;
			}
		}
     const btnfil=document.getElementById("btnfil");
     btnfil.addEventListener("click", e  => {
			e.preventDefault();
			filterQuotes();
		});

		prevBtn.addEventListener("click", () => {
			Index--;
			showQuote();
		});

		nextBtn.addEventListener("click", () => {
			Index++;
			showQuote();
		});





































 // filtrer les citations par auteur

// exemple de liste d'objets citation

  
 /* function filtrerCitationsParAuteur(nomAuteur) {
    // convertir le nom de l'auteur en minuscules pour comparer sans tenir compte de la casse
    nomAuteur = nomAuteur.toLowerCase();
  
    // filtrer les citations par nom d'auteur correspondant
    let citationsFiltrees = quotes.filter(citation => citation.auteur.toLowerCase() === nomAuteur);
  
    // renvoyer toutes les citations filtrées
    return citationsFiltrees;
  }


 /*var filteredQuotes = quotes.filter(function(quote) {
    return quote.auteur.toLowerCase() === auteur.toLowerCase();//en utilisant toLowerCase()pour comparer les chaînes de caractères sans tenir compte de la casse)
  });
    // afficher les citations filtrées
    var quotesDiv = document.getElementById("quotes");
    quotesDiv.innerHTML = "";
    filteredQuotes.forEach(function(quote) {
      var quoteDiv = document.createElement("div");
      quoteDiv.innerHTML = "<p>" + quote.quote + "</p><p>- " + quote.auteur + "</p>";
      quotesDiv.appendChild(quoteDiv);
    });*/
  
