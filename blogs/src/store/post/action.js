import postService from '../../services/post';
import {mappingPostData} from '../../helpers'
// Action types 
export const ACT_GET_ARTICLE_LATEST= 'ACT_GET_ARTICLE_LATEST'
export const ACT_GET_ARTICLE_POPULAR= 'ACT_GET_ARTICLE_POPULAR'

//Action Creator 
export function actGetArticleLatest(posts){
    return{ 
        type: ACT_GET_ARTICLE_LATEST,
        payload: {
            posts
        }
    }
}
export function actGetArticlePopular(posts){
    return{ 
        type: ACT_GET_ARTICLE_POPULAR,
        payload: {
            posts
        }
    }
}


//Action async
export function actGetArticleLatestAsync(){
    return async (dispatch)=>{
        try {
            const response = await postService.getArticleLastest();
            const posts = response.data.map(mappingPostData);
            dispatch(actGetArticleLatest(posts));
        } catch (error) {
            
        }
    }
}

export function actGetArticlePopularAsync(){
    return async (dispatch)=>{
        try {
            const response = await postService.getArticlePopular();
            const posts = response.data.map(mappingPostData);
            dispatch(actGetArticlePopular(posts));
        } catch (error) {
            
        }
    }
}
