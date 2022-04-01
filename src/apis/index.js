import {URL_API, AXIOS} from "./StoreApi";

class Auth {
    
    async SearchLauchesApi() {
        try {
            const response = await AXIOS().get(`${URL_API}/launches`)
            return response.data
        }catch(error){
            return error
        }
    }
}

export default new Auth();