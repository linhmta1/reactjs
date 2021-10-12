import ExpensesList from "./ExpensesList";
import IncomeList from "./IncomeList";
const ItemList = ({listIncome,listExpenses,total}) => {

    return (
        <div className="container clearfix">
            <IncomeList data={listIncome}/>
            <ExpensesList  data={listExpenses} total={total}/>
        </div>
    )
}
export default ItemList;