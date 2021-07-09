import axios from "axios";


let local=`http://localhost:1337`
let staging=null

export default axios.create({
    baseURL:local
})