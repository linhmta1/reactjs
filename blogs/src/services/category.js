import { api } from './api';
const postCategory = {
    getList({
        page = 1,
        per_page = 100
    } = {}){
        return api.call().get('/wp/v2/categories',{
            params: {
                page,
                per_page,
            }
        })
    }
}
export default postCategory;