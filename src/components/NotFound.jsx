import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 15}}>
      <img className="px-4 py-4" src='../404_not_found.png'/>
      <Link className='btn btn-dark' to='/'> Volver a Home</Link>
    </div>
  )
}

export default NotFound
