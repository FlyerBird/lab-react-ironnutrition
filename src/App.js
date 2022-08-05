
import './App.css';
import foodsData from './foods.json';
import React, {useState} from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [foodList, setFoodList] = useState(foodsData);

  const handleSearch = (searchValue) => {
    if (searchValue === '') {
      setFoodList(foodsData)
    } else {
      const filtered = foodList.filter(elem => elem.name.toLowerCase().includes((searchValue).toLowerCase()))
      setFoodList(filtered);
    }
  }

  const handleAddFoodForm = (addFood) => {
    console.log('From component:', addFood)
      const foodListCopy = [...foodList];
      foodListCopy.push(addFood);
      setFoodList(foodListCopy);
  }

  const handleDelete = (kaka) => {
    const deleteFood = foodList.filter(elem => {
      return elem.name !== kaka
    })
    setFoodList(deleteFood)
  }

  return (
    <div className="App">
    
      <h1>Food List</h1>

      <div>
        <Search onSearch={handleSearch}/>
      </div>

      <div>
        <AddFoodForm newAddedFood={handleAddFoodForm}/>
      </div>

      <div className='foodBox'>
       {foodList.map(el => {
          return <FoodBox onDelete={handleDelete} foodArr={{ name: el.name, calories: el.calories, image: el.image, servings: el.servings }} />
        })}
      </div>
      
     
    </div>
  );
}

export default App;
