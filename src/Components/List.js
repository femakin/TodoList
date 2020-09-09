import React from 'react'
import ListItem from './ListItem'
export default function List(props) {
  return (
    <ul>
        {props.list.map((item, index) => (
          <ListItem
            key={index}
            item={item.name}
            
          />
        ))}
      </ul>
      
  )
}
