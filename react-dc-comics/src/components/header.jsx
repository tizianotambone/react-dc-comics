import React from 'react'
import img from '../assets/img/dc-logo.png'


const header = () => {
  return (
    
    <header className="dc-header">
    <div className="logo">
        <img src={img} alt="DC Comics Logo" />
    </div>
    <nav className="main-nav">
      <ul>
        <li><a href="#">Characters</a></li>
        <li><a href="#" className="active">Comics</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV</a></li>
        <li><a href="#">Games</a></li>
        <li><a href="#">Collectibles</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">Fans</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default header
