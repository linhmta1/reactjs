import { apiGithub } from './apiGithub'
export const userService = {
    getListUsers(){
        return apiGithub.get('users',{
            params: {}
        })
    },
    getUserInfo({userName}){
        return apiGithub.get('user/'+ userName,{
            params: {}
        })
    }
}