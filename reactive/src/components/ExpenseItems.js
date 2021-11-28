import React from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItems(props) {
    const title = props.title;
    const amount = props.amount; 
    return (
        <div>
            <div className="expense-item">
                <ExpenseDate  date={props.date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">$ {amount}</div>
                </div>
            </div>         
        </div>
    )
}

export default ExpenseItems
