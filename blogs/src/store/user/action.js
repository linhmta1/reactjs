import userService from "../../services/user";
//Action types
export const ACT_GET_USER_ME= 'ACT_GET_USER_ME'

// Action Creator
export function actGetUserMe(userCurrentInfo){
    localStorage.setItem('userCurrentInfo', userCurrentInfo ? JSON.stringify(userCurrentInfo) : '');
    return{
        type: ACT_GET_USER_ME,
        payload: {
            userCurrentInfo
        }
    }
}

//Action async
export function actGetUserMeAsync(){
    return  async(dispatch)=>{
        try {
            const response = await userService.getUserMe();
            dispatch(actGetUserMe(response.data));
        } catch (error) {
        }
    }
}
