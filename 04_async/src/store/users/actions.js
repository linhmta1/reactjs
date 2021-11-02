
import { userService } from '../../services/user'
//Action Types
export const ACT_GET_LIST_USERS = 'ACT_GET_LIST_USERS'

// Action Creator
export function actGetListUsers(data){
    return{ 
        type: 'ACT_GET_LIST_USERS',
        payload: data
    }
}

// Action Async
export function actGetListUsersAsync(){
    return async dispatch =>{
        try {
            const response = await userService.getListUsers({})
            if (response.status === 200) {
                dispatch(actGetListUsers(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }
}