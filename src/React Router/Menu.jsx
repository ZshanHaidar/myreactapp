import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.css"

const Menu = () => {
  return (
    <>
    <div className='menu_style'>
    <NavLink activeClassName="active_class" to='/'>About</NavLink>
    <NavLink activeClassName="active_class" to='/search' > Search </NavLink>
    <NavLink activeClassName="active_class" to="/contact">Contact</NavLink>
    <NavLink activeClassName="active_class" to='/user/ /my' > User </NavLink>
    {/* <br/>
        <a href='/'>About Us</a>
        <a href='/contact'>Contact</a> */}
        </div>
    </>
  )
}

export default Menu