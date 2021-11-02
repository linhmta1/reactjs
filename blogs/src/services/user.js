import { api } from './api';
const userService = {
    getUserMe(){
        return api.call().get('wp/v2/users/me',
            {} )
    }
}
export default userService;