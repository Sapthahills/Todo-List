import React from 'react'

function SearchItem({search,setSearch}) {
  return (
    <form className='serachForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">serach</label>
        <input 
        type="text"
        id='serach'
        role='searchbox'
        placeholder='Search Items'
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}/>
    </form>
  )
}

export default SearchItem