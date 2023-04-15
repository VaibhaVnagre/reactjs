import React from "react";
import  ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props)=>{

  if (props.items.length==0){
      
     return <h2 className="expenses-list__fallback">
        Found No Expenses
     </h2>
     
  }

  return (
    <ul className="expenses-list">
        {props.items.map((expensed)=> (
        
        <ExpenseItem 
        key = {expensed.Id}
        Title={expensed.Title}
        price={expensed.price}
        date={expensed.date}
        title={expensed.title}
        ammount={expensed.ammount}
        location={expensed.location}
        />
      ))}
    </ul>
  )
  
}

export default ExpenseList;