import { ACT_LOGIN_SUCCESS } from './action'
import { ACCESS_TOKEN } from '../../constants';
const initState = {
    token: '',
    currentUser: null,
}
function authReducer(authState=initState, action){
    switch(action.type){
        case ACT_LOGIN_SUCCESS:
            // console.log(action.payload)
            localStorage.setItem(ACCESS_TOKEN, action.payload.token ? action.payload.token : '');
            return {
               token: action.payload.token,
               currentUser: action.payload.user
            }
        default: 
            return authState
    }
}
export default authReducer;