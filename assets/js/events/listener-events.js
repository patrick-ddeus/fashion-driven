import { insertEventsOnShirts, getRemains } from "./on-mount-shirt.js"
import { toggleLoginPage , toggleLoading, createError , stringToBoolean } from "../utils/utils.js"
import BodyPost from "../db/user-data.js"
import MountShirt from "../db/mount-shirt-data.js"
import PersistUser from "../db/persist-user.js"
import ApiMethods from "../api/api-methods.js"

class StartEvents {
    constructor() {
        this.leftArrow = document.querySelector(".leftArrow")
        this.rightArrow = document.querySelector(".rightArrow")
        this.scrollableList = document.querySelector(".lastOrder-list")

        this.formInput = document.getElementById("orderForm-input")
        this.formButton = document.querySelector(".orderForm-button")

        this.formLogin = document.querySelector(".formLogin")
        this.formLoginBtn = document.querySelector(".loginButton")
        this.usernameInput = document.getElementById("usernameInput")
    }

    listenerEvents = () => {

        this.rightArrow.addEventListener("click", _ => {
            const limit = this.scrollableList.scrollWidth - this.scrollableList.clientWidth
            this.scrollableList.scroll({
                left: limit,
                behavior: 'smooth'
            });
        })

        this.leftArrow.addEventListener("click", _ => {
            this.scrollableList.scroll({
                left: 0,
                behavior: 'smooth'
            });
        })

        this.formInput.addEventListener("keypress", _=>{
            getRemains()
        })
        
        this.formButton.addEventListener("click", e=>{
            let valid = true
            const totalSelected = MountShirt.getRemainsShirts()
            e.preventDefault()
            document.querySelector(".textError")?.remove()
            document.querySelector(".inputError")?.classList.remove("inputError")

            
            let findImageInUrl = /^((http|https):\/\/)[\w|\.|\/|\-|?|=]+(\.jpg|\.jpeg|\.png|\.bmp|\.svg|\.webp)$/gm

            if(!(findImageInUrl.test(this.formInput.value)) || totalSelected !== 0){
                createError(this.formInput, "Verifique se foi inserido uma URL de imagem válida ou se todos os itens foram selecionados")
                valid = false
            }

            if(!(stringToBoolean(this.userIsPersist.getUserStatus()))){
                alert("Você foi deslogado, por favor logue novamente")
                location.reload()
                return
            }
            if(valid){
                BodyPost.setImage(this.formInput.value)
                BodyPost.setShirtSelected(MountShirt.getShirtMontageInfo())
                ApiMethods.sendShirt(BodyPost.getBodyPost())
                    .then(() => alert("Encomenda Enviada!"))
                    .then(() => ApiMethods.getAllShirst())
            }
        })

        this.formLogin.addEventListener("submit", e=>{
            toggleLoading()
            e.preventDefault()
            setTimeout(() =>{
                toggleLoading()
                toggleLoginPage()
                document.body.style.overflow = "initial"
            }, 1000)
            BodyPost.setUserName(this.usernameInput.value)
            this.userIsPersist = new PersistUser(35 * 1000)
            this.userIsPersist.persistTime()
        })
    }
    

    onMountShirtClick = () => {
        insertEventsOnShirts()
    }
}

export default new StartEvents