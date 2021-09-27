import ArticleItemThumbnail from './ArticleItemThumbnail';
import ArticleItemCategory from './ArticleItemCategory';
import ArticleItemStats from './ArticleItemStats';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemInfo from './ArticleItemInfo';
import cls from 'classnames';
import './article-item.css'
const ArticleItem = ({
    type,
    isCategory,
    isStats,
    isTitle,
    isDesc,
    isInfo
}) => {
    const classNameArticle = cls('article-item',{
        'style-card' : type ==='card',
        'style-row style-card' : type ==='row',
    })
    console.log(isTitle);
    return (
        <div className="tcl-col-12 tcl-col-md-6">
            <article className={classNameArticle}>
                <ArticleItemThumbnail/>
                <div className="article-item__content">
                    {isCategory === true && <ArticleItemCategory/>}
                    {isStats === true && <ArticleItemStats/>}
                    {isTitle === true && <ArticleItemTitle/>}
                    {isDesc === true && <ArticleItemDesc/>}
                    {isInfo === true && <ArticleItemInfo/>}
                </div>
            </article>
        </div>
    )
}
export default ArticleItem;