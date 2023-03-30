import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import {CgSearch} from "react-icons/cg"





const Header = () => {

  
  return (
   <nav className="header"> 
   
   <img src={logo} alt="logo" />

   <div>

    <Link to="/tvshows">TV Shows</Link>
    <Link to="/movies">Movies</Link>
    <Link to="/recentllyadded">Recently Added</Link>
    <Link to="/mylist">My List</Link>

   </div>

   <CgSearch/>

    </nav>
  )
}

export default Header