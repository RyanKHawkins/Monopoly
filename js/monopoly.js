/*-- Imports --*/
import {Player} from "./player.js"
import {Computer} from "./computer.js"
import * as Property from "./property.js"
import * as Card from "./cards.js"
import * as Helper from "./helper.js"
import { openModule, closeModule } from "./property_module.js"

/*-- DOM --*/
const playerDashboard = document.querySelector("#player-dashboard")
const messageDisplay = document.querySelector("#message-display")
const buttons = Array.from(document.querySelectorAll("button"));
const rollButton = document.querySelector("#roll-button");
const endTurnButton = document.querySelector("#end-turn-button")

/*-- Initiating Variables --*/

export let players = []
// let player = new Player(window.prompt("What's your name?".trim()))
let rollCount;
let playerCount;
export let currentPlayer

function getPlayers() {
    // Set total number of players
    // let playerCount
    // Give choice between number of humans and computers

    // playerCount = Number(window.prompt("How many human players?").trim())
    // for (let i = 0; i < playerCount; i++) {
    //     let player = window.prompt("Player name?").trim();
    //     players.unshift(new Player(player));
    //     console.log("players:  ", players);
    // }

    return []
}

function newGame() {
    rollCount = 0;
    players = [new Player("Ryan"), new Computer("Computer", false)];

    players.push(...getPlayers());

    currentPlayer = players[0];
    for (let property of Property.allProperties.map(p => p.name)) {
        players[0].buyProperty(property);
    }
    updateDashboard();
    processTurn(currentPlayer);

    console.log(players);
}
newGame()
/*-- Event Listeners --*/
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target)
    })
})

rollButton.addEventListener("click", () => {
    console.log("currentPlayer:  ", currentPlayer)
    let dice = currentPlayer.rollDice();
    endTurnButton.disabled = false;
    Helper.displayMessage(`Rolled a ${dice.join(" and a ")}`)
    if (dice[0] == dice[1]) {
        rollCount++;
        currentPlayer.isJailed = false;
        if (currentPlayer.isJailed) {
            currentPlayer.isJailed = false
        }
        if (rollCount >= 3) {
            currentPlayer.isJailed = true;
            Helper.displayMessage("Rolled 3 doubles in a row.", "Go to jail!")
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

function processTurn(player) {
    console.log("Processed turn");
    if (player.isJailed) {

    }
    return
}

function evaluateDice(dice) {
    console.log(dice);
    return
}

function switchPlayer() {
    let index = players.indexOf(currentPlayer);
    let newIndex = index + 1
    currentPlayer = players[newIndex % players.length];
    Helper.displayMessage();
    processTurn(currentPlayer);
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
                listItem.addEventListener("click", (e) => {
                    openModule(e.target);
                })
                listItem.innerText = property.displayName
                list.append(listItem)
                groupDiv.append(list)
            }
        }
        playerDashboard.append(groupDiv);
    })    
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