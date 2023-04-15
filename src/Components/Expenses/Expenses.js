import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from'../UI/Card';
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";

const Expenses =(props)=>{
  // console.log(props.items)
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterchangeHandeler = (selectedYear)=>{
       setFilteredYear(selectedYear); 
  };

  const FilterExpense = props.items.filter(expensed => {
    return expensed.date.getFullYear().toString() === filteredYear;
  });

    return (

        <Card className="expenses">

       <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterchangeHandeler}/>
      {FilterExpense.map((expensed)=>(
        
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
     
        </Card>
      );
}
export default Expenses;