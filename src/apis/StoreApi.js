import axios from "axios"

export const URL_API = "https://api.spacexdata.com/v3";


export function AXIOS () {
    return axios.create({
        baseURL: URL_API,
    })
}