import React from 'react'
import { Link } from 'react-router-dom'


const Pnf = () => {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img className='img-fluid' src="https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif" alt="" />
      <Link to={'/'} className='btn btn-warning'>Go to Home</Link>
    </div>
  )
}

export default Pnf