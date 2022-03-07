import React from 'react';
import {NavLink} from 'react-router-dom';
import style from '../scss/Navbar.module.scss'

const Navigation = () => {
  return (
    <nav style={style.nav}>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/articles'}>Articles</NavLink></li>
      </ul>
    </nav>
  )
}

NavLink.defaultProps = {}

export default Navigation
