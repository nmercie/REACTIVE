import React, {useState} from 'react';
import ExpenseItems from './ExpenseItems';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'

function Expenses(props) {
    const [setDate, dateSet] = useState();
    
    const selectedDateHandler = dates => {
        dateSet(dates)
        console.log(dates)
    }
    return (
    <div>
        
        <div className="expenses">
        <ExpenseFilter selected={setDate} onDateChange={selectedDateHandler}/>   
            {props.items.map(
                ex => 
                <ExpenseItems
                    key={ex.id}
                    title={ex.title}
                    amount={ex.amount}
                    date={ex.date}   
                 /> )}
        </div>
    </div>
    )
}

export default Expenses
