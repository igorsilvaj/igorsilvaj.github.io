import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <Link className='defLink' to="/" >Home</Link>
      <Link className='defLink' to="/projects" >Projects</Link>
      <Link className='defLink' to="/Construction" >Construction</Link>
    </div>
  )
}
