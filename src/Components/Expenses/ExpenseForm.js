import React,{useState} from "react";

import './ExpenseForm.css'

function ExpenseForm (props){

  const [enteredtitle, setEnteredtitle] = useState("");
  const [enteredAmmount, setEnteredAmmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

   const ChangeTitleHandeler =(e)=>{
    setEnteredtitle(e.target.value);
   };

   const ChangeAmmountHandeler=(e)=>{
    setEnteredAmmount(e.target.value);
   };

   const ChangeDateHandeler =(e)=>{
    setEnteredDate(e.target.value);
    
   }
   const submitHandeler =(e)=>{
      e.preventDefault();
      let obj = {
         Title:enteredtitle,
         price:enteredAmmount,
         date : new Date (enteredDate)
      }
      props.onSaveExpenseData(obj)
      setEnteredtitle("");
      setEnteredAmmount("");
      setEnteredDate("");
   };
    return(

 <form className="new-expense__controls" onSubmit={submitHandeler}>

  <div className="new-expense__control label">
        <label>Title</label>
        <input type="text" value={enteredtitle} onChange={ChangeTitleHandeler}/>
  </div>
        
  <div className="new-expense__control label">
        <label>Ammount</label>
        <input type="number" value={enteredAmmount} onChange={ChangeAmmountHandeler}/>
  </div>  

  <div className="new-expense__control label">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={ChangeDateHandeler}/>
  </div> 

  <div className="new-expense__actions">
      <button type="button" onClick={props.onCancle}>Cancle</button> 
      <button type="submit">Add Expense</button>
  </div>
        
      </form>
     
    );
}
export default ExpenseForm 