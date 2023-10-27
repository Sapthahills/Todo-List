import React from 'react'

const Footer = () => {
  const year=new Date();
  return (
    <div className='footer'>
        <p>Copyrights &copy; {year.getFullYear()}</p>
    </div>
  )
}

export default Footer