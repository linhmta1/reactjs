import { api } from './api';
const postService = {
    getList(params){
        return api.call().get('/wp/v2/posts',{
            params:{
                ...params,
                lang: 'vi'
            }
        })
    },
    getArticleLastest(){
        return postService.getList({
            page: 1,
            per_page: 3,
        })
    },
    getArticlePopular(){
        return postService.getList({
            page: 1,
            per_page: 3,
            orderby: 'post_views'
        })
    },
    getCategories(params){
        return api.call().get('/wp/v2/categories',{
            params:{
                ...params,
                lang: 'vi'
            }
        })
    }
}
export default postService;