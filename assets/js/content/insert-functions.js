import Renders from "./render.js"

function insertShirtsIntoHtml(shirtList) {
    const list = document.querySelector(".lastOrder-list")
    list.innerHTML = Renders.convertArrayIntoHtml(shirtList)
    insertAcceptOrder()
}
function acceptOrder() {
    let random = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min)
    var bar1 = new ldBar("#myItem1");
    bar1.set(0)
    const resposta = confirm("Deseja confirmar a entrega?")
    const loading = document.querySelector(".loading")
    const blur = document.querySelector(".blur")
    if (resposta) {
        blur.classList.toggle("hidden")
        loading.classList.toggle("hidden")
        document.body.style.overflow = "hidden"
        bar1.set(50)
        setTimeout(() => {
            bar1.set(random())
        }, 1300)

        setTimeout(() => {
            bar1.set(random())
        }, 2500)

        setTimeout(() => {
            bar1.set(100)
        }, 3800)

        setTimeout(() => {
            blur.classList.toggle("hidden")
            loading.classList.toggle("hidden")
            document.body.style.overflow = "initial"
        }, 4700)
    }
}

function insertAcceptOrder() {
    const orders = document.querySelectorAll(".lastOrder-item")
    orders.forEach(order => order.onclick = acceptOrder)

}

export { insertShirtsIntoHtml }