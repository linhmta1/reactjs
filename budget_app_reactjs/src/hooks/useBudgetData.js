import { useSelector } from 'react-redux';
import  usePercentage  from './usePercentage';
import { useEffect } from 'react'

const useBudgetData = () => {
    let listDataIncome = useSelector(state => state.listDataIncome);
    let listIncome = listDataIncome.filter(dataItem => dataItem.amount > 0);
    let listExpenses = listDataIncome.filter(dataItem => dataItem.amount < 0);
    let totalIncome = 0;
    let totalExpenses = 0;
    listIncome.forEach((item) => totalIncome += item.amount)
    listExpenses.forEach((item) => totalExpenses += item.amount)
    let total = totalIncome + totalExpenses;
    let percentage = usePercentage(totalExpenses, totalIncome);
    useEffect(() => {
        localStorage.setItem('listBudget', JSON.stringify(listDataIncome));
    }, [listDataIncome])
    return{
        listDataIncome,
        listIncome,
        listExpenses,
        totalIncome,
        totalExpenses,
        total,
        percentage,
    }
}
export default useBudgetData;