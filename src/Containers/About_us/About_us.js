import React from "react";
import Navbar from "../../Components/Navbar";
import "../Home/Home.css"
import "./About_us.css"
import About_us_Img1 from "../../Assets/About_us/About_Us_Img1.png"
import About_us_Img2 from "../../Assets/About_us/About_Us_Img2.png"
import Card1 from "../../Assets/About_us/About_Us_Card1.png"
import Card2 from "../../Assets/About_us/About_Us_Card2.png"
import Card3 from "../../Assets/About_us/About_Us_Card3.png"
import Card from "../../Components/Card"
import About_us_Img3 from "../../Assets/About_us/About_Us_Img3.png"
import About_us_Img4 from "../../Assets/About_us/About_Us_Img4.png"

function About_us() {
  
  const [buyer, setbuyer] = React.useState(true);
  const [seller, setseller] = React.useState(false);
  const [agent, setagent] = React.useState(false);

  return (
    <div className="About_us_Page">
      <Navbar about={true} />
      <div className="Our_Service_Group">
        <div className="Our_Service_Txt" >
          <h1>About us</h1>
          <hr className="Underline_HR" ></hr>
          <p2>VR Realty and Investment Advisory is one of India’s top leading real estate and investment advisory firms with a presence in India and Canada. With our constant expansion, we aim to be globally renowned through our expert scalable, end-to-end services. We have a diversified team of various individuals coming from different backgrounds and educational fields. Together, we bring to you this platform as your one-stop destination for all your real estate needs. Not only do we work with real estate, but stand apart from other firms through our distinctive business model on REIT investment advisory services and partnerships with real estate agents across India and the globe. Our other services include asset management, top real estate properties, marketing, sales for all your projects, and joint ventures. There is definitely something in it for you if you are a developer, landowner, property seeker, or agent. Finding the most suitable property is never a cakewalk, but with us, you have an entire team of real estate experts at your service! Scale to greater heights with us at VR Realty and Investment Advisory!</p2>
        </div>
        <div>
          <img className="Our_Service_Img" src={About_us_Img1} alt="Our_Service_Img" />
        </div>

      </div>
      <div className="Our_Journey">
      <h1>Our Journey</h1>
          <hr className="Underline_HR" ></hr>
          <img className="Our_Journey_Img" src={About_us_Img2} alt="Our_Service_Img" /> 
          <diV className="Our_Journey_Para">
        <div className="Our_Journey_Para_Box"> <p2>At VR Realty and Investment Advisory, we are a complete mix and match team of experienced professionals coming from diverse backgrounds and educational fields like engineering, construction, finance, real estate, and so on. The already existing real estate background that we possess, gives us an edge to provide customers with the best real estate advisory and investment services. Our main idea is to promote the notion of scalable real estate marketing through partnerships with real estate agents across India and the globe.</p2></div>
        <div className="Our_Journey_Para_Box"><p2> Our tie-ups with partner firms through our very exclusive co-worker system, enable easy and smooth buying and selling of houses for our customers. We are always expanding our co-workers’ network within India and across the globe, to give the best of what we have to our clients. Our expertise has brought us together in the real estate world to create a sublime experience for customers who are looking for their dream homes. </p2> </div>
      </diV>   
      </div>
      <diV className="Market_Insights">
        <diV>
          <h1 className="Insights_Heading">Why Us ?</h1>
          <diV className="Insight_hr"><hr className="Underline_HR" ></hr></diV>
        </diV>
        <diV className="Cards_Home">
          <Card  Card_Image={Card1} Card_Heading="RERA Approved" Card_para="With our RERA certification, we have an established name in the real estate markets by providing valuable end-to-end solutions and services that are carefully thought over by advisory experts." />
          <Card Card_Image={Card2} Card_Heading="Transparent Transactions" Card_para="Our transaction systems are transparent to provide full disclosure to our clients and display the property the way it is." />
          <Card Card_Image={Card3} Card_Heading="Co-worker System" Card_para="We have a well-established system of real estate agents in the country and across the globe. Our tie-ups with partner firms enable easy and smooth buying and selling of houses for our clients." />
        </diV>
      </diV>
      <div className="How_It_Works">
      <diV>
          <h1 className="">How it Works</h1>
          <diV className=""><hr className="Underline_HR" ></hr></diV>
        </diV>
        <div className="List_Heading">
        <button className="Title_Lists"  onClick={() => {setbuyer(!buyer);setagent(false); setseller(false);}}> <p2  className="buyerselect" style ={ buyer?{ color: "#006FF7"}:{ color: ""} }> BUYER</p2> </button>
         <div className="vl"></div>
         <button className="Title_Lists"onClick={() => {setseller(!seller); setbuyer(false); setagent(false);}}> <p2  style ={ seller?{ color: "#006FF7"}:{ color: ""}} >  SELLER</p2> </button>
         <div className="vl"></div>
         <button className="Title_Lists"onClick={() => {setagent(!agent); setbuyer(false);setseller(false)}}> <p2 className="agentselect" style ={ agent?{ color: "#006FF7"}:{ color: ""}} > AGENT</p2> </button>
       </div>
       <diV className={buyer?"values_first":"none"}>
          <div className="first_value">
            <h3 className="value_no" >1</h3>
            <p2> <b>Find your dream home:</b> Buying property has never been easier. We have a whole lot of options for you to choose from! </p2>
          </div>
          <div className="second_value">
            <h3 className="value_no">2</h3>
            <p2> <b>Send us your requirements:</b> All you need to do is send us what you would like within your property, budget details, and locations, and we will find something that will fit right into your needs. </p2>
          </div>
          <div className="third_value">
            <h3 className="value_no">3</h3>
            <p2> <b>Guided Tours:</b> With our expert property and real estate advisors, you can indulge in guided tours of your potential properties. </p2>
          </div>
        </diV>
        
        <diV className={seller ?"values_Second" :"none"}>
          <div className="first_value">
            <h3 className="value_no" >1</h3>
            <p2><b>Systematic selling process:</b> At times, it gets difficult to find the right buyer for your property even after scouting. We can help you ease out of a situation like this with our systematic selling process.</p2>
          </div>
          <div className="second_value">
            <h3 className="value_no">2</h3>
            <p2><b>Send us your requirements:</b> If you are in search of buyers for your property, send us your property type and location, and we shall find the right buyer for it!</p2>
          </div>
          <div className="third_value">
            <h3 className="value_no">3</h3>
            <p2> <b>Send us your requirements:</b> If you are in search of buyers for your property, send us your property type and location, and we shall find the right buyer for it!</p2>
          </div>
        </diV>
        <diV className= {agent ? "values_Third": "none"}>
          <div className="first_value">
            <h3 className="value_no" >1</h3>
            <p2><b>Value-added services:</b> With VR Realty and Investment Advisory, an agent can send us either their client or property requirements so that we can find the perfect customers for them.</p2>
          </div>
          <div className="second_value">
            <h3 className="value_no">2</h3>
            <p2><b>Transparent transactions:</b> The entire system of transactions will take place smoothly between the agent, client, and our firm. Lastly, the agent will receive a commission for their real estate services with our firm. </p2>
          </div>
          <div className="third_value">
            <h3 className="value_no">3</h3>
            <p2><b>Co-worker system: </b> Through our co-worker environment, there are many benefits like a growing network, boosting your reach, and getting a RERA certification for partnering with us as an agent.</p2>
          </div>
        </diV>
        
      </div>
      <div className="Our_Journey">
      <h1>Our Team</h1>
          <hr className="Underline_HR" ></hr>
          <img className="Our_Journey_Img" src={About_us_Img3} alt="Our_Service_Img" /> 
          <diV className="Our_Journey_Para">
        <div className="Our_Journey_Para_Box"> <p2> We at VR Realty and Investment Advisory have our presence in India as well as across the globe. This comes with diversification in the type of people that work in our firm, as well as a fusion of curious minds and ideas. Our team has expertise in various sectors as they come from a wide range of specialized backgrounds and educational fields. With a blend of individuals from fields like real estate to engineering, construction, architecture, finance, and much more, we naturally become a one-stop destination for all your real estate investment consulting needs.</p2></div>
        <div className="Our_Journey_Para_Box"><p2>  Our team spans across the globe to provide you with global as well as local ideas to explore. We are always on the verge of constant expansion through our very own co-worker system and tie-ups with partner firms. This gives you a cakewalk through the real estate setup and a smooth journey in your process of buying a property. This entire team of real estate experts is forever at your service as we believe in giving the best to our customers while trying to create the most joyful experience for you in the real estate world.</p2> </div>
      </diV>   
      </div>
      <div className="Our_Office">
        <div className="Our_Story_Group">
          <div>
            <img className="Our_Story_Img" src={About_us_Img4} alt="Our_Story_Img" />
          </div>
          <div className="Our_Story_Txt" >
            <h1>Our Office</h1>
            <hr className="Underline_HR" ></hr>
            <h3>Address :</h3>
             <p>#981, 1st Cross Rd, Remco Bhel Layout, Ideal Homes Twp, RR Nagar, Bengaluru, Karnataka - 560098</p>
             <h3 className="Contact_no">Contact number :</h3>
             <p>+91-9779746043</p>
             <p>+91-8847590381</p>
            
          </div>
        </div>
      </div>
      
    </div>

  );
}

export default About_us