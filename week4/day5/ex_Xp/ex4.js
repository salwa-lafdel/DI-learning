const allboks=[]
const book1={
    title:"harry potter",
    author:"j.k rowling",
    alreadyRead:false
}
const book2={
    title:" la boite a merveille",
    author:"ahmed sefrioui",
    alreadyRead:true
}
allboks.push(book1,book2)
console.log(allboks)
const table=document.createElement("table")
table.innerHTML=`
<thead>
<tr>
<th > my book list</th >
</tr>
</thead>
<tbody>
<tr>
<td>${book1.title} writen by${book1.author}</td>
<td>${book1.alreadyRead}</td>
</tr>
<tr>
<td>${book2.title} writen by${book2.author}</td>
<td>${book2.alreadyRead}</td>
</tr>
</tbody>
`
const boolist=document.querySelector("listBooks")
console.log(boolist)
boolist.appendChild(table)