import axios from "axios"

const baseURL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8888/' : 'http://104.248.235.227:8888/';

export default axios.create({
    baseURL: baseURL,
    token: localStorage.getItem('token')
})