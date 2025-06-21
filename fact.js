function getFact(){

    const starter = [
        "Sure! Here's an interesting fact for you:",
        "Did you know this?",
        "Here's a fun fact:",
        "Let me share a fact with you:",
        "Here's something you might find intriguing:"
    ]

    const random = Math.floor(Math.random() * starter.length);

    if(Math.random < 0.5) {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
            .then(response => response.json())
            .then(data => {
                let source = " (Source: uselessfacts.jsph.pl)";
                displayResponse(starter[random] + " " + data.text + source, "bot");
            })
            .catch(error => {
                displayResponse("Sorry, I couldn't retrieve a fact at the moment.", "bot");
        });
    }else{
         fetch('https://api.api-ninjas.com/v1/facts?', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'TfA6Zev28GZ0gT8GS45ZBw==xV2GvbCfVFqA4Fsz',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            let source = " (Source: api-ninjas.com)";
            displayResponse(starter[random] + " " + result[0]["fact"] + source, "bot");
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
   
}