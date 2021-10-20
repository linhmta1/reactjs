
import AddContainer from './components/AddContainer';
import ItemList from './components/ItemList';
import BudgetTop from './components/BudgetTop';
function App() {
  return (
    <div className="App">
      <AddContainer/>
      <BudgetTop/>
      <div className="bottom">
        <AddContainer/>
      </div>
      <ItemList/> 
    </div>
  );
}

export default App;
