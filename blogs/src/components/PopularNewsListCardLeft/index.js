import ArticleItemThumbnail from '../ArticleItem/ArticleItemThumbnail';
import ArticleItemContent from '../ArticleItem/ArticleItemContent';
const PopularNewsListCardLeft = () => {
    return (
        <div className="popular-news__list--card">
            <article className="article-item style-card ">
                <ArticleItemThumbnail/>
                <ArticleItemContent/>
            </article>
        </div>
    )
}
export default PopularNewsListCardLeft;