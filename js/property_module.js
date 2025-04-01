import * as Property from "./property.js"
const module = document.querySelector("#module")


export function openModule(property) {
    module.innerHTML = "";
    module.style.display = "initial"

    console.log(module)

    let propertyObj = Property.getPropertyObject(property.innerText);
    let groupColor = propertyObj.group.toLowerCase() || black;

    console.log(propertyObj)
    console.log(groupColor)
    let header = document.createElement("p");
    header.style.backgroundColor = groupColor;
    header.classList = "module-headers";
    // header.onclick = closeModule;
    
    let span = document.createElement("span");
    span.id = "close-button"
    span.innerText = "X";
    span.addEventListener("click", closeModule);
    header.append(span)

    module.append(header);

    let card = document.createElement("div");
    card.classList = "property-displays"

    card.innerHTML += `<p class="property-titles">${propertyObj.displayName}</p>`

    module.append(card)

    // setTimeout(closeModule, 1000);
}

export function setModule(property) {

}

export function closeModule() {
    module.style.display = "none"
    console.log(`closed module`)
}