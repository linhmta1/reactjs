import { BASE_URL } from "../constants";
import axios from "axios";
export const token = localStorage.getItem('token') ?  localStorage.getItem('token') : '';
export const api = {
    call(){
        return axios.create({
            baseURL: BASE_URL,
            headers: {'Authorization': 'Bearer '+token}
          });
    }
}