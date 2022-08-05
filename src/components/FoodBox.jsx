import React from 'react';
import {Card, Col, Button} from 'antd';


export default function FoodBox(props) {
    const { foodArr, onDelete } = props;
  return (
    <Col>
        <Card
            title={foodArr.name}
            style={{ width: 230, height: 300, margin: 10 }}
            >
            <img src={foodArr.image} height={60} alt="food" />
            <p>Calories: {foodArr.calories}</p>
            <p>Servings: {foodArr.servings}</p>
            <p>
                <b>Total Calories: {foodArr.calories * foodArr.servings }</b> kcal
            </p>
            <Button type="primary" onClick={() => onDelete(foodArr.name)}> Delete </Button>
        </Card>
    </Col>
  )
}
