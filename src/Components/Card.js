import React, { useState } from "react";
import "./Card.css"
import { Link } from "react-router-dom";


function Card(props) {
  
  const {Card_Image,Card_Heading,Card_para}=props;
 

  return (
    <div className="Card">
      <diV>
       <Link to="/Blog_Details">
      <diV className="Card_Img_Parent"> 
      <img className="Card_Img"  src={Card_Image} alt="Card_Img" />
      </diV>
      <diV className="Card_Content" >
          <h2 className="Card_Heading">{Card_Heading}</h2>
          <p2 className="Card_Para">{Card_para}</p2>
      </diV>
      </Link>
      </diV>
    </div>

  );
}

export default Card