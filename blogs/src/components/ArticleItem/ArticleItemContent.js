
import ArticleItemCategory from "./ArticleItemCategory";
import ArticleItemStats from "./ArticleItemStats";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemDesc from "./ArticleItemDesc";
import ArticleItemInfo from "./ArticleItemInfo";
const ArticleItemContent = () => {
    return (
        <div className="article-item__content">
            <ArticleItemCategory/>
            <ArticleItemStats/>
            <ArticleItemTitle/>
            <ArticleItemDesc/>
            <ArticleItemInfo/>
        </div>
    )
}
export default ArticleItemContent;