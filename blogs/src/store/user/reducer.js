import { ACT_GET_USER_ME } from './action'
const instance= {
    userCurrentInfo: null
}
function useReducer(useReducer=instance, action){
    switch (action.type) {
        case ACT_GET_USER_ME:
            return {
                ...useReducer,
                userCurrentInfo: action.payload.userCurrentInfo
            }
        default:
            return useReducer;
    }
}
export default useReducer;