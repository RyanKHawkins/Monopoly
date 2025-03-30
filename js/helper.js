import { currentPlayer } from "./monopoly.js";

const messageDisplay = document.querySelector("#message-display")

export function displayMessage(...messages) {
    console.log("messages", messages);
    messageDisplay.innerHTML = `<p><i>${currentPlayer.name}</i></p>`;
    for (let message of messages) {
        messageDisplay.innerHTML += `<p>${message}</p>`;
    }

    // messageDisplay.textContent = message;
}