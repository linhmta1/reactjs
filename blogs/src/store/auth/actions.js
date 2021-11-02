import authService from '../../services/auth';
// Action types 
export const ACT_GET_INFO_USER = 'ACT_GET_INFO_USER'
export const ACT_POST_TOKEN = 'ACT_GET_TOKEN'
export const ACT_POST_TOKEN_ERROR = 'ACT_POST_TOKEN_ERROR'
//Action Creator 
export function actPostToken(response){
    localStorage.setItem('token', response.token ? response.token: '');
    return{
        type: ACT_POST_TOKEN,
        payload: response
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
                const response = await authService.postToken(username,password);
                dispatch(actPostToken(response.data));

            } catch (error) {
                dispatch(actPostTokenError(error.response.data.message));

            }
    }

    
}
