
import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <ul>
        <li> <Link to="/">Home</Link> </li>
       
        <li> <Link to="/count_hooks">Count Hooks</Link> </li>
        
        <li> <Link to="/view_count_hooks">View Count Hooks</Link> </li>
       
    </ul>
  )
}

export default Header
