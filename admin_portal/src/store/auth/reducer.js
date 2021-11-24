import { ACT_LOGIN_SUCCESS, ACT_LOGOUT } from './action'
import { ACCESS_TOKEN } from '../../constants';
const initState = {
    token: localStorage.getItem(ACCESS_TOKEN)? localStorage.getItem(ACCESS_TOKEN) : '',
    currentUser: null,
}
function authReducer(authState=initState, action){
    switch(action.type){
        case ACT_LOGIN_SUCCESS:
            localStorage.setItem(ACCESS_TOKEN, action.payload.token ? action.payload.token : '');
            return {
               token: action.payload.token,
               currentUser: action.payload.user
            }
        case ACT_LOGOUT:
            localStorage.removeItem(ACCESS_TOKEN);
            return {
                token: '',
                currentUser: null
            }
        default: 
            return authState
    }
}
export default authReducer;