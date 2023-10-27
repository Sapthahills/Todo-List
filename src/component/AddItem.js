import React from 'react'
import { FaPlus} from 'react-icons/fa'

function AddItem({newItem,setNewItem,handleSubmit}) {
  return (
    <form action="" className='form' onSubmit={handleSubmit}>
        <label htmlFor="addItem">add items</label>
        <input type="text"
        id='addItem'
        placeholder='Add items'
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button 
        type='submit'
        aria-label='Add Item'
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem