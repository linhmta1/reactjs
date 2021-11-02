import postCategory from "../../services/category";
import { mappingCategoryList } from '../../helpers';
// Action types 
export const ACT_GET_CATEGORY = 'ACT_GET_CATEGORY'

//Action Creator 
export function actGetCategory(category) {
    return{ 
        type: ACT_GET_CATEGORY,
        payload: {
            category
        }
    }
}

//Action async
export function actGetCategoryAsync(){
    
    return async (dispatch)=>{
        try {
            const response = await postCategory.getList();
            const categories = mappingCategoryList(response.data);
            //console.log(categories);
            dispatch(actGetCategory(categories));
        } catch (error) {
            
        }
    }
}



