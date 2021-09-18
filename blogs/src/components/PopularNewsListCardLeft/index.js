import ArticleItemThumbnail from '../ArticleItemThumbnail';
import ArticleItemContent from '../ArticleItemContent';
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