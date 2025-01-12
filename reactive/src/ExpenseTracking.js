import React, {useState} from 'react'
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';
import Chart from './components/Chart/ChartBar';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Working out',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
   id: 'e2',
   title: 'Meditation', 
   amount: 79.49, 
   date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Reading Books',
    amount: 29.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 45,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Eating Healthy',
    amount: 94.12,
    date: new Date(2021, 12, 11),
  },
];

function App() {
  

  const [enteredExpense, setEnteredExpense] = useState(DUMMY_DATA)

  const addExpenseHandler = expense =>{
    setEnteredExpense((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  
  return (
    <div>
      <h2>Lets Get Started!!!</h2>
      <Chart />
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses 
        items={enteredExpense}
        />
    </div>
  );
}

export default App;
