document.addEventListener("DOMContentLoaded", function () {
    const chatForm = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");
    const chatWindow = document.getElementById("chat-window");

    chatForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const text = userInput.value.trim();
        if (!text) return;
        appendMessage("user", text);
        userInput.value = "";
        setTimeout(() => {
            appendMessage("bot", "Hello! How can I help you?");
        }, 600);
    });

    function appendMessage(sender, message) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `message ${sender}`;
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.textContent = message;
        msgDiv.appendChild(bubble);
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});
