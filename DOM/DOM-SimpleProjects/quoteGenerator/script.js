const button = document.getElementById('button');
const quoteDiv = document.getElementById('quotes');
const txtQuotes = document.getElementById('txt');
const author = document.getElementById('author')


const quotes = [
    { 
        quote: "The play was a great success, but the audience was a disaster.",
        author: "Oscar Wilde"     
    },
    {
        
        quote: "There are risks and costs to a program of action. But they are far less than the long-range risks and costs of comfortable inaction.",
        author: "John F. Kennedy"        
    },
    { 
        
        quote: "Politics is more dangerous than war, for in war you are only killed once.",
        author: "Winston Churchill "        
    },
    { 
        
        quote: "Ambition has its disappointments to sour us, but never the good fortune to satisfy us ",
        author: "Benjamin Franklin"        
    },
    { 
        
        quote: "I am a Millionaire. That is my religion.",
        author: "George Bernard Shaw"        
    }
];

txtQuotes.innerHTML = quotes[1].quote
author.innerHTML = quotes[1].author

let randomQuotes = (quotes) => {
    return Math.floor(Math.random()*quotes.length)
}



button.addEventListener('click', () => {
        let random = randomQuotes(quotes)
        txtQuotes.innerHTML = quotes[random].quote
        author.innerHTML = quotes[random].author
        
   
   
})