import React, {useState} from 'react';
import ExpenseItems from './ExpenseItems';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'

function Expenses(props) {
    const [setDate, dateSet] = useState('2020');
    
    const selectedDateHandler = dates => {
        dateSet(dates)
        console.log(dates)
    }
    const filteredDate = props.items.filter((expense) =>{
        return expense.date.getFullYear().toString() ===  setDate;
    }) 
    return (
    <div>
        
        <div className="expenses">
        <ExpenseFilter 
            selected={setDate}
            onDateChange={selectedDateHandler}/>
            {filteredDate.map((expense) => (  
                <ExpenseItems
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                 /> 
            ))} 
        </div>
    </div>
    )
}

export default Expenses
