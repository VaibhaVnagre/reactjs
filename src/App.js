import React from 'react';
import './App.css';

import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/Expenses/NewExpense';

function App() {

const expense = [
  {
    Title : 'Toilet Paper',
    price : 'Rs.20',
    date : new Date(2010,6,16),
    title : 'petrol',
    ammount : 80,
    location : 'Dubai'

  },
  {
    Title : 'Car Insurance',
    price : 'Rs.1000',
    date : new Date(2019,9,29),
    title : 'beer',
    ammount : 100,
    location : 'goa'

  },
  {
    Title : 'New Football',
    price : 'Rs.190',
    date : new Date(2023,7,25),
    title : 'the-movie',
    ammount : 500,
    location : 'mumbai'

  },
  {
    Title : 'pizza',
    price : 'Rs.100',
    date : new Date(2022,5,10),
    title : 'Pool',
    ammount : 1500,
    location : 'pune'

  }
]

// return React.createElement(
//   'div',{},
//   React.createElement(Expenses, { expense: expense })
// );

const addExpenseHandeler = (expenseData) => {
  console.log('In App.js')
  console.log(expenseData)
   
}

  return (
    <div>
      <NewExpense onAddexpense={addExpenseHandeler}/>
      <Expenses items={expense}/>
    </div>
  ) 
}
export default App;
