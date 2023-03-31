
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
 
import ExpenseDate from './ExpenseDate';

 
function ExpenseItem(props){

   const clickHandeler = ()=>{
      const parent = document.querySelector('.expense-item').parentNode
    
  
        parent.removeChild(document.querySelector('.expense-item'))
    
   }
    return (
         <Card className='expense-item'>
         <ExpenseDate date={props.date} />--
         <ExpenseDetails title={props.title} ammount={props.ammount}  location={props.location} />
         <div className='expense-item__description'>--
             <h2>{props.Title}</h2>
            <div className='expense-item__price'>{props.price}</div>
            </div>
            <button onClick={clickHandeler}>Delete Expense</button>
     </Card>   
    );
}

export default ExpenseItem;