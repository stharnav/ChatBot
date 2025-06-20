
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
    }else if(message.includes("how") && message.includes("you")){
        displayResponse("I'm great, How can I help you!", "bot");
    }else if(message.includes("help") || message.includes("support")){
        displayResponse("Sure! What do you need help with?", "bot");
    } else if(message.includes("bye") || message.includes("goodbye")){
        displayResponse("Goodbye! Have a great day!", "bot");
    } else if(message.includes("thank you") || message.includes("thanks")){
        displayResponse("You're welcome! If you have any more questions, feel free to ask.", "bot");
    }else if(message.includes("quote") || message.includes("saying") || message.includes("inspire") || message.includes("motivate") || message.includes("inspiration")){
        getQuote();
    } else if(message.includes("joke") || message.includes("funny")){
        getJoke();
    } else if(message.includes("weather")){
        getWeatherData();
    } else if(message.includes("news")){
        displayResponse("I can't provide news updates, but you can check your favorite news website or app.", "bot");
    } else {
        displayResponse("I'm not sure how to respond to that. Can you please rephrase?", "bot");
    }
}


function displayResponse(message, response) {
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

