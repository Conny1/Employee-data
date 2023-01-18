import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' nav' >
      <NavLink to='/'> Home </NavLink>
      <NavLink to='/update'> Update user info </NavLink>
      

    </div>
  )
}

export default Nav
