import { api } from './api';

const userService = {
    getUserMe(token){
        console.log(token);
        const config = "Bearer "+ token;
        const headers= {
            'Authorization': config
        };
        return api.call().get('wp/v2/users/me', 
            {headers : headers}
        )
    }
}
export default userService;


