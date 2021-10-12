//Action types
export const ACT_DEL_INCOME = 'ACT_DEL_INCOME';
export const ACT_ADD_INCOME = 'ACT_ADD_INCOME';

//Action Creator
export const actDelIncomById =(id)=> {
    return {
        type: ACT_DEL_INCOME,
        payload: {id}
    }
}

export const actADDIncomById =(data)=> {
    return {
        type: ACT_ADD_INCOME,
        payload: {data}
    }
}