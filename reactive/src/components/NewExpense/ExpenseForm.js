import React, { useState } from 'react'

import './ExpenseForm.css'


function ExpenseForm(props) {
   /* const [userInput, setUserInput ] = useState({
        setTitle: '',
        setDate: '',
        setExpense: '',
    }); */
   
    const [enteredTitle, setEnteredTitle] = useState();
    const [enteredDate, setEnteredDate ] = useState();
    const [EnteredAmount, setEnteredAmount ] = useState(); 
     const titleChangeHandler = (event) => {
      /*   setUserInput({
            ...userInput,
            setTitle: event.target.value,
         }) */
         setEnteredTitle(event.target.value)
         
    };
    const dateChangeHandler = (event) => {
      /*  setUserInput({
            ...userInput,
            setDate: event.target.value,
        })     */
        setEnteredDate(event.target.value);
    };
    const priceChangeHandler = (event) => {
       /* setUserInput({
            ...userInput,
            setExpense: event.target.value,
        })   */   
        setEnteredAmount(event.target.value);
    };
    /*const priceChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            setExpense: event.target.value,
        )}
    };*/
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: setEnteredTitle,
            expense: setEnteredAmount,
            date: new Date(setEnteredDate),
        }
        console.log(expenseData);
        props.newExpenseData();
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    return (
        <div className="new-expense">
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle}  onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Percentage</label>
                        <input type="number"  min="o.o1" value={EnteredAmount} default="o.o1" onChange={priceChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date"  min="2021-01-01" value={enteredDate} max="2022-12-31" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Habit</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
