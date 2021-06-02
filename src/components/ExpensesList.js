import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
function ExpensesList(props) {
  if(!props.filteredExpenses.length) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;

  }

  const expensesContent = props.filteredExpenses.map(expense => <ExpenseItem
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />);

  return (
    <ul className='expenses-list'>
        {expensesContent}
    </ul>
  );
}

export default ExpensesList;
