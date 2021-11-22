import authService from '../../services/auth';
import { mappingCurentUser } from '../../helpers'
import { ACCESS_TOKEN } from '../../constants';
// Action types 
export const ACT_LOGIN_SUCCESS = 'ACT_LOGIN_SUCCESS'

//Action Creator
export function actLoginSuccess({user, token}){
    return{
        type: ACT_LOGIN_SUCCESS,
        payload: {
            user,
            token
        }
    }
}

//Action async
export function actFetchMeAsync(token){
    return async dispatch=>{
        if (token === undefined){
            token = localStorage.getItem(ACCESS_TOKEN)
        }
        try{
            const response = await authService.fetchMe(token)
            
            const user = mappingCurentUser(response.data)
            // console.log(user,token);
            dispatch(actLoginSuccess({user, token}))
            return {
                ok: true,
                error: ''
            }
        }catch(err){
            return {
                ok: false,
                error: 'Username or Password is not correct'
            }
        }
    }
}


export function actLoginAsync(username,password){
    return async(dispatch)=>{
            try {
                console.log("111111")
                //dispatch(actAuthLoading());
                const response = await authService.login(username,password);
                const token = response.data.token
                // 1 luu localStorage
                // 2 fetme
                const responseMe =  await dispatch(actFetchMeAsync(token))
                return {
                    ok : responseMe.ok,
                    error : responseMe.error
                }
            } catch (error) {
                return {
                    ok: false,
                    error: 'Username or Password is not correct'
                }
            }
    }    
}
