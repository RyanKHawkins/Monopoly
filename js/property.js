
class Property {
    constructor(name, displayName, group, purchasePrice, mortgagePrice, rentStructure) {
        this.name = name;
        this.displayName = displayName;
        this.group = group;
        this.purchasePrice = purchasePrice;
        this.owner = "";
        this.isOwned = this.owner ? true : false;
        this.rentStructure = rentStructure;
        this.houseCount = 0;
        this.hotelCount = 0;
        allProperties.push(this);
    }
}

class Utility extends Property {
    super() {}
}

export const allProperties = [];

export const groups = [
    {
        name: "Brown",
        color: "saddlebrown",
        properties: [
            new Property("mediterranean_ave", "Mediterranean Ave", "Brown", "computer"),
            new Property("baltic_ave", "Baltic Ave", "Brown", "Ryan")
        ]
    },
    {
        name: "Light Blue",
        color: "skyblue",
        properties: []
    },
    {
        name: "Purple",
        color: "darkorchid",
        properties: []
    }, 
    {
        name: "Orange",
        color: "orange",
        properties: [],
    },
    {
        name: "Red",
        color: "red",
        properties: [],
    },
    {
        name: "Yellow",
        color: "yellow",
        properties: [],
    },
    {
        name: "Green",
        color: "green",
        properties: [],
    },
    {
        name: "Dark Blue",
        color: "darkblue",
        properties: [],
    },
    {
        name: "Stations",
        properties: []
    },
    {
        name: "Utilities",
        properties: [
            new Utility("electric_company", "Electric Company", "Utilities", "Ryan")
        ]
    }
]

function findGroupByProperty(property) {
    let group = groups.find(group => group.properties.map(p => p.name).includes(property));
    return group
}

export function isMonopoly(group) {
    let groupProperties = groups.find(g => g.name == group).properties;
    console.log("groupProperties:  ", groupProperties.map(p => p = p.owner))
    return groupProperties.every(property => property.owner == groupProperties[0].owner && property.owner)
}

export function isInMonopoly(property) {
    let group = findGroupByProperty(property);
    return isMonopoly(group.name)
}