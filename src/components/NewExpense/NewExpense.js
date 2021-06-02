import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


function NewExpense(props) {
  const onAddExpense= (newExpense) => {
    const expense = {
      ...newExpense,
      id: Math.random().toString()
    };
    props.onAddData(expense);
  };
  return (
    <div className='new-expense'>
     <ExpenseForm onAddExpense={onAddExpense}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
