import React, { useState } from "react";
import "./Card.css"


function Service_Card(props) {
  
  const {Service_Card_Image,Service_Card_Heading}=props;
  
  return (
      <div className="Service_Card">
      <div className="Card">
      <diV> 
      <img className="Card_Img"  src={Service_Card_Image} alt="Card_Img" />
      </diV>
      <diV className="Card_Content" >
          <h2 className="Card_Heading">{Service_Card_Heading}</h2>
      </diV>
    
    </div>
   
      </div>
    

  );
}

export default Service_Card