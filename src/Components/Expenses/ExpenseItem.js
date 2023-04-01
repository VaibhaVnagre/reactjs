import React, {useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
 
import ExpenseDate from './ExpenseDate';

 
function ExpenseItem(props){
   const [price, setPrice] = useState(props.price);

   const clickHandeler = ()=>{
       setPrice('100$')
    
   }
    return (
         <Card className='expense-item'>
         <ExpenseDate date={props.date} />--
         <ExpenseDetails title={props.title} ammount={props.ammount}  location={props.location} />
         <div className='expense-item__description'>--
             <h2>{props.Title}</h2>
            <div className='expense-item__price'>{price}</div>
            </div>
            <button onClick={clickHandeler}>Change Expense</button> 
     </Card> 
      
    );
}

export default ExpenseItem;