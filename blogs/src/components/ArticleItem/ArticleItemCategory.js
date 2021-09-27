import Button from '../shared/Button';
const ArticleItemCategory =() => {
    return (
        <ul className="article-item__categories">
            <li><Button type="category" href= '/#' as='a' > News </Button></li>
            <li><Button type="category" href= '/#' as='a' > News </Button></li>
        </ul>
    )
}
export default ArticleItemCategory;