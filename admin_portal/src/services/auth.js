import {api} from './api';
const authService = {
    login(username, password){
        return api.call().post('jwt-auth/v1/token', {
            username,
            password
        })
    },
    fetchMe(token){
        const config = "Bearer " +  token;
        const headers= {
            'Authorization': config
        };
        return api.call().get('wp/v2/users/me', 
            {headers : headers}
        )
    }
}
export default authService;