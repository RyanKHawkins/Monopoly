/*-- Imports --*/
import {Player} from "./player.js"
import {Computer} from "./computer.js"
import * as Property from "./property.js"
import * as Card from "./cards.js"
import * as Helper from "./helper.js"

/*-- Constants --*/
const playerDashboard = document.querySelector("#player-dashboard")
const messageDisplay = document.querySelector("#message-display")
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
        currentPlayer.isJailed = false;
        if (currentPlayer.isJailed) {
            currentPlayer.isJailed = false
        }
        if (rollCount >= 3) {
            currentPlayer.isJailed = true;
        }
    } else {
        if (!currentPlayer.isJailed) {

        }
        rollButton.disabled = true;
    }
})

endTurnButton.addEventListener("click", () => {
    endTurnButton.disabled = true;
    rollButton.disabled = false;
    endTurn();
}
)



let players = [new Computer("computer", false)];
// let player = new Player(window.prompt("What's your name?".trim()))
let player = new Player("Ryan")
let rollCount = 0;

players.unshift(player)

export let currentPlayer = players[0];

function switchPlayer() {
    let index = players.indexOf(currentPlayer);
    let newIndex = index + 1
    currentPlayer = players[newIndex % players.length];
    console.log(`Current player is ${currentPlayer.name}.`);
}

function endTurn() {
    switchPlayer();
    rollCount = 0;
    updateDashboard();
}


function updateDashboard() {
    playerDashboard.innerHTML = `<h3>Player:  ${currentPlayer.name}</h3>`;
    if (currentPlayer.isJailed) {
        playerDashboard.innerHTML += "<p>in jail</p>"
    }
    Property.groups.forEach(group => {
        let groupDiv = document.createElement("div");
        groupDiv.classList = "group-divs"

        groupDiv.innerHTML += `<p style="background-color: ${group.color || "lightgray"}" class="group-headers">
            ${group.name}
            </p>`


        let list = document.createElement("ul");
        for (let property of group.properties) {
            if (property.owner == currentPlayer.name) {
                let listItem = document.createElement("li");
                listItem.innerText = property.displayName
                list.append(listItem)
                groupDiv.append(list)
            }
        }
        playerDashboard.append(groupDiv);
    })    
}
updateDashboard()


function moveSpaces(count) {

}


// currentPlayer.ownsGroup("Brown")
// console.log(Property.isMonopoly(Property.allProperties[0].group) && currentPlayer.ownsGroup(Property.allProperties[0].group))

// console.log(Property.isMonopoly("Brown"))
// console.log(Property.isInMonopoly("baltic_ave"));

// currentPlayer.buyProperty(Property.allProperties[2].name)
// currentPlayer.moveSpaces(1)

// console.log(Property.isMonopoly("Purple"))
// currentPlayer.buyProperty("mediterranean_ave")
// console.log(Property.groups[0].properties)