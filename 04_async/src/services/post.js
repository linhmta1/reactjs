import {api} from './api';
export const PostService = {
    getList({
        pageSize,
        currentPage
    }){
        return api.get('post/getListPagination.php',{
            params: {
                pagesize: pageSize,
                currPage: currentPage
            }
        })
    }
} 
