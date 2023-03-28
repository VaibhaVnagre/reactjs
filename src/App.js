
import './App.css';
import ExpenseItem from './ExpenseItem';
function App() {

const expenses = [
  {
    Dish : 'maggie',
    price : 20,
    car : 'Car',
    carname : 'Harrier' ,
    movie : "movie",
    moviename : "lagan"
  },
  {
    Dish : 'shevbhaji',
    price : 90,
    car : 'Car',
    carname : 'mercedies' ,
    movie : "movie",
    moviename : "jay-ho"
  },
  {
    Dish : 'panner-handi',
    price : 190,
    car : 'Car',
    carname : 'maruti800' ,
    movie : "movie",
    moviename : 'avenger'
  },
  {
    Dish : 'pizza',
    price : 100,
    car : 'Car',
    carname : 'range-rower' ,
    movie : "movie",
    moviename : "ram-setu"
  },

  {
    Dish : 'curry',
    price : 200,
    car : 'Car',
    carname : 'duster' ,
    movie : "movie",
    moviename : "gangs of wasepur"
  }

]

 
  return (

    <div className="App">
      
   {expenses.map((val)=>{

    return(
      <>
         <ExpenseItem
          Dish={val.Dish}
          price={val.price}
          car={val.car}
          carname={val.carname}
          movie={val.movie}
          moviename={val.moviename}></ExpenseItem>
          
    </>
         )
   })}
        
    </div>
  );
}

export default App;
