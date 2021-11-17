import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import "../Service/Service.css";
import "./NRI_Desk.css";
import Our_Service from "../../Assets/NRI/NRI_Img.png";
import Card from "../../Components/Card";
import Reward1 from "../../Assets/Rewards/Reward_Card1.png";
import Reward2 from "../../Assets/Rewards/Reward_Card2.png";
import Reward3 from "../../Assets/Rewards/Reward_Card3.png";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import add_Icon from "../../Assets/Service/Add_Icon.png";
import RemoveIcon from "@mui/icons-material/Remove";
function NRI() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [line1, setsline1] = React.useState(false);
  const [line2, setsline2] = React.useState(false);
  const [line3, setsline3] = React.useState(false);
  const [line4, setsline4] = React.useState(false);
  const [line5, setsline5] = React.useState(false);
  const [line6, setsline6] = React.useState(false);
  const [line7, setsline7] = React.useState(false);
  const [line8, setsline8] = React.useState(false);

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

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      full_name: full_name,
      email: email,
      phone: phone,
      address: address,
      subject: types_of_services,
      message: message,
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/nri/`, data)
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
    <div className="NRI">
      <Navbar NRI={true} />
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
            <h1>NRI Desk</h1>
            <hr className="Underline_HR"></hr>
            <p2>
              If you are an NRI (Non-Residential Indian) and you are looking for
              a property to buy, sell, or rent, you have arrived at the right
              place! Get yourself your dream home here in India with VR Realty
              and Investment Advisory, which makes your work ten times easier
              for you. Some of our benefits include smooth transactions,
              end-to-end scalable services, real estate advice from experts and
              easy registrations for your property. You have nothing to worry
              about when you have us by your side. Don’t miss out on a chance
              like this. Sign up with us now to explore the real estate
              opportunities we have in store for you!
            </p2>
          </div>
        </div>
      </div>
      <diV className="Market_Insights">
        <diV>
          <h1 className="Insights_Heading">Let’s get started</h1>
          <diV className="Insight_hr">
            <hr className="Underline_HR"></hr>
          </diV>
        </diV>
        <diV className="Cards_Home">
          <Card
            Card_Image={Reward1}
            Card_Heading="Tell us your requirements"
            Card_para="Send us what you would like within your property, budget details, and locations, and we will find something that will fit right into your needs. "
          />
          <Card
            Card_Image={Reward2}
            Card_Heading="Smooth documentation processes"
            Card_para="You do not have to worry a bit when you’re at VR Realty and Investment Advisory. You can take it easy while our team works at bringing you your dream home! "
          />
          <Card
            Card_Image={Reward3}
            Card_Heading="Registration"
            Card_para="Once you’re done with the registration process for your new property, you will be a proud owner of a home in India. It’s that simple."
          />
        </diV>
      </diV>
      <div className="Frequently_Asked_Questions">
        <diV>
          <h1 className="">Frequently Asked Questions</h1>
          <diV className="">
            <hr className="Underline_HR"></hr>
          </diV>
        </diV>

        <div className="Questions">
          <div className="Q_Line_Box">
            <div className="Q_Line">
              <h3>Who is an NRI? (Non-Resident Indian)</h3>
              {line1 ? (
                <RemoveIcon
                  fontSize="large"
                  className="RemoveIcon"
                  onClick={() => {
                    setsline1(!line1);
                  }}
                />
              ) : (
                <img
                  className="add_Icon"
                  src={add_Icon}
                  alt="add"
                  onClick={() => {
                    setsline1(!line1);
                  }}
                />
              )}
            </div>
            <div className={line1 ? "Description_Line" : "none"}>
              <p>
                NRIs are people of Indian origin, who live outside India. If you
                have not resided in India for a specific number of days or a
                stipulated period of time, as stated by the Income Tax Act, you
                will identify as an NRI. If you are an Indian citizen and have
                not lived here for a combined total of 183 days in a financial
                year, you pass off as an NRI. Not meeting these criteria will
                make you a resident of India.{" "}
              </p>
            </div>
            <hr className="NRI_hr"></hr>
          </div>

          <div className="Q_Line_Box">
            <div className="Q_Line">
              <h3>
                What are the types of properties an NRI can buy in India?{" "}
              </h3>
              {line2 ? (
                <RemoveIcon
                  fontSize="large"
                  className="RemoveIcon"
                  onClick={() => {
                    setsline2(!line2);
                  }}
                />
              ) : (
                <img
                  className="add_Icon"
                  src={add_Icon}
                  alt="add"
                  onClick={() => {
                    setsline2(!line2);
                  }}
                />
              )}
            </div>
            <div className={line2 ? "Description_Line" : "none"}>
              <p>
                According to FEMA (Foreign Exchange Management Act), an NRI can
                own all the different kinds of properties ranging from
                residential to commercial. What is not included in this is
                agricultural land, farmhouses, and plantation property. If an
                NRI wants to purchase the same, they will have to acquire
                special permission and rights from the RBI and the Government of
                India.
              </p>
            </div>
            <hr className="NRI_hr"></hr>
          </div>

          <div className="Q_Line_Box">
            <div className="Q_Line">
              <h3>What is the difference between an NRO and NRE account? </h3>
              {line3 ? (
                <RemoveIcon
                  fontSize="large"
                  className="RemoveIcon"
                  onClick={() => {
                    setsline3(!line3);
                  }}
                />
              ) : (
                <img
                  className="add_Icon"
                  src={add_Icon}
                  alt="add"
                  onClick={() => {
                    setsline3(!line3);
                  }}
                />
              )}
            </div>
            <div className={line3 ? "Description_Line" : "none"}>
              <p>
                Non-Resident External (NRE) Account is used to manage income
                earned in India by an Indian or NRI. The amount deposited into
                these accounts must be earned outside India. It is tax-free and
                can be used for personal reasons or investments. On the other
                hand, a Non-Resident Ordinary (NRO) is a savings or current
                account held by NRIs in India to manage their income earned in
                India. They can receive funds in Indian or foreign currency
                here.
              </p>
            </div>
            <hr className="NRI_hr"></hr>
          </div>

          <div className="Q_Line_Box">
            <div className="Q_Line">
              <h3>
                How much taxation is levied on NRIs to sell property in India?{" "}
              </h3>
              {line4 ? (
                <RemoveIcon
                  fontSize="large"
                  className="RemoveIcon"
                  onClick={() => {
                    setsline4(!line4);
                  }}
                />
              ) : (
                <img
                  className="add_Icon"
                  src={add_Icon}
                  alt="add"
                  onClick={() => {
                    setsline4(!line4);
                  }}
                />
              )}
            </div>
            <div className={line4 ? "Description_Line" : "none"}>
              <p>
                NRIs have to pay TDS (Tax Deducted at Source) which is levied on
                the capital gains they make in India i.e. short-term values at
                30% TDS and the long term is 20% TDS.{" "}
              </p>
            </div>
            <hr className="NRI_hr"></hr>
          </div>

          <div className="Q_Line_Box">
            <div className="Q_Line">
              <h3>
                What documents does the NRI need to provide in order to sell
                their property in India?{" "}
              </h3>
              {line5 ? (
                <RemoveIcon
                  fontSize="large"
                  className="RemoveIcon"
                  onClick={() => {
                    setsline5(!line5);
                  }}
                />
              ) : (
                <img
                  className="add_Icon"
                  src={add_Icon}
                  alt="add"
                  onClick={() => {
                    setsline5(!line5);
                  }}
                />
              )}
            </div>
            <div className={line5 ? "Description_Line" : "none"}>
              <p>
                What steps are to be followed by an NRI to sell a property in
                India?
              </p>
              <p>• Passport (Proof of Identity)</p>
              <p>
                Permanent Account Number (PAN) and Income Tax Returns (ITR)
                records - (Required for tax exemption)
              </p>
              <p>
                • Ration card / Telephone bills / Electricity bills / Life
                insurance policy statements / Aadhar card etc.
              </p>
              <p>
                • Allotment Letter / Occupancy Certificate / No Overdue
                Certificate etc. of the property
              </p>
              <p>• Encumbrance Certificate of the property</p>
            </div>
            <hr className="NRI_hr"></hr>
          </div>

          <div className="Q_Line_Box">
            <div className="Q_Line">
              <h3>
                What steps are to be followed by an NRI to sell a property in
                India?
              </h3>
              {line6 ? (
                <RemoveIcon
                  fontSize="large"
                  className="RemoveIcon"
                  onClick={() => {
                    setsline6(!line6);
                  }}
                />
              ) : (
                <img
                  className="add_Icon"
                  src={add_Icon}
                  alt="add"
                  onClick={() => {
                    setsline6(!line6);
                  }}
                />
              )}
            </div>
            <div className={line6 ? "Description_Line" : "none"}>
              <p>
                An NRI can sell their residential or commercial property to
                either a person residing in India, another NRI, or a person of
                Indian origin (PIO). The process of selling a property owned by
                an NRI in India is as follows:
              </p>
              <p>
                The process of selling a property owned by an NRI in India is as
                follows:
              </p>
              <p>
                1. A comprehensive evaluation of the property to determine its
                value.
              </p>
              <p>
                2. Carrying out all the necessary paperwork or if you aren’t
                physically available then granting a trustworthy person as the
                POA.{" "}
              </p>
              <p>3. Understanding the tax liabilities. </p>
            </div>
            <hr className="NRI_hr"></hr>
          </div>

          <div className="Q_Line_Box">
            <div className="Q_Line">
              <h3>What is a Power of Attorney (POA) Registration? </h3>
              {line7 ? (
                <RemoveIcon
                  fontSize="large"
                  className="RemoveIcon"
                  onClick={() => {
                    setsline7(!line7);
                  }}
                />
              ) : (
                <img
                  className="add_Icon"
                  src={add_Icon}
                  alt="add"
                  onClick={() => {
                    setsline7(!line7);
                  }}
                />
              )}
            </div>
            <div className={line7 ? "Description_Line" : "none"}>
              <p>
                Power of Attorney is an authorization or written document by
                which a person can assign specific rights to another person. It
                creates a relationship between the Principal, Executant, Grantor
                (Person granting the authority), and Special Agent, which allows
                the agent to act on behalf of the Principal.
              </p>
            </div>
            <hr className="NRI_hr"></hr>
          </div>

          <div className="Q_Line_Box">
            <div className="Q_Line">
              <h3>Can an NRI sell their property through the POA? </h3>
              {line8 ? (
                <RemoveIcon
                  fontSize="large"
                  className="RemoveIcon"
                  onClick={() => {
                    setsline8(!line8);
                  }}
                />
              ) : (
                <img
                  className="add_Icon"
                  src={add_Icon}
                  alt="add"
                  onClick={() => {
                    setsline8(!line8);
                  }}
                />
              )}
            </div>
            <div className={line8 ? "Description_Line" : "none"}>
              <p>
                The POA could be used for renting, leasing, borrowing, and
                dispute settlement. The POA document should specify the rights
                of the property schedule for which the POA has been given.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Enquiry">
        <div className="Enquiry_Heading">
          <h1 className="Enquiry_Heading_Text">NRI Help Desk</h1>
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
          <Checkbox {...label} />
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
            onClick={handleSubmit}
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

export default NRI;
