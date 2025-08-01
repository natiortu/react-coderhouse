import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 15}}>
      <img src='https://i.postimg.cc/3RjX8319/404-not-found.png'/>
      <Link className='btn btn-dark' to='/'> Volver a Home</Link>
    </div>
  )
}

export default NotFound
