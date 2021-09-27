import ArticleItem from "../components/ArticleItem";
const DemoArticleItems = ()=> {
    return (
        <>
            <div className="latest-news__card">
                <ArticleItem  isTitle={true} isInfo={true}/>
            </div>
            <div className="popular-news__list spacing">
                <div className='popular-news__list--left'> 
                    <ArticleItem type='card' isCategory={true} isStats={true} isTitle={true} isInfo={true}/>
                </div>

            </div>
            <ArticleItem type='row' isCategory={true} isStats={true} isTitle={true} isInfo={true}/>

            <ArticleItem type='card'  isTitle={true} isInfo={true}/>
        </>
    )
}
export default DemoArticleItems;