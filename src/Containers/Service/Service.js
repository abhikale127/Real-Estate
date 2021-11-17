import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import "./Service.css";
import "../Home/Home.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Our_Service from "../../Assets/Service/Our_service_Img.png";
import Service_Carousel from "../Service_Carousel";
import Checkbox from "@mui/material/Checkbox";
import { fabClasses } from "@mui/material";

function Service() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [full_name, setfull_name] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [types_of_services, settypes_of_services] = useState("");
  const [message, setmessage] = useState("");
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
      address:address,
      types_of_services:types_of_services,
      message:message,
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/service/`, data)
      .then((res) => {
        setData(res.data);
        setfull_name("");
        setaddress("");
        setphone("");
        settypes_of_services("");
        setmessage("");
        setemail("");
        setmailerr("");
        setphoneerr("");
        setnameerr("");
        setChecked(false);
        setLoading(false);
        console.log("sucessss");
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
    <div>
      <Navbar service={true} />
      <div className="Service_Banner">
        <div className="Our_Story_Group">
          <div>
            <img
              className="Our_Story_Img"
              src={Our_Service}
              alt="Our_Story_Img"
            />
          </div>
          <div className="Our_Story_Txt">
            <h1>Our Service</h1>
            <hr className="Underline_HR"></hr>
            <p2>
              At VR REALTY AND INVESTMENT ADVISORY, we go beyond our customer’s
              basic needs. We provide them with helpful solutions in the real
              estate sector. Our team is working 24X7 to bring the best deals to
              our clients, that being in Property, managing major real estate
              projects, or handling REIT (Real Estate Investment Trust)
              investments. We have got it all covered. VR REALITY AND INVESTMENT
              ADVISORY aims at becoming a one-stop destination for every real
              estate query, keeping our ethics and clients as our priority.
            </p2>
          </div>
        </div>
      </div>
      <div className="For_You">
        <h1>Services for you</h1>
        <hr className="Underline_HR"></hr>

        <div className="Service_Carousel">
          <Service_Carousel />
        </div>
      </div>
      <div className="Enquiry">
        <div className="Enquiry_Heading">
          <h1 className="Enquiry_Heading_Text">Enquire about Services</h1>
          <hr className="Underline_HR"></hr>
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
              <div className="Line2divright">
              <input
                className="Form_Input"
                placeholder="Address"
                type="text"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
              <div className="errordialogue"></div>
              </div>
             
            </div>
            <input className="Form_Input" placeholder="Types of Services"  
              type="Text"
              value={types_of_services}
                onChange={(e) => settypes_of_services(e.target.value)} />
            <textarea
              className="Text_Area"
              type="text"
              rows="7"
              cols="50"
              placeholder="Message"
              value={message}
                onChange={(e) => setmessage(e.target.value)} 
              
            ></textarea>
          </div>
        </form>
        <diV className="check_txt">
          <Checkbox {...label}  onChange= {()=>setChecked(true)}  />
          <span className="Check_Text_Black">
            {" "}
            I have read and agree with the{" "}
            <span className="Check_Text_Blue">Terms of Service </span> and{" "}
            <span className="Check_Text_Blue">Privacy Policy.</span>
          </span>
          <diV className="check_Text_Mbl">
            <div>
              <span className="Check_Text_Black_Mbl">
                {" "}
                I have read and agree with the
              </span>
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

export default Service;
