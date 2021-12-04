import React, {useState} from 'react'
import './ExpenseFilter.css'

function ExpenseFilter(props) {
    const [selectedDate, setSelectedDate] = useState(new Date().getFullYear());

    const dateChangeHandler = (event) => {
        setSelectedDate(event.target.value);
    }

    const selectDate = (event) => {
        event.preventDefault();

        const dates = {
            date: setSelectedDate,

        }
        console.log(dates);
       props.onDateChange(dates);

        
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onSelectDate={selectDate} value={selectedDate} onSelect={dateChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter
