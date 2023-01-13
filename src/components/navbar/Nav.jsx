import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' nav' >
      <NavLink to='/'> Home </NavLink>
      <NavLink to='add' > Add </NavLink>

    </div>
  )
}

export default Nav
