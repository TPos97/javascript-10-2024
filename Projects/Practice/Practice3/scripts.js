const quotes = [
    "George R.R. Martin has the best novelistic universe.",
    "Edgar Allen Poe is my favorite writer.",
    "H.P. Lovecraft was an amazing writer.",
    "Tolkien had amazing character writing.",
    "Dostovesky knew how to inspire through literature.",
    "Neil Hilborn is an amazing poet."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote");

function generateQuote(){

    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }

    while(true){

        const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
        
}