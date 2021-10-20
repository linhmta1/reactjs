
import {PostService} from '../services/post'
//Action Types
export const ACT_GET_LIST_POSTS = 'ACT_GET_LIST_POSTS'

// Action Creator
export function actGetListPosts(posts){
    return{ 
        type: 'ACT_GET_LIST_POSTS',
        payload: {
            posts
        }
    }
}

// Action Async
export function actGetListPostsAsync({
    pageSize,
    currentPage
}){
    return async dispatch =>{
        try {
            const response = await PostService.getList({
                pageSize,
                currentPage
            })

            if (response.data.status === 200){
                dispatch(actGetListPosts(response.data.posts))
            }
        } catch (error) {
            console.log(error)
        }
    }
}