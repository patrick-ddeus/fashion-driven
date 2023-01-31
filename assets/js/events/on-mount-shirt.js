import MountShirt from "../db/mount-shirt-data.js"

function insertEventsOnShirts() {
    const shirts = document.querySelectorAll(".product-item .product-imageArea")
    shirts.forEach(shirt => shirt.onclick = eventOnShirts)
}

function eventOnShirts(event) {
    const currentElement = event.currentTarget
    const category = currentElement.dataset.category
    const lastShirtCategory = MountShirt.getLastShirt(category)
    const lastShirtSelected = document.querySelector(`[data-value=${lastShirtCategory}]`)

    if (lastShirtSelected == currentElement) {
        currentElement.classList.toggle("selecionado")
        MountShirt.deleteLastShirt(category)
        return
    }

    MountShirt.montageShirt(currentElement)
    selectMontage(lastShirtSelected, currentElement)
    getRemains()
}

function selectMontage(lastShirt, currentShirt) {
    if (lastShirt) {
        lastShirt.classList.remove("selecionado")
    }
    currentShirt.classList.add("selecionado")

}

function getRemains() {
    const formInput = document.getElementById("orderForm-input")
    const formButton = document.querySelector(".orderForm-button")

    if (MountShirt.getRemainsShirts() === 0 && formInput.value) {
        formButton.removeAttribute("disabled")
        formButton.classList.add("active")
    } 

}

export { insertEventsOnShirts, getRemains }