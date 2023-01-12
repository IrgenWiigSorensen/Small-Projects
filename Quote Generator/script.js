
let apiQuotes = [];

// Show New Quote
function newQuote() {
    //Pick a random quote from ApiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]; 
}

//Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert(error);
    }
}

//On Load
getQuotes();


//Same but using array that is saved locally
/* function newQuote() {
    //Pick a random quote from localQuotes which is a local API. 
    const quote = localQuotes[Math.floor(Math.random() * apiQuotes.length)]; 
}

newQuote(); */