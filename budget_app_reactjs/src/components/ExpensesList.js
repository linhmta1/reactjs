import Item from './Item';
const ExpensesList = ({data, total}) => {
    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            <div className="expenses__list">
                {
                    data.map(item => <Item type='expenses' key={item.id} id={item.id} description={item.description} value={item.amount} percentage={Math.round((item.amount/total)*100) + '%'} /> )
                }            
            </div>
        </div>
    )
}
export default ExpensesList;