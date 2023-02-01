class MountShirt{
    constructor(){
        Object.defineProperty(this, "shirtMontage", {
           writable: false,
           configurable: false,
           value: {}
        })
    }

    montageShirt = (option) => {
        const datasetInfo = option.dataset
        const category = datasetInfo.category
        this.shirtMontage[category] = datasetInfo.value
    }

    getRemainsShirts = () =>{
        return Object.keys(this.shirtMontage).reduce((acc, value) => value ? acc - 1 : acc, 3)
    }

    getShirtMontageInfo = () =>{
        return {...this.shirtMontage}
    }

    getLastShirt = (category) =>{
        return this.shirtMontage[category]
    }
    
    deleteLastShirt = (category) =>{
        delete this.shirtMontage[category]
    }
}


export default new MountShirt
