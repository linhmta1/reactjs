const BudgetExpenses = ({totalExpenses, totalIncome, percentage}) =>{
    return(
        <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
            <div className="budget__expenses--value">{(totalExpenses > 0) ? "+" : "" }  {totalExpenses}</div>
            <div className="budget__expenses--percentage"> {percentage} %</div>
            </div>
        </div>
    )
}
export default BudgetExpenses;