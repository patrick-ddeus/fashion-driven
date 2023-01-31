class PersistUser {
    constructor(timer) {
        this.setUserStatus(true)
        this.timer = timer
    }

    setUserStatus = (status) => {
        sessionStorage.setItem("logged", status)
        this.isLogged = status
    }

    persistTime = () => {
        if (this.isLogged) {
           this.timeOnline = setTimeout(() => {
                this.setUserStatus(false)
            }, this.timer)
        }
    }

    getUserStatus = () => {
        return sessionStorage.getItem("logged")
    }
}


export default PersistUser