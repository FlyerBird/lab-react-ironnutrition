
import './App.css';
import foods from './foods.json';
import React, {useState} from 'react';

function App() {
  const [foodList, setFoodList] = useState(foods);


  return (
    <div className="App">
      <h1>Food List</h1>
      {foodList.map(food => (
        <div> 
          <p>{food.name}</p>
          <img src={food.image} alt='food elem' width={150}/>
        </div>
      ))}
    </div>
  );
}

export default App;
