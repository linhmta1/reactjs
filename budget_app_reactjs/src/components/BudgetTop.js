import ButgetTitle from './BudgetTitle';
import BudgetValue from './BudgetValue';
import BudgetIncome from './BudgetIncome';
import BudgetExpenses from './BudgetExpenses';
import useBudgetData from '../hooks/useBudgetData';

const BudgetTop = () => {
  const BudgetData = useBudgetData();
  return (
    <div className="top">
      <div className="budget">
        <ButgetTitle />
        <BudgetValue total={BudgetData.total}/>
        <BudgetIncome totalIncome= {BudgetData.totalIncome}/>
        <BudgetExpenses totalIncome= {BudgetData.totalIncome} totalExpenses={BudgetData.totalExpenses} percentage= {BudgetData.percentage}/>
      </div>
    </div>
  );
};
export default BudgetTop;
