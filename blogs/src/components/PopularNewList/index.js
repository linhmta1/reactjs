import './popular-news-list.css';
import './button.css';
import './post-detail.css'
import PopularNewsListCardLeft from '../PopularNewsListCardLeft';
import PopularNewsListCardRight from '../PopularNewsListCardRight';
import { useSelector } from 'react-redux';
const PopularNewSection =() => {
    const PopularList = useSelector(state=>state.Post.articlesPopular);
    // console.log(Categories);
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
                            {
                                PopularList && PopularList.length >0 && (
                                    <PopularNewsListCardLeft  Popular={PopularList[0]}/>
                                )
                            }
                            {
                                PopularList && PopularList.length >1 && (
                                    <PopularNewsListCardLeft  Popular={PopularList[1]}/>
                                )
                            }
                        </div>
                    </div>
                    <div className="popular-news__list--right">
                        <div className="popular-news__list--row">
                            {
                                PopularList && PopularList.length >2 && (
                                    <PopularNewsListCardRight  Popular={PopularList[2]}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PopularNewSection;