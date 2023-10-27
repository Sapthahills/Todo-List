import React from 'react'
import {FaTrash} from "react-icons/fa";

function LineItems({x, handleChange, handleDelete}) {
  return (
    <li className="item" key={x.id}>
        <input
          type="checkbox"
          onChange={() => handleChange(x.id)}
          checked={x.checked}
        />

        <label
          style={x.checked ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => handleChange(x.id)}
        >
          {x.item}
        </label>

        <FaTrash role="button" onClick={() => handleDelete(x.id)} />
      </li>
  )
}

export default LineItems