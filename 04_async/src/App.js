import { useDispatch, useSelector } from 'react-redux'
import  {useEffect } from 'react';
import { actGetListUsersAsync } from './store/users/actions'
function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(actGetListUsersAsync())
  },[dispatch]);
  const listUsers = useSelector(state => state.listUsers);
  console.log(listUsers);
  return (
    <div className="App">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">login</th>
                <th scope="col">followers_url</th>
                <th scope="col">type</th>
                <th scope="col">tác vụ</th>
              </tr>
            </thead>
            <tbody>
              {listUsers && listUsers.map(Item => {
                  return (
                    <tr key= {Item.id}>
                      <td>{Item.id}</td>
                      <td>{Item.login}</td>
                      <td >{Item.followers_url}</td>
                      <td >{Item.type}</td>
                      <td >
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </td >
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          
    </div>
  );
}
export default App;
