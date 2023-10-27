import React from 'react'
import LineItems from './LineItems';

function ListItems({items, handleChange, handleDelete}) {
  return (

    <ul>
    {items.map((x) => (
      <LineItems
      x={x}
      key={x.id}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      
    ))}
  </ul>
  )
}

export default ListItems