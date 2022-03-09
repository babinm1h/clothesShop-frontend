import axios from "axios"

export const BACKEND_URL = 'http://localhost:7777'


const $instance = axios.create({
    withCredentials: true,
    baseURL: BACKEND_URL
})


const $authInstance = axios.create({
    withCredentials: true,
    baseURL: BACKEND_URL
})



$authInstance.interceptors.request.use(config => {
    if (config.headers) {
        config.headers.authorization = `Bearer ${localStorage.getItem("token")}`
    }
    return config
})


export { $instance, $authInstance }