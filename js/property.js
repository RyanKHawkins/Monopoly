
class Property {
    constructor(name, displayName, group, owner) {
        this.name = name;
        this.displayName = displayName;
        this.group = group;
        this.owner = owner || null;
        this.isOwned = owner ? true : false
        allProperties.push(this)
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
    return groupProperties.every(property => property.owner == groupProperties[0].owner)
}

export function isInMonopoly(property) {
    let group = findGroupByProperty(property);
    return isMonopoly(group.name)
}