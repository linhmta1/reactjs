import {ACT_GET_LIST_POSTS} from './actions'
const initState = {
    listPosts: []
}
function reducer(state=initState,action){
    switch (action.type) {
        case ACT_GET_LIST_POSTS:
            return {
                listPosts: action.payload.posts
            }
        default:
            return state;
    }
}
export default reducer;