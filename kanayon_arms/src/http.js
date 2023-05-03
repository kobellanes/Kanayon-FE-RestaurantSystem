
import axios from "axios";

export default axios.create({
    baseURL: "http://localhost/Database_Kanayon/Kanayon_be/kanayon-be/public/api/",
    headers: {
        "Content-Type": "Application/json"
    }
});