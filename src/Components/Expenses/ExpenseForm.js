import React from "react";

import './ExpenseForm.css'

function ExpenseForm (){
   
   function ChangeHandeler (e){
    console.log(e.target.value)
   }
    
   
    
    return(

 <form className="new-expense__controls">

  <div className="new-expense__control label">
        <label>Title</label>
        <input type="text" onChange={ChangeHandeler}/>
  </div>
        
  <div className="new-expense__control label">
        <label>Ammount</label>
        <input type="number" onChange={ChangeHandeler}/>
  </div>  

  <div className="new-expense__control label">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2020-12-31" onChange={ChangeHandeler}/>
  </div> 

  <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
  </div>
        
      </form>
     
     

    
     
    );
}
export default ExpenseForm 