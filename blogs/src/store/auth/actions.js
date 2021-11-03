import authService from '../../services/auth';
import {actGetUserMeAsync} from '../user/action'
import { useDispatch } from 'react-redux';
// Action types 
export const ACT_GET_INFO_USER = 'ACT_GET_INFO_USER'
export const ACT_POST_TOKEN = 'ACT_GET_TOKEN'
export const ACT_POST_TOKEN_ERROR = 'ACT_POST_TOKEN_ERROR'
export const ACT_AUTH_LOADING = 'ACT_AUTH_LOADING'
export const ACT_AUTH_FINISH = 'ACT_AUTH_FINISH'


// 

//Action Creator
export function actPostToken(response){
    // const dispatch = useDispatch();
    console.log("respone",response);
    localStorage.setItem('token', response.token ? response.token: '');
    // dispatch(actGetUserMeAsync(response.token)) ;
    return{
        type: ACT_POST_TOKEN,
        payload: response
    }
}

export function actAuthLoading(){
    return{
        type: ACT_AUTH_LOADING,
        payload: {
            loading: true
        }
    }
}

export function actAuthFinish(){
    return{
        type: ACT_AUTH_FINISH,
        payload: {
            loading: false
        }
    }
}

export function actPostTokenError(errors){
    return{
        type: ACT_POST_TOKEN_ERROR,
        payload: errors
    }
}


//Action async
export function actPostTokenAsync(username,password){
    return async(dispatch)=>{
            try {
                dispatch(actAuthLoading());
                const response = await authService.postToken(username,password);
                console.log(response.data)
                dispatch(actPostToken(response.data));
                dispatch(actGetUserMeAsync(response.data.token)) ;
                
            } catch (error) {
                dispatch(actAuthFinish());
                dispatch(actPostTokenError(error.response.data.message));

            }
    }    
}
