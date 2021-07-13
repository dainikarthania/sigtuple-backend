import axios from "axios";


let local=`http://localhost:1337`
let staging=`http://18.218.168.98:1337`

export default axios.create({
    baseURL:staging
})