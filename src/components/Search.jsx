import React from 'react'
import { Divider, Input } from 'antd';

export default function Search(props) {
    const {onSearch} = props;
  return (
    <div>
        <Divider> Add Food Entry</Divider>
        <label>Search</label>
        <Input type="text" placeholder='Enter search query' onChange={(e) => onSearch (e.target.value)}/>
    </div>
  )
}
