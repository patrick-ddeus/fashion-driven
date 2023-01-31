class BodyPost {
    constructor(){
        Object.defineProperty(this, "bodyPost", {
            writable:false,
            configurable:false,
            value: {
                image:"",
                author:"",
                owner:""
            }
        })
    }

    setUserName = (username) =>{
        this.bodyPost.owner = username
        this.bodyPost.author = username
    }

    setImage = (imageUrl) =>{
        this.bodyPost.image = imageUrl
    }

    setShirtSelected = (shirtObject) =>{
        Object.assign(this.bodyPost, shirtObject)
    }

    getBodyPost = () =>{
        return {...this.bodyPost}
    }
}

export default new BodyPost

