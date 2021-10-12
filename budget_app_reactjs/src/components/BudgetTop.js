
import ButgetTitle from './BudgetTitle';
import BudgetValue from './BudgetValue';
import BudgetIncome from './BudgetIncome';
import BudgetExpenses from './BudgetExpenses';
const BudgetTop = ({totalIncome,totalExpenses,total}) => {
  return (
    <div className="top">
      <div className="budget">
        <ButgetTitle />
        <BudgetValue total={total}/>
        <BudgetIncome totalIncome= {totalIncome}/>
        <BudgetExpenses totalIncome= {totalIncome} totalExpenses={totalExpenses}/>
      </div>
    </div>
  );
};
export default BudgetTop;
