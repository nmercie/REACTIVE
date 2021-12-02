import React, { useState } from 'react'
import './ExpenseForm.css'


function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle ] = useState();
    const [enteredDate, setEnteredDate ] = useState();
    const [EnteredAmount, setEnteredAmount ] = useState();
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    return (
        <div className="new-expense">
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number"  min="o.o1" default="o.o1" onChange={priceChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date"  min="2021-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm