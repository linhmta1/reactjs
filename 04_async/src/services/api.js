import axios from "axios";
export const api =  axios.create({
    baseURL: 'http://api-meme-zendvn-01.herokuapp.com/api/',
});