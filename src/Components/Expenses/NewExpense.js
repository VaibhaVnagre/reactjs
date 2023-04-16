
import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense (props){

   const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData)=>{
         const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
         };
         props.onAddexpense(expenseData)
         setIsEditing(false)
    };
    const editingHandeler = ()=>{
      setIsEditing(true);
    }
    const stopediting =()=>{
      setIsEditing(false);
    }
    return(
       <div className="new-expense">
         {!isEditing && <button onClick={editingHandeler}>Add New Expense</button>}
        {isEditing &&
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopediting}/>}
       </div>
    );
}
export default NewExpense;
