import Button from '../shared/Button';
import { useSelector } from 'react-redux';

const ArticleItemCategory =(data) => {
    const categoryIds = [];
    console.log(data);
    const Categories = useSelector(state=>state.Category);
    return (
        <ul className="article-item__categories">
            {(categoryIds !== undefined && categoryIds.length > 0) && 
                categoryIds.map((categoryId) => {
                    return(
                        <li><Button type="category" href= '/#' as='a' > {Categories.categoryList[categoryId].name} </Button></li>
                    )
                })
            }
        </ul>
    )
}
export default ArticleItemCategory;