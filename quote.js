function getQuote() {

    const starter = [
        "Sure! Here's a quote for you:",
        "Here's an inspiring quote:",
        "Let me share a motivational quote with you:",
        "Here's a thought-provoking quote:",
        "Here's a quote to inspire you:"
    ]

    const random = Math.floor(Math.random() * starter.length);

     fetch('https://bibhuticoder.github.io/samaya-quotes-api/quotes/metadata.json').then(r => r.json()).then(metadata => {
            let randomPage = Math.floor(Math.random() * metadata.totalPages) + 1;
            fetch('https://bibhuticoder.github.io/samaya-quotes-api/quotes/' + randomPage + '.json').then(r => r.json()).then(quotesData => {
                let randomIndex = Math.floor(Math.random() * quotesData.length);
                let randomQuote = quotesData[randomIndex];
                if(randomQuote.author === null || randomQuote.author === undefined || randomQuote.author.trim() === "") {
                    randomQuote.author = "";
                }
                displayResponse(starter[random] + "\n" + randomQuote.text + "\t - " + randomQuote.author, "bot");
            })
        })
}