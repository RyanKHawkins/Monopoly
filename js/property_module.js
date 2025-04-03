import * as Property from "./property.js"
import * as Helper from "./helper.js"
const module = document.querySelector("#module")


export function openModule(property) {
    module.innerHTML = "";
    module.style.display = "initial"

    console.log(module)

    // Header
    let propertyObj = Property.getPropertyObject(property.innerText);
    let groupColor = propertyObj.group.toLowerCase() || black;

    let header = document.createElement("p");
    header.style.backgroundColor = groupColor;
    header.classList = "module-headers";

    let span = document.createElement("span");
    span.id = "close-button"
    span.innerText = "X";
    span.addEventListener("click", closeModule);
    header.append(span)

    module.append(header);


    let card = document.createElement("div");
    card.classList = "property-displays"

    card.innerHTML += `<p class="property-titles">${propertyObj.displayName}</p>`

    console.log(propertyObj.type)
    if (propertyObj.type == "rental") {
        let rentDiv = document.createElement("div");
        rentDiv.id = "rent-div"
        for (let [num, cost] of Object.entries(propertyObj.rentStructure)) {
            console.log(num, cost)
            let p = document.createElement("p");
            p.innerText = `${num}:  ${Helper.formatCurrency(cost)}`
            rentDiv.append(p)
        }
        card.append(rentDiv);
        card.innerHTML += `<p>Purcase:  ${Helper.formatCurrency(propertyObj.purchasePrice)}</p>`;
        card.innerHTML += `<p>Mortgage:  ${Helper.formatCurrency(propertyObj.mortgagePrice)}</p>`
    }

    module.append(card)

}

export function setModule(property) {

}

export function closeModule() {
    module.style.display = "none"
    console.log(`closed module`)
}