import ArticleItemThumbnail from '../ArticleItemThumbnail';
import ArticleItemContent from '../ArticleItemContent';
const PopularNewsListCardRight = () => {
    return (
        <div className="popular-news__list--card">
            <article className="article-item style-card style-row">
                <ArticleItemThumbnail/>
                <ArticleItemContent/>
            </article>
        </div>
    )
}
export default PopularNewsListCardRight;