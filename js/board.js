import * as Property from "./property.js"
import { currentPlayer } from "./monopoly.js";

export const boardSquares = [
    "go", "mediterranean_ave", "community_chest", "baltic_ave", "income_tax", "reading_railroad",
];

export function enterSquare(index) {
    let square = boardSquares[index];
    if (Property.allProperties.map(property => property.name).includes(square)) {

        let property = Property.allProperties.find(p => p.name == square)
        console.log(property);

    } else if (square == "community_chest") {

        // drawCard("community_chest")

    } else if (square == "chance") {

        // drawCard("chance")
        
    }
}