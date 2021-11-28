import React from 'react';
import ExpenseItems from './ExpenseItems';

function Expenses(props) {
    return (
        <div className="expenses">
            <ExpenseItems 
                title={props.title}
                amount={props.amount}
                date={props.date}   />
            <ExpenseItems 
                title={props.title}
                amount={props.amount}
                date={props.date}   />
            <ExpenseItems 
                title={props.title}
                amount={props.amount}
                date={props.date}   />
            <ExpenseItems 
                title={props.title}
                amount={props.amount}
                date={props.date}   />
        </div>
    )
}

export default Expenses
