import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import React, { useState } from 'react';
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
   <div>
     <Card className='expenses'>
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
       <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
     </Card>
   </div>
  );
}

export default Expenses;
