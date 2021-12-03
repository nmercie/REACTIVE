import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
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

  const newExpenseHandler = expense => {
    console.log(expense);
    console.log('In App.js');
  }
  return (
    <div>
      <h2>Lets Get Started!!!</h2>
      <NewExpense onAddExpense={newExpenseHandler}/>
      <Expenses 
        items={expenses}
        />
    </div>
  );
}

export default App;
