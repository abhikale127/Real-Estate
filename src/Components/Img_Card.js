import React from "react";
import "./Img_Card.css"


function Img_Card(props) {
  
  const {Img_Card_Image,Img_Card_Heading}=props;

  return (
    <div className="Img_Card">
      <diV> 
      <img className="Img_Card_Img"  src={Img_Card_Image} alt="Img_Card_Img" />
      </diV>
      <diV className="Img_Card_Content" >
          <h2 className="Img_Card_Heading">{Img_Card_Heading}</h2>
         
      </diV>
    </div>

  );
}

export default Img_Card