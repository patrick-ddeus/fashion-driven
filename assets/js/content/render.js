class Renders {
    convertArrayIntoHtml = (shirtList) => {
        return shirtList.reduce((accumulator, {id, image, owner, model }) => {
            accumulator += `
            <li class="lastOrder-item" id="lastOrder-${id}">
                <img src="${image}" alt="${model}" onerror="this.src='./assets/img/Image_default.png'" >
                <p><strong>Criador</strong>: ${owner}</p>
            </li>
            `

            return accumulator
        }, "")
    }
}

export default new Renders()