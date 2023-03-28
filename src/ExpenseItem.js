
import './Expense.css';

import ExpenseDetails from './ExpenseDetails';
 
import ExpenseDate from './ExpenseDate';
 
function ExpenseItem(props){

   
    return (
      <div>
          
         <div className='expense-item'>
         <ExpenseDate date={props.date} />--
         <ExpenseDetails title={props.title} ammount={props.ammount}  location={props.location} />
         <div className='expense-item__description'>--
             <h3>{props.Dish}</h3>
            <div className='expense-item__price'>
            {props.price}
            </div>
            </div>

        

         <div className='expense-item__description'>
            <h3> {props.car}-</h3>
            <div className='expense-item__price'>
            {props.carname} 
         </div>
            </div>

         

         <div className='expense-item__description'>
            <h3> {props.movie}-</h3>
            <div className='expense-item__price'>
            {props.moviename}
            </div>
            </div>

            </div>
         </div>
         
    );
}

export default ExpenseItem;