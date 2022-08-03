
import './App.css';
import foods from './foods.json';
import React, {useState} from 'react';
import FoodBox from './components/FoodBox';


function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
    
      <h1>Food List</h1>

      <div className='foodBox'>
       {foodList.map(el => {
          return <FoodBox foodArr={{ name: el.name, calories: el.calories, image: el.image, servings: el.servings }} />
        })}
      </div>

    </div>
  );
}

export default App;
