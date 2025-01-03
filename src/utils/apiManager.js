import axios from "axios";
const API_BASE_URL = process.env.API_BASE_URL;

export function callApi ({path, method}) {
    return axios({
        url: `${API_BASE_URL}${path}`, method
    })
}