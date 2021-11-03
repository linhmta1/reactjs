import { ACT_POST_TOKEN, ACT_POST_TOKEN_ERROR, ACT_AUTH_FINISH, ACT_AUTH_LOADING} from './actions'
const initState = {
    currentUser: null,
    errorLogin : null,
    isLoading : false,
}
function authReducer(authState=initState, action){
    switch(action.type){
        case ACT_AUTH_FINISH:
            return {
                ...authState,
                isLoading : false
            }
        case ACT_AUTH_LOADING:
            return {
                ...authState,
                isLoading : true
            }
        case ACT_POST_TOKEN:
            return {
                ...{
                    currentUser: null,
                    errorLogin : null,
                },
                currentUser : action.payload
            }
        case ACT_POST_TOKEN_ERROR:
            return {
                ...{
                    currentUser: null,
                    errorLogin : null,
                },
                errorLogin : action.payload
            }
        default: 
            return authState
    }
}
export default authReducer;