 let quote = document.getElementById("quote");
 let author = document.getElementById("author");
 let btn = document.getElementById("btn");
 let intervalId;

 const url = "https://api.quotable.io/random";

 let getQuote = () => {
     fetch(url)
         .then((data) => data.json())
         .then((item) => {
             quote.innerText = item.content;
             author.innerText = item.author;
         });
 };

 let changeQuoteAutomatically = () => {
     getQuote();
     intervalId = setTimeout(changeQuoteAutomatically, 20000); // Change quote every 20 seconds (20000 milliseconds)
 };

 window.addEventListener("load", () => {
     getQuote(); // Load initial quote on page load
     intervalId = setTimeout(changeQuoteAutomatically, 20000); // Start changing quotes automatically after 20 seconds
 });

 btn.addEventListener("click", getQuote);