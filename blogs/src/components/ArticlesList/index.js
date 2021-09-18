import ArticleItem from '../ArticleItem';
import ButtonLoad from '../ButtonLoad';
const AritcleList = () => {
    return (
        <div className="articles-list section">
            <div className="tcl-container">
                {/* Main Title */}
                <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
                    <h2>News List</h2>
                    <a href="/#" className="btn btn-default">View More</a>
                </div>
                {/* End Main Title */}
                {/* End Row News List */}
                <div className="tcl-row">
                    <ArticleItem/>
                    <ArticleItem/>
                    <ArticleItem/>
                    <ArticleItem/>
                    <ArticleItem/>
                </div>
                {/* End Row News List */}
                {/* Btn Loadmore */}
                <ButtonLoad/>
            </div>
        </div>
    )
}
export default AritcleList;
