import { ACT_GET_LIST_USERS } from './actions'
const initState = {
    listUsers: []
}
function reducer(state=initState,action){
    switch (action.type) {
        case ACT_GET_LIST_USERS:
            return {
                ...state, 
                listUsers: action.payload
            }
        default:
            return state;
    }
}
export default reducer;