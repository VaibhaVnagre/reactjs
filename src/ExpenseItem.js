import './Expense.css';
 
function ExpenseItem(props){
  console.log(props)
   

    return (
      <div>
        

         <div className='expense-item'>
       
         <div className='expense-item__description'>
            <h3>Dish :-</h3>  {props.Dish}
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

export default ExpenseItem