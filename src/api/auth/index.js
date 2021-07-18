import Axios from "../axios";

export const registerUser = (options) => {
    return Axios.post('/account/register/', options)
}