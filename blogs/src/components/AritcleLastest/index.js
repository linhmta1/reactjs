import './main-title.css';
import './latest-news-list.css';
import './article-item.css';
import LastestNewsCard from '../LastestNewsCard'
const AritcleLastest = () => {
  return (
    <div className="latest-news section" >
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing">
          <h2>Latest Articles</h2>
        </div>
        {/* End Main Title */}
        {/* Latest News List */}
        <div className="latest-news__list spacing">
          {/* Latest news card */}
          <LastestNewsCard/>
          <LastestNewsCard/>
          <LastestNewsCard/>
          {/* End Latest news card */}
        </div>
        {/* End Latest News List */}
      </div>
    </div>
  )
}
export default AritcleLastest;
