
import './App.css';
import foodsData from './foods.json';
import React, {useState} from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [foodList, setFoodList] = useState(foodsData);

  const handleAddFoodForm = (addFood) => {
    console.log('From component:', addFood)
      const foodListCopy = [...foodList];
      foodListCopy.push(addFood);
      setFoodList(foodListCopy);
  }

  return (
    <div className="App">
    
      <h1>Food List</h1>

      <AddFoodForm newAddedFood={handleAddFoodForm}/>

      <div className='foodBox'>
       {foodList.map(el => {
          return <FoodBox foodArr={{ name: el.name, calories: el.calories, image: el.image, servings: el.servings }} />
        })}
      </div>
      
     
    </div>
  );
}

export default App;
