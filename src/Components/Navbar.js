import React from "react";
import Logo from "../Assets/Home/Logo.png";
import "./Navbar.css";
import "../Containers/Home/Home.css";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import Logo from "../Assets/Home/Logo.png"
import MobileLogo from "../Assets/Home/Logo_Mobile.png";
import Close_Icon from "../Assets/Home/Close_Icon.png";
import Menu from "../Assets/Home/menu.png";

function Navbar(props) {
  const [expand, Setexpand] = React.useState(true);
  const {service,about,Blog,NRI,FAQ,Social,Rewards} = props;

  return (
    <div className={expand? "Navbar" : "Smallnav" }>
       <Link to="/">
      <div className="Nav_Logo">
        <img className="Logo" src={Logo} alt="Logo" />
      </div>
      </Link>

      <diV className="work_btn_Main">
        <div className={expand ? "none" : "Mbl_Nav_Menue_small"}>
        <Link to="/">
          <diV>
            {" "}
            <img
              className="MobileLogo"
              src={MobileLogo}
              alt="MobileLogo"
            />{" "}
          </diV>
          </Link>
          <diV className="MenuIcon"    onClick ={()=> {Setexpand(true)}} >
            
              <button className="Nav_btn">
              <Link to="/">
                <img className="MenuIcon" src={Menu} alt="Logo" />
                </Link>
              </button>
              
         
          </diV>
        </div>
        <div className={expand ? "Mobile_Nav" : "none"}>
          {/* Mobile Part of Nav */}
          <div className="Mbl_Nav_Menue">
            <diV>
              {" "}
              <img
                className="MobileLogo"
                src={MobileLogo}
                alt="MobileLogo"
              />{" "}
            </diV>
            <diV className="MenuIcon" onClick ={()=> {Setexpand(false)}} >
            
                <button className="Nav_btn">
                  <img className="MenuIcon" src={Close_Icon} alt="Logo" />
                </button>
           
            </diV>
          </div>

          <ul className="Navbar_Buttons">
            <li>
              <Link to="/">
                <button className="Nav_btn">Home</button>
                
              </Link>
            </li>
            <li>
              <Link to="/service">
                <button className={service?"Nav_btn_active":"Nav_btn"}>Service</button>
                <hr className={service ?"Underline_HR_Nav":"none"}></hr>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button className={about?"Nav_btn_active":"Nav_btn"}>About us</button>
                <hr className={about ?"Underline_HR_Nav":"none"}></hr>
              </Link>
            </li>
            <li>
              <Link to="/NRI_Desk">
                <button className={NRI?"Nav_btn_active":"Nav_btn"}>NRI</button>
                <hr className={NRI ?"Underline_HR_Nav":"none"}></hr>
              </Link>
            </li>
            <li>
              <Link to="/Social">
                <button className={Social?"Nav_btn_active":"Nav_btn"}>Social Responsibility</button>
                <hr className={Social ?"Underline_HR_Nav":"none"}></hr>
              </Link>
            </li>
            <li>
              <Link to="/Rewards">
                <button className={Rewards?"Nav_btn_active":"Nav_btn"}>Rewards</button>
                <hr className={Rewards ?"Underline_HR_Nav":"none"}></hr>
              </Link>
            </li>
            <li>
              <Link to="/Blog">
                <button className={Blog?"Nav_btn_active":"Nav_btn"}>Blogs</button>
                <hr className={Blog ?"Underline_HR_Nav":"none"}></hr>
              </Link>
            </li>
            <li>
              <Link to="/FAQs">
                <button className={FAQ?"Nav_btn_active":"Nav_btn"}>FAQs</button>
                <hr className={FAQ ?"Underline_HR_Nav":"none"}></hr>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <button className="Work_with_btn">
                Contact us <ArrowRightAltIcon className="arrow" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </diV>
    </div>
  );
}

export default Navbar;
