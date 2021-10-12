import Item from './Item';
const IncomeList = ({data}) => {
    return (
        <div className="income">
            <h2 className="icome__title">Income</h2>
            <div className="income__list">
                {
                    data.map(item => <Item  key={item.id} id={item.id}   description={item.description} value={'+' + item.amount}/>)
                }
            </div>
        </div>
    )
}
export default IncomeList;