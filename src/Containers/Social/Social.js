import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Offer_Image from "../../Assets/Home/Offer_Image.png";
import Checkbox from '@mui/material/Checkbox';

function Social() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };  

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
          setnameerr("");
          setChecked(false);
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
   
   
   

  return (
    <div className="Social">
      <Navbar Social={true} />
      <diV className="Offer">
        <div className="Our_Story_Group">
          <div>
            <img
              className="Our_Story_Img"
              src={Offer_Image}
              alt="Our_Story_Img"
            />
          </div>
          <div className="Our_Story_Txt">
            <h1>Social Responsibility</h1>
            <hr className="Underline_HR"></hr>
            <p2>
              As part of our social responsibilities, we at VR Realty and
              Investment Advisory have some offers incorporated into our company
              culture and systems. We provide a 50% discount on brokerage to all
              state and central armed police forces. Amid the Covid-19 pandemic
              that the world is currently going through, we are also giving a
              50% discount to hospitals and doctors. Through our rewards
              program, if a customer refers us to a new client, they will earn
              some rewards or incentives once the deal matures.{" "}
            </p2>
            <Link to="/#">
              <button className="Know_More_btn">
                Learn more <ArrowRightAltIcon className="arrow" />
              </button>
            </Link>
          </div>
        </div>
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
           <div className="Line2div">
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
              placeholder="Message"
              value={customer_details}
                onChange={(e) => setcustomer_details(e.target.value)} 
              
            ></textarea>
          </div>
        </form>
        <diV className="check_txt">
          <Checkbox {...label}  onChange= {()=>setChecked(true)} />
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

export default Social;
