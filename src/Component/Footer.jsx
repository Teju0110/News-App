import React from 'react'
import './Footer.css'
import {Facebook, Instagram, Twitter} from '@material-ui/icons';

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
      News App made by -
         Tejasvi Sawant
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        
          <Facebook/>
        
          <Instagram/>
        
          <Twitter/>
      </div>
    </div>
  )
}

export default Footer