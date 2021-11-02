import { ACT_GET_CATEGORY } from './action';
const initState = {
    categoryList:[],
}

function categoryReducer(categoryState=initState, action){
    switch(action.type){
        case ACT_GET_CATEGORY:
            return {
                ...categoryState,
                categoryList: action.payload.category
            }
        default: 
            return categoryState
    }
}
export default categoryReducer;