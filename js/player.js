import * as Property from "../js/property.js"
import { currentPlayer } from "./monopoly.js";

export class Player {
    constructor (name, isHuman = true) {
        this.name = name;
        this.bank = 1500;
        this.properties = [];
        this.utilities = [];
        this.railroads = [];
        this.isHuman = isHuman;
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
    buyProperty(propertyName) {
        let property = Property.allProperties.find(p => p.name == propertyName);
        
        console.log("property: ", property);
        console.log(`${this.name} bought property`)
    }
    ownsGroup(group) {
        let groupProperties = Property.groups.find(g => g.name == group).properties;
        return groupProperties.every(property => property.owner == currentPlayer.name)
    }
}