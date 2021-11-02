import { ACT_POST_TOKEN, ACT_POST_TOKEN_ERROR } from './actions'
const initState = {
    currentUser: null,
    errorLogin : null,
}
function authReducer(authState=initState, action){
    switch(action.type){
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