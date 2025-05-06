import React from 'react'
import img from '../assets/img/dc-logo.png'


const header = () => {
  return (
    
    <header class="dc-header">
    <div class="logo">
        <img src={img} alt="DC Comics Logo" />
    </div>
    <nav class="main-nav">
      <ul>
        <li><a href="#">Characters</a></li>
        <li><a href="#" class="active">Comics</a></li>
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
