import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import Card from'../UI/Card';
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpenseChart";

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
       <ExpensesChart expenses={FilterExpense}/>
       <ExpenseList items={FilterExpense}/>
    
        </Card>
      );
}
export default Expenses;