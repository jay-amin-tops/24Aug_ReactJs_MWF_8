import axios from "axios";
export default axios.create({
    baseURL: "http://localhost/api/",
    headers: {
        "Content-type": "application/json"
    }
})