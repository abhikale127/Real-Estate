import React from "react";
import Navbar from "../../Components/Navbar";
import "../Service/Service.css"
import Our_Service from "../../Assets/Service/Our_service_Img.png"
import Card from "../../Components/Card"
import Card1 from "../../Assets/Home/Insight_Card1.png"
import Card2 from "../../Assets/Home/Second_card_Home.png"
import Card3 from "../../Assets/Blog/blog3.png"
import Card4 from "../../Assets/Blog/blog4.png"
import { Link } from "react-router-dom";

function blog() {
  
  

  return (
    <div>
      <Navbar Blog={true}  />
      <div className="Service_Banner">
        <div className="Our_Story_Group">
          <div>
            <img className="Our_Story_Img" src={Our_Service} alt="Our_Story_Img" />
          </div>
          <div className="Our_Story_Txt" >
            <h1>What to keep in mind while investing in property?</h1>
            <hr className="Underline_HR" ></hr>
            <p2>Bangalore, also known as the Electronic City and IT hub of India, is not only known for its business processes and intellectual residents but is now an upcoming and hot destination for real estate investments or buying property. People tend to contemplate a lot when it comes to property investments, but at VR Realty and Investment Advisory, we make your journey with real estate an absolute cakewalk. 

Bangalore is the main center for development in the current times. And  why? Because it is the IT hub of the country and many people are...</p2>
          </div>
        </div>
      </div>
      <diV className="Blog_Content">
      <div className="Latest_Article">
       <h1>Services for you</h1>
       <hr className="Underline_HR" ></hr>
      
      </div>
      <div className="Blog_Cards">
        <div className="Cards_Home">
        <Card Card_Image={Card1} Card_Heading="Real Estate in Bangalore..." Card_para="Bangalore, also known as the Electronic City and IT hub of India, is not only know..." />
          <Card Card_Image={Card2} Card_Heading="The Impact of REIT on Re.." Card_para="Let’s understand the Journey of REIT in the Real estate business, how it has bee..." />
          <Card Card_Image={Card3} Card_Heading="Real Estate and Housing..." Card_para="As the Real Estate sector continues to evolve, let us look at some of the highligh..." />
        </div>
        <div className="Cards_Home">
        <Card Card_Image={Card4} Card_Heading="How to start investing in..." Card_para="Don’t you want to own valuable property in a luxurious territory? Or have a hotel t..." />
        </div>
       
        
      </div>
      </diV>
      <diV className="Blog_btn">
        <Link to="/Blog_Details" className="Blog_btn"  >
        <button >Lead More</button>
              </Link>
    
        </diV>
    </div>

  );
}

export default blog