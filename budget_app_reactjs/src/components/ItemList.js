import ExpensesList from "./ExpensesList";
import IncomeList from "./IncomeList";
import useBudgetData from '../hooks/useBudgetData';
const ItemList = () => {
    const BudgetData = useBudgetData();
    return (
        <div className="container clearfix">
            <IncomeList data={BudgetData.listIncome}/>
            <ExpensesList  data={BudgetData.listExpenses} total={BudgetData.total}/>
        </div>
    )
}
export default ItemList;