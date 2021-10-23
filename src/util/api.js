import axios from "axios"

// const baseURL = 'http://104.248.235.227:8888/';
const baseURL = 'http://192.168.1.52:8888/';


export default axios.create({
    baseURL: baseURL,
    token: localStorage.getItem('token')
})