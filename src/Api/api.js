import axios from "axios"

export const user = {
    async getListAll() {
        let result = await axios.get("http://localhost:5000/users/");
        return result.data;
    }
}

export const product = {
    async getListAll() {
        let result = await axios.get("http://localhost:5000/products/");
        return result.data;
    }
}