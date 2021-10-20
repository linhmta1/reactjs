import { useDispatch,useSelector } from 'react-redux'
import  {useEffect } from 'react';
import { actGetListPostsAsync } from './store/actions'
function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(actGetListPostsAsync({pageSize:2,currentPage:1}))
  },[dispatch]);
  const posts = useSelector(state => state.listPosts);
  return (
    <div className="App">
        {
          posts.map(postItem => {
            return (
              <div className="card" style={{width: '18rem'}} key= {postItem.USERID}>
                <img src={postItem.url_image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{postItem.fullname}</h5>
                  <p className="card-text">{postItem.post_content}</p>
                  <a href="/#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            )
          })
        } 
    </div>
  );
}
export default App;
