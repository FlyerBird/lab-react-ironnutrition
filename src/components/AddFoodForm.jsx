import React, {useState} from 'react';
import { Divider, Input, Button } from 'antd';


export default function AddFoodForm(props) {
  const { newAddedFood } = props;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    const food = {
        name: name,
        image: image,
        calories: parseInt(calories),
        servings: parseInt(servings)
    }
    newAddedFood(food)
   
}


  return (
    <div className='form'>
        <form onSubmit={handleForm}>

            <Divider> Add Food Entry</Divider>
            <label>Name</label>
            <Input type="text" value={name} onChange={(e) => { setName(e.target.value) }}/>

            <label>Image</label>
            <Input type="text" value={image}  onChange={(e) => { setImage(e.target.value) }}/>

            <label>Calories</label>
            <Input type="number" value={calories} onChange={(e) => { setCalories(e.target.value) }}/>

            <label>Servings</label>
            <Input type="number" value={servings} onChange={(e) => { setServings(e.target.value) }}/>

            <Button type='submit'>Create</Button>
        
        </form>

    </div>
  )
}
