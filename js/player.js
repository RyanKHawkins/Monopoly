import * as Property from "../js/property.js"

export class Player {
    constructor (name, type) {
        this.name = name;
        this.bank = 1500;
        this.properties = [];
        this.utilities = [];
        this.railroads = [];
        this.isHuman = true;
        this.isJailed = false;
    }
    rollDice() {
        let diceRolled = [];
        for (let i = 0; i < 2; i++) {
            diceRolled.push(Math.round(Math.random() * (6 - 1) + 1));
        }
        let total = diceRolled.reduce((acc, curr) => acc + curr, 0);
        console.log(`${this.name} rolled ${diceRolled[0]} and ${diceRolled[1]} equaling ${total}`);
        return [...diceRolled]
    }
    buyProperty() {
        console.log(`${this.name} bought property`)
    }
    endTurn() {}
}