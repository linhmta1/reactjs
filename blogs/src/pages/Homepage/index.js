import AritcleLastest from '../../components/AritcleLastest';    
import PopularNewSection from '../../components/PopularNewList';
import AritclesList from '../../components/ArticlesList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { actGetArticleLatestAsync, actGetArticlePopularAsync } from "../../store/post/action"

const Homepage = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(actGetArticleLatestAsync())
      dispatch(actGetArticlePopularAsync())
    },[dispatch])
    return(
      <>
        <AritcleLastest/>
        <PopularNewSection/>
        <AritclesList/>
      </>      
    )
}
export default Homepage;