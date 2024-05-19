var generatebutton = document.querySelector(".generate");
var tweetbutton = document.querySelector(".tweet");
var quote = document.querySelector(".quote");
var author = document.querySelector(".author");

async function getquote(){
    var datacol = await fetch("https://api.quotable.io/random?maxLength=100&minLength=20");
    var quotecol = await datacol.json();
    console.log(quotecol);
    var quotecontent = quotecol.content;
    var authorname = quotecol.author;
    quote.innerHTML = quotecontent;
    author.innerHTML = "<span style='color:blue'> - </span>" + authorname;
}
getquote();
async function posttweet(){
    var datacol = await fetch("https://api.quotable.io/random?maxLength=100&minLength=20");
    var quotecol = await datacol.json();
    console.log(quotecol);
    var quotecontent = quotecol.content;
    var authorname = quotecol.author;
    window.open("https://twitter.com/intent/tweet?text=" + quotecontent + " - " + authorname);
}
