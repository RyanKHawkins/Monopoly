const messageDisplay = document.querySelector("#message-display")

export function displayMessage(message) {
    messageDisplay.textContent = message;
}