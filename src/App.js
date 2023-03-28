
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
    moviename : "lagan",
    date : new Date(2010,6,16),
    title : 'petrol',
    ammount : 80,
    location : 'Dubai'

  },
  {
    Dish : 'shevbhaji',
    price : 90,
    car : 'Car',
    carname : 'mercedies' ,
    movie : "movie",
    moviename : "jay-ho",
    date : new Date(2019,9,29),
    title : 'beer',
    ammount : 100,
    location : 'goa'

  },
  {
    Dish : 'panner-handi',
    price : 190,
    car : 'Car',
    carname : 'maruti800' ,
    movie : "movie",
    moviename : 'avenger',
    date : new Date(2023,7,25),
    title : 'the-movie',
    ammount : 500,
    location : 'mumbai'

  },
  {
    Dish : 'pizza',
    price : 100,
    car : 'Car',
    carname : 'range-rower' ,
    movie : "movie",
    moviename : "ram-setu",
    date : new Date(2022,5,10),
    title : 'Pool',
    ammount : 1500,
    location : 'pune'

  },

  {
    Dish : 'curry',
    price : 200,
    car : 'Car',
    carname : 'duster' ,
    movie : "movie",
    moviename : "gang-of-wasepur",
    date : new Date(2021,2,28),
    title : 'the-movie',
    ammount : 180,
    location : 'buldana'

  },
  

]

 
  return (

    <div className="App">
      
   {expenses.map((val)=>{

    return(
     
         <ExpenseItem
          Dish={val.Dish}
          price={val.price}
          car={val.car}
          carname={val.carname}
          movie={val.movie}
          moviename={val.moviename}
          date={val.date}
            title={val.title}
            ammount={val.ammount}
            location={val.location}
          ></ExpenseItem>
          
          
   
         )
   })}
        
    </div>
  );
}

export default App;
