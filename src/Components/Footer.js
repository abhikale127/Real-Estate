import React from "react";

import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./Footer.css"
import Social_Icon1 from "../Assets/Home/001-facebook.png"
import Social_Icon3 from "../Assets/Home/004-instagram.png"
import Social_Icon2 from "../Assets/Home/003-twitter.png"
import Logo from "../Assets/Home/Logo.png"
function Footer() {
  
  

  return (
    <div className="Footer">
      <diV className="Footer_Heading">
       <diV> <span className="Keeping_it">Keeping It Real...</span><span className="Estate">Estate!</span></diV>
       <Link to="/Contact">
          <button
              className="Footer_btn"
          >
        Contact us <ArrowRightAltIcon className="arrow" />
          </button>
        </Link>
      </diV>
      <hr className="Footer_hr"></hr>
      <diV className="Nav_Footer_Lgo">
      <img className="Nav_Footer_Logo" src={Logo} alt="Logo" />
      
      <diV>
      <diV>
      <div >
       <ul className="Footer_Buttons">
      <li>
        <Link to="/service">
          <button
              className="Footer_Nav"
       
          >
            service
          </button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button
              className="Footer_Nav"
       
          >
            About us
          </button>
        </Link>
      </li>
      <li>
        <Link to="/NRI_Desk">
          <button
              className="Footer_Nav"
       
          >
          NRI
          </button>
        </Link>
      </li>
      <li>
        <Link to="/Social">
          <button
              className="Footer_Nav"
       
          >
     Social Responsibility
          </button>
        </Link>
      </li>

      <li>
        <Link to="/Rewards">
          <button
              className="Footer_Nav"
       
          >
           Rewards
          </button>
        </Link>
      </li>
     
      <li>
        <Link to="/Blog">
          <button
              className="Footer_Nav"
       
          >
           Blogs
          </button>
        </Link>
      </li>
      <li>
        <Link to="/FAQs">
          <button
              className="Footer_Nav"
       
          >
           FAQs
          </button>
        </Link>
      </li>
     
    </ul>
    
       </div>
       <div className="Footer_Mobile" >
       <ul className="Footer_Buttons_Mobile">
         <div>
      <li>
        <Link to="/service">
          <button
              className="Footer_Nav"
       
          >
            service
          </button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button
              className="Footer_Nav"
       
          >
            About us
          </button>
        </Link>
      </li>
      <li>
        <Link to="/NRI_Desk">
          <button
              className="Footer_Nav"
       
          >
          NRI
          </button>
        </Link>
      </li>
      </div>
      <diV className="Footer_Nav_Right_Part">
      <li>
        <Link to="/Rewards">
          <button
              className="Footer_Nav"
       
          >
          Rewards
          </button>
        </Link>
      </li>
     
      <li>
        <Link to="/Blog">
          <button
              className="Footer_Nav"
       
          >
           Blogs
          </button>
        </Link>
      </li>
      <li>
        <Link to="/FAQs">
          <button
              className="Footer_Nav"
       
          >
           FAQs
          </button>
        </Link>
      </li>
      

      </diV>
     
    </ul>
    
        <Link to="/Social">
          <button
              className="Footer_Nav"
       
          >
     Social Responsibility
          </button>
        </Link>
      
       </div>


      </diV>
      </diV>
      </diV>
      <diV className="Social_Media_Icons">
      <img className="Social_Icon"  src={Social_Icon1} alt="Social_Icon" />
      <img className="Social_Icon"  src={Social_Icon2} alt="Social_Icon" />
      <img className="Social_Icon"  src={Social_Icon3} alt="Social_Icon" />
      </diV>
      
    </div>

  );
}

export default Footer