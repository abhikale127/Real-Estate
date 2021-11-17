import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import "../Service/Service.css"
import Our_Service from "../../Assets/Service/Our_service_Img.png"
import Card from "../../Components/Card"
import Card3 from "../../Assets/Home/Third_Card_Home.png"
import Reward from "../../Assets/Rewards/Rewards_Img.png"
import Reward1 from "../../Assets/Rewards/Reward_Card1.png"
import Reward2 from "../../Assets/Rewards/Reward_Card2.png"
import Reward3 from "../../Assets/Rewards/Reward_Card3.png"
import "../Home/Home.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Checkbox from '@mui/material/Checkbox';
import { FieldFeedback , FieldFeedbacks } from "react-form-with-constraints";
function Rewards() {
  

   
    const [full_name, setfull_name] = useState("");
    const [phone, setphone] = useState("");
    const [customer_details, setcustomer_details] = useState("");
    const [email, setemail] = useState("");
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const [mailerr,setmailerr]=useState("");
    const [phoneerr,setphoneerr]=useState("");
    const[nameerr, setnameerr]=useState("");
    const [checked, setChecked] = React.useState(false);
  
    const handleSubmit = () => {
      setLoading(true);
      setIsError(false);
      const data = {
        full_name: full_name,
        email:email,
        phone:phone,
        customer_details:customer_details,
      };
      axios
        .post(`${process.env.REACT_APP_API_KEY}/api/contact/`, data)
        .then((res) => {
          setData(res.data);
          setfull_name("");
          setphone("");
          setcustomer_details("");
          setemail("");
          setLoading(false);
          setmailerr("");
          setphoneerr("");
          setChecked(false);
          setnameerr("");
          console.log("sucesssfull submition");
      
        })
        .catch((err) => {
          setLoading(false);
          setIsError(true);
          console.log(err);
         
        });
        if(typeof full_name !== "undefined"){
          setnameerr("Name is required")
          if(!full_name.match(/^[a-zA-Z]+$/)){
            setnameerr("Please enter valid Full Name")
          }        
       }


        if (!email) {
          setmailerr("Email address is required")
           } else if (!/\S+@\S+\.\S+/.test(email)) {
           setmailerr("Email address is invalid")
           }


           var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
           if(phone.match(phoneno)){
           }
               else
                 {
  
               setphoneerr("Please enter 10 digit valid Phone Number")
                 return false;
                 }
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };    
   
   
 


  return (
    <div className="Rewards">
      <Navbar Rewards={true} />
      <div className="Service_Banner">
        <div className="Our_Story_Group">
          <div>
            <img className="Our_Story_Img" src={Reward} alt="Our_Story_Img" />
          </div>
          <div className="Our_Story_Txt" >
            <h1>VR Reality Rewards</h1>
            <hr className="Underline_HR" ></hr>
            <p2>A one of its kind program which enables you to make <br></br> a fortune with a single phone call</p2>
          </div>
        </div>
      </div>
      <diV className="Market_Insights">
        <diV>
          <h1 className="Insights_Heading">How it works ?</h1>
          <diV className="Insight_hr"><hr className="Underline_HR" ></hr></diV>
        </diV>
        <diV className="Cards_Home">
          <Card Card_Image={Reward1} Card_Heading="Send Client Details" Card_para="You bring us leads, either buyers, sellers or rentals" />
          <Card Card_Image={Reward2} Card_Heading="Transaction" Card_para="We close the deal" />
          <Card Card_Image={Reward3} Card_Heading="Referral Reward" Card_para="Referral Reward will be provided to the you according to your contribution" />
        </diV>
      </diV>
      <div className="Enquiry">
        <div className="Enquiry_Heading">
          <h1 className="Enquiry_Heading_Text">Get in touch</h1>
          <hr className="Underline_HR" ></hr>
        </div>
        <form>
          <div className="Form_Lines">
            <div className="Line1">
              <div className="fullinput">
              <input
                className="Form_Input"
                placeholder="Full Name"
                type="text"
                id="full_name"
                value={full_name}
                onChange={(e) => setfull_name(e.target.value)}
              />
                  <div className="errordialogue">{nameerr}</div>
              </div>
             <diV className="fullinput2">
              <input
                className="Form_Input"
                placeholder="Phone Number"
                type="text"
                id="Phone_no"
                maxlength = "10"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
               <div className="errordialogue">{phoneerr}</div>
              </diV>
            </div>
         
            <div className="Line2">
           <div>
              <input  type="email"
               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="Form_Input"
                name="email"
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={(e) =>{ setemail(e.target.value)} }
              />
              <div className="errordialogue">{mailerr}</div>
              </div>
            </div>
            <textarea
              className="Text_Area"
              type="text"
              rows="7"
              cols="50"
              placeholder="Customer details"
              value={customer_details}
                onChange={(e) => setcustomer_details(e.target.value)} 
              
            ></textarea>
          </div>
        </form>
        <diV className="check_txt">
          <Checkbox {...label} onChange= {()=>setChecked(true)} />
          <span className="Check_Text_Black"> I have read and agree with the <span className="Check_Text_Blue">Terms of Service  </span>  and  <span className="Check_Text_Blue">Privacy Policy.</span></span>
          <diV className="check_Text_Mbl" >
            <div>
              <span className="Check_Text_Black_Mbl"> I have read and agree with the</span>
              <span className="Check_Text_Blue_Mbl">Terms.</span>
            </div>
            <div>
              <span className="Check_Text_Blue_Mbl">of Service</span>
              <span className="Check_Text_Black_Mbl"> and</span>
              <span className="Check_Text_Blue_Mbl">Privacy Policy.</span>
            </div>
          </diV>
        </diV>
        <div className="Submit_btn">
          <button
            className="Know_More_btn"
            type="submit"
            onClick={ checked && handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}{" "}
            <ArrowRightAltIcon className="arrow" />
          </button>
        </div>
      </div>
     
    </div>

  );
}

export default Rewards