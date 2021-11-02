import { ACT_GET_ARTICLE_LATEST, ACT_GET_ARTICLE_POPULAR } from "./action"
const initState = {
    articlesLatest:[],
    articlesPopular:[]
}
function postReducer(postState=initState, action){
    switch(action.type){
        case ACT_GET_ARTICLE_LATEST:
            return {
                ...postState,
                articlesLatest: action.payload.posts
            }
        case ACT_GET_ARTICLE_POPULAR:
            return {
                ...postState,
                articlesPopular: action.payload.posts
            }
        default: 
            return postState
    }
}
export default postReducer;