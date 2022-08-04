import React, {useState} from 'react';
import { Divider, Input, Button } from 'antd';

export default function AddFoodForm() {

  return (
    <div className='form'>
        <form>

            <Divider> Add Food Entry</Divider>
            <label>Name</label>
            <Input type="text" />

            <label>Image</label>
            <Input type="text" />

            <label>Calories</label>
            <Input type="number" />

            <label>Servings</label>
            <Input type="number" />

            <Button type='submit'>Create</Button>
        
        </form>

    </div>
  )
}
