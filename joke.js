function getJoke() {

    const starter = [
        "Sure! Here's a joke for you:",
        "Here's a funny joke:",
        "Let me share a humorous joke with you:",
        "Here's a light-hearted joke:",
        "Here's a joke to make you smile:"
    ]

    let source = " (Source: api-ninjas.com)";
    const random = Math.floor(Math.random() * starter.length);
    fetch('https://api.api-ninjas.com/v1/jokes?limit=', {
        method: 'GET',
        headers: { 'X-Api-Key': 'TfA6Zev28GZ0gT8GS45ZBw==xV2GvbCfVFqA4Fsz' }
    })
    .then(response => response.json())
    .then(result => {
        displayResponse(starter[random] + " " +result[0]['joke'] + source, "bot");
    })
    .catch(error => {
        console.error('Error: ', error);
    });
}