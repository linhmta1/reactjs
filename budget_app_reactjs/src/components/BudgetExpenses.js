const BudgetExpenses = ({totalExpenses, totalIncome}) =>{
    console.log (totalExpenses);
    console.log (totalIncome);
    return(
        <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
            <div className="budget__expenses--value">{(totalExpenses > 0) ? "+" : "" }  {totalExpenses}</div>
            <div className="budget__expenses--percentage"> {totalExpenses !== 0 ? Math.round(totalExpenses/totalIncome * -100) : 0 }%</div>
            </div>
        </div>
    )
}
export default BudgetExpenses;