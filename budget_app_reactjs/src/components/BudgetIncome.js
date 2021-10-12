const BudgetIncome = ({totalIncome}) =>{
    return(
        <div className="budget__income clearfix">
            <div className="budget__income--text">Income</div>
            <div className="right">
                <div className="budget__income--value">{(totalIncome > 0) ? "+" : "" }{totalIncome}</div>
                <div className="budget__income--percentage">&nbsp;</div>
            </div>
        </div>
    )
}
export default BudgetIncome;