const loginPage = document.querySelector(".loginPage")
function toggleLoginPage() {
    const blur = document.querySelector(".blur")
    blur.classList.toggle("hidden")
    loginPage.classList.toggle("hidden")
}

function toggleLoading() {
    const loading = document.querySelector(".loading")
    loading.classList.toggle("hidden")
    loginPage.classList.toggle("hidden")
    loadingCharge()
}

function loadingCharge() {
    var bar1 = new ldBar("#myItem1");
    bar1.set(100)
}

const createError = (campo, msg) => {
    const div = document.createElement("div")
    div.classList.add("textError")
    div.innerHTML = msg;
    campo.classList.add("inputError");
    campo.insertAdjacentElement("afterend", div)
}

const stringToBoolean = (str) => {

    switch (str.toLowerCase()) {
        case "true":
            return true
            break;
        case "false":
            return false
            break;
        default:
            return undefined
    }
}

export { toggleLoginPage, toggleLoading, createError , stringToBoolean}