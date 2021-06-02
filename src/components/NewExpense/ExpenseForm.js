import './ExpenseForm.css';
import React, { useState } from 'react';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const onChangeTitleHandler= (event)=> {
    setEnteredTitle(event.target.value);
  };

  const onChangeAmountHandler= (event)=> {
    setEnteredAmount(event.target.value);
  };

  const onChangeDateHandler= (event)=> {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userInput = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onAddExpense(userInput);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={onChangeTitleHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={onChangeAmountHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={onChangeDateHandler}
          />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
          <button type='cancel'>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
