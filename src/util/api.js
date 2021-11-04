import axios from "axios"

const baseURL = process.env.NODE_ENV === 'development' ? 'http://192.168.1.52:8888/' : 'http://104.248.235.227:8888/';

export default axios.create({
    baseURL: baseURL,
    token: localStorage.getItem('token')
})