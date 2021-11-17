import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog/Blog.css"
import Blog_Details_Img1 from "../Assets/Blog/Blog_Details_Img1.png"
import Blog_Details_Img2 from "../Assets/Blog/Blog_Details_Img2.png"
import Blog_Details_Img3 from "../Assets/Blog/Blog_Details_Img3.png"
import Blog_Details_Img4 from "../Assets/Blog/Blog_Details_Img4.png"
import Blog_Details_Img5 from "../Assets/Blog/Blog_Details_Img5.png"
import Navbar from "../Components/Navbar";
import Card1 from "../Assets/Blog/Blog_CArd.png"
import Card2 from "../Assets/Blog/Blog_CArd2.png"
import Card3 from "../Assets/Home/Third_Card_Home.png"
import Card from "../Components/Card"
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";


function Blog_Details() {
  
  const [auther, setAuther] = useState([]);
 

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/blog/1`)
      .then((response) => {
        // handle success
        console.log(response.data);
        setAuther(response.data);
        console.log(auther);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="Blog_Details">
    <Navbar />
     <diV className="Blog_Details_Img1">
     <img className="Blog_Details_Banner" src={Blog_Details_Img1} alt="Logo" />
     </diV>
     <div className="para_Blog">
       <diV className="Blog_Text_box">
         <h1>{auther.title}</h1>
         <diV className="Blog_Text">{auther.created_on} </diV>
         <diV className="Blog_Text">{auther.brief_description}</diV>
         
         <diV className="Blog_Text">    {ReactHtmlParser(auther.content)}</diV>
       </diV>

     </div>
  
    </div>

  );
}

export default Blog_Details