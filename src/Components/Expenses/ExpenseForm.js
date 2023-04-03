import React,{useState} from "react";

import './ExpenseForm.css'

function ExpenseForm (){

  const [enteredtitle, setEnteredtitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

   const ChangeTitleHandeler =(e)=>{
    setEnteredtitle(e.target.value);
    
   };

   const ChangeAmmountHandeler=(e)=>{
    setEnteredAmount(e.target.value);
   };

   const ChangeDateHandeler =(e)=>{
    setEnteredDate(e.target.value);
    
   }

   const submitHandeler =(e)=>{
      e.preventDefault();
      let obj = {
         title:enteredtitle,
         price:enteredAmount,
         date :enteredDate
      }
      console.log(obj);
   };
   
    
    return(

 <form className="new-expense__controls" onSubmit={submitHandeler}>

  <div className="new-expense__control label">
        <label>Title</label>
        <input type="text" onChange={ChangeTitleHandeler}/>
  </div>
        
  <div className="new-expense__control label">
        <label>Ammount</label>
        <input type="number" onChange={ChangeAmmountHandeler}/>
  </div>  

  <div className="new-expense__control label">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2020-12-31" onChange={ChangeDateHandeler}/>
  </div> 

  <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
  </div>
        
      </form>
     
     

    
     
    );
}
export default ExpenseForm 