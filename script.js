
function sendMessage(){
    let message = document.getElementById("user-input").value;
    document.getElementById("user-input").value = ""; // Clear input field
    if(!message) return;

    message = message.trim();
    message = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    message = message.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    
    displayResponse(message, "user");
    message = message.toLowerCase();

    
    calculateMessageType(message);  
}

function calculateMessageType(message){
    if(message.includes("hello") || message.includes("hi")){
        displayResponse("Hello! How can I assist you today?", "bot");
    }else if(message.includes("love") && message.includes("you")){
        displayResponse("I love you too", "bot");
    }else if(message.includes("how") && message.includes("you")){
        displayResponse("I'm great, How can I help you!", "bot");
    }else if(message.includes("what") && message.includes("do") && message.includes("you") && message.includes("do")){
        displayResponse("I'm here to assist you with various tasks, tell jokes, give you inspirational quotes, and provide fun information. How can I help you today?", "bot");
    }else if(message.includes("who") || message.includes("your") || message.includes("you") || message.includes("name")){
        displayResponse("I'm your friendly chatbot! You can call me AskJPT.", "bot");
    }else if(message.includes("help") || message.includes("support")){
        displayResponse("Sure! What do you need help with?", "bot");
    } else if(message.includes("bye") || message.includes("goodbye")){
        displayResponse("Goodbye! Have a great day!", "bot");
    } else if(message.includes("thank you") || message.includes("thanks")){
        displayResponse("You're welcome! If you have any more questions, feel free to ask.", "bot");
    }else if(message.includes("quote") || message.includes("saying") || message.includes("inspire") || message.includes("motivate") || message.includes("inspiration")){
        getQuote();
    } else if(message.includes("intereating") || message.includes("fun fact") || message.includes("did you know") || message.includes("fact")){
        getFact();
    }else if(message.includes("joke") || message.includes("fun") || message.includes("laugh") || message.includes("humor") || message.includes("comedy") || message.includes("entertain")){
        getJoke();
    }else if(message.includes("time") || message.includes("clock") || message.includes("current time")){
        let currentTime = new Date().toLocaleTimeString();
        displayResponse("The current time is: " + currentTime, "bot");  
    } else if(message.includes("date") || message.includes("today's date") || message.includes("current date")){        
        let currentDate = new Date().toLocaleDateString();
        displayResponse("Today's date is: " + currentDate, "bot");
    } else if(message.includes("weather")){
        getWeatherData();
    } else if(message.includes("news")){
        displayResponse("I can't provide news updates, but you can check your favorite news website or app.", "bot");
    } else {
        displayResponse("I'm not sure how to respond to that. Can you please rephrase?", "bot");
    }
}


function displayResponse(message, response) {

    if(document.getElementById("intro").style.display !== "none") {
        document.getElementById("intro").style.display = "none";
    }
    let chatBox = document.getElementById("message-container");
    let div = document.createElement("div");
    let messageDiv = document.createElement("div");
    div.className = "message";
    if (response == "user") {
        div.className = "message-right";
        messageDiv.className = "message-user";
        messageDiv.innerHTML = message;
        chatBox.appendChild(div);
        div.appendChild(messageDiv);
    } else {
        messageDiv.className = "message-bot";
        chatBox.appendChild(div);
        div.appendChild(messageDiv);

        // Typing animation for bot
        let i = 0;
        function typeWriter() {
            if (i < message.length) {
                messageDiv.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, 30); // Adjust speed here
            }
        }
        typeWriter();
    }
    return true;
}

