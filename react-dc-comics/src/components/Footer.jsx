import React from 'react'
import imgf1 from '../assets/img/footer-bg.jpg'
import imgf2 from '../assets/img/footer-facebook.png'
import imgf3 from '../assets/img/footer-periscope.png'
import imgf4 from '../assets/img/footer-pinterest.png'
import imgf5 from '../assets/img/footer-twitter.png'
import imgf6 from '../assets/img/footer-youtube.png'
import imgf7 from '../assets/img/dc-logo-bg.png'


const Footer = () => {
  return (
    <footer className="dc-footer">
    <div className="footer-top">
      <div className="footer-links">
        <div className="footer-column">
            
          <h4>DC COMICS</h4>
          <ul>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Comics</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
        <div className="footer-column shop">
          <h4>SHOP</h4>
          <ul>
            <li><a href="#">Shop DC</a></li>
            <li><a href="#">Shop DC Collectibles</a></li>
          </ul>
        </div>
          
        <div class="footer-column">
          <h4>DC</h4>
          <ul>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Privacy policy (New)</a></li>
            <li><a href="#">Ad Choices</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Subscriptions</a></li>
            <li><a href="#">Talent Workshops</a></li>
            <li><a href="#">CPSC Certificates</a></li>
            <li><a href="#">Ratings</a></li>
            <li><a href="#">Shop Help</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>SITES</h4>
          <ul>
            <li><a href="#">DC</a></li>
            <li><a href="#">MAD Magazine</a></li>
            <li><a href="#">DC Kids</a></li>
            <li><a href="#">DC Universe</a></li>
            <li><a href="#">DC Power Visa</a></li>
          </ul>
        </div>
        <img src={imgf7} alt="" className='imgf7'/>
       
      </div>
    </div>
    
    <div className="footer-social">
    <button className="footer-signup" >SIGN-UP NOW!</button>
    
      <span className='span'>FOLLOW US</span>
      <a href="#"><img src={imgf1} alt="" /></a>
      <a href="#"><img src={imgf2} alt="" /></a>
      <a href="#"><img src={imgf3} alt="" /></a>
      <a href="#"><img src={imgf4} alt="" /></a>
      <a href="#"><img src={imgf5} alt="" /></a>
      <a href="#"><img src={imgf6} alt="" /></a>
      
      
     
    </div>
  </footer>
  
        
  
  )
}

export default Footer
