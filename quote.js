function getQuote() {

    const starter = [
        "Sure! Here's a quote for you:",
        "Here's an inspiring quote:",
        "Let me share a motivational quote with you:",
        "Here's a thought-provoking quote:",
        "Here's a quote to inspire you:"
    ]

    const random = Math.floor(Math.random() * starter.length);

    if(Math.random() < 0.5) {
        fetch('https://api.api-ninjas.com/v1/quotes', {
            method: 'GET',
            headers: { 'X-Api-Key': 'TfA6Zev28GZ0gT8GS45ZBw==xV2GvbCfVFqA4Fsz' }
        })
        .then(response => response.json())
        .then(result => {
            let source = " (Source: api-ninjas.com)";
            displayResponse(starter[random] + " " +result[0]['quote'] + " -" + result[0]['author'] + source, "bot");
        })
        .catch(error => {
            console.error('Error: ', error);
        });
    }else{
        fetch('https://bibhuticoder.github.io/samaya-quotes-api/quotes/metadata.json').then(r => r.json()).then(metadata => {
            let randomPage = Math.floor(Math.random() * metadata.totalPages) + 1;
            fetch('https://bibhuticoder.github.io/samaya-quotes-api/quotes/' + randomPage + '.json').then(r => r.json()).then(quotesData => {
                let randomIndex = Math.floor(Math.random() * quotesData.length);
                let randomQuote = quotesData[randomIndex];
                if(randomQuote.author === null || randomQuote.author === undefined || randomQuote.author.trim() === "") {
                    randomQuote.author = "";
                }
                let source = " (Source: bibhuticoder.github.io)";
                displayResponse(starter[random] + "\n" + randomQuote.text + randomQuote.author + source, "bot");
            })
        })
    }

    
}