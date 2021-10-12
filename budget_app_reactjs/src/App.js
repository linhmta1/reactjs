
import AddContainer from './components/AddContainer';
import ItemList from './components/ItemList';
import BudgetTop from './components/BudgetTop';
import {useSelector} from 'react-redux';
import {useEffect} from 'react'
function App() {
  const listDataIncome = useSelector(state => state.listDataIncome);
  console.log(listDataIncome);
  const listIncome = listDataIncome.filter(dataItem => dataItem.amount>0);
  const listExpenses = listDataIncome.filter(dataItem => dataItem.amount<0);
  let totalIncome = 0;
  let totalExpenses = 0;
  
  listIncome.map((item) =>  totalIncome += item.amount)
  listExpenses.map((item) => totalExpenses += item.amount)
  let total= totalIncome + totalExpenses;

  useEffect(() => {
    localStorage.setItem('listBudget', JSON.stringify(listDataIncome));
  },[listDataIncome])
  return (
    <div className="App">

      <BudgetTop totalIncome={totalIncome} total={total} totalExpenses={totalExpenses}/>

      <div className="bottom">
        {/* Trường hợp dấu + */}
        <AddContainer/>

        
      </div>
      <ItemList listIncome={listIncome} listExpenses={listExpenses} total={totalIncome} />


    </div>
  );
}

export default App;
