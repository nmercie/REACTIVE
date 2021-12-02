import React, { useState } from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItems(props) {
    const [title, setTitle] = useState(props.title);
    
    const UpdateTitle = () => {
        setTitle('updated');

    }
    const amount = props.amount; 
    return (
        <div>
            <div className="expense-item">
                <ExpenseDate  date={props.date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">% {amount}</div>
                    <button onClick={UpdateTitle}>Updated Title</button>
                </div>
            </div>         
        </div>
    )
}

export default ExpenseItems
