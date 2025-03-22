/*-- Imports --*/
import {Player} from "../js/player.js"
import {Computer} from "../js/computer.js"
import * as Property from "../js/property.js"

/*-- Constants --*/
const playerDashboard = document.querySelector("#player-dashboard")
const buttons = Array.from(document.querySelectorAll("button"));
const rollButton = document.querySelector("#roll-button");
const endTurnButton = document.querySelector("#end-turn-button")

/*-- Event Listeners --*/
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target)
    })
})

rollButton.addEventListener("click", () => {
    let dice = currentPlayer.rollDice();
    endTurnButton.disabled = false;
    if (dice[0] == dice[1]) {
        rollCount++;
    } else {
        rollButton.disabled = true;
    }
})
endTurnButton.addEventListener("click", () => {
    endTurnButton.disabled = true;
    rollButton.disabled = false;
    endTurn();
}
)



let players = [new Computer("computer")];
// let player = new Player(window.prompt("What's your name?".trim()))
let player = new Player("Ryan")
let rollCount = 0;

players.unshift(player)
console.log(players)

player.buyProperty()

let currentPlayer = players[0];

function switchPlayer() {
    let index = players.indexOf(currentPlayer);
    let newIndex = index + 1
    currentPlayer = players[newIndex % players.length];
    console.log(`Current player is ${currentPlayer.name}.`);
}

function endTurn() {
    switchPlayer();
    rollCount = 0;
}



Property.groups.forEach(group => {
    let div = document.createElement("div");
    div.classList.add(".property-groups")
    div.style.backgroundColor = group.color;
    playerDashboard.append(div);
    console.log(playerDashboard)
})