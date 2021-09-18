import './popular-news-list.css';
import './button.css';
import './post-detail.css'
import PopularNewsListCardLeft from '../PopularNewsListCardLeft';
import PopularNewsListCardRight from '../PopularNewsListCardRight';
const PopularNewSection =() => {
    return (
        <div className="popular-news section bg-white-blue">
            <div className="tcl-container">
                {/* Main Title */}
                <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
                    <h2>Popular Articles</h2>
                    <a href="/#" className="btn btn-default">View More</a>
                </div>
                {/* End Main Title */}
                <div className="popular-news__list spacing">
                    <div className="popular-news__list--left">
                        <div className="popular-news__list--row">
                            {/* Popular news card */}
                            <PopularNewsListCardLeft/>
                            <PopularNewsListCardLeft/>
                            {/* End Popular news card */}
                        </div>
                    </div>
                    <div className="popular-news__list--right">
                        <div className="popular-news__list--row">
                            {/* Popular news card */}
                            <PopularNewsListCardRight/>
                            {/* End Popular news card */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PopularNewSection;