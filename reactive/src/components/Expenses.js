import React, {useState} from 'react';
import ExpenseItems from './ExpenseItems';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList'


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
        <ExpensesChart expenses={filteredDate} />
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
            <ExpensesList items={filteredDate} />
        </div>
    </div>
    )
}

export default Expenses
