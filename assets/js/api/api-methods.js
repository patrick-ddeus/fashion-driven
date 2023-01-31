import { insertShirtsIntoHtml } from "../content/insert-functions.js"
class ApiMethods{
    constructor(){
        this.url = `https://mock-api.driven.com.br/api/v4/shirts-api/shirts`
    }

    getAllShirst = () =>{
        return axios.get(this.url)
            .then(response => response.data)
            .then(insertShirtsIntoHtml)
    }

    sendShirt = (template) =>{
        return axios.post(this.url, template)
    }
}


export default new ApiMethods()