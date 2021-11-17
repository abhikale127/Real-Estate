import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Logo from "../../Assets/Home/Logo.png";
import MobileLogo from "../../Assets/Home/Logo_Mobile.png";
import Our_Story from "../../Assets/Home/Our_Story.png";
import Our_Service from "../../Assets/Home/Our_Service_Image.png";
import Offer_Image from "../../Assets/Home/Offer_Image.png";
import Card from "../../Components/Card";
import Card1 from "../../Assets/Home/Insight_Card1.png";
import Card2 from "../../Assets/Home/Second_card_Home.png";
import Card3 from "../../Assets/Home/Third_Card_Home.png";
import pic1 from "../../Assets/Home/Ellipse 1.png";
import pic2 from "../../Assets/Home/Ellipse 2.png";
import pic3 from "../../Assets/Home/Ellipse 3.png";
import pic4 from "../../Assets/Home/Ellipse 4.png";
import pic5 from "../../Assets/Home/Ellipse 5.png";
import Menu from "../../Assets/Home/menu.png";
import Index from "../Img_Card_Carousel";
import Close_Icon from "../../Assets/Home/Close_Icon.png";
import Dots from "../../Assets/Home/Dots.png"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
  const matches = useMediaQuery("(min-width:600px)");
  const [expand, Setexpand] = React.useState(false);
  return (
    <div className="Home">
      <div className={expand ? "none" : "Home_Navbar"}></div>

      <diV className={expand ? "none" : "work_btn"}>
        <div className="Nav_Logo">
          <img className="Logo" src={Logo} alt="Logo" />
        </div>

        <div className="Mobile_Nav_home">
          {/* Mobile Part of Nav */}

          <diV>
            {" "}
            <img
              className="MobileLogo"
              src={MobileLogo}
              alt="MobileLogo"
            />{" "}
          </diV>
          <diV
            className="MenuIcon"
            onClick={() => {
              Setexpand(true);
            }}
          >
            <button className="Nav_btn">
              <img className="MenuIcon" src={Menu} alt="Logo" />
            </button>
          </diV>

          <ul className={expand ? "Navbar_Buttons" : "none"}>
            <li>
              <Link to="/">
                <button className="Nav_btn" style={{ opacity: "1" }}>
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <button className="Nav_btn">service</button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button className="Nav_btn">About us</button>
              </Link>
            </li>
            <li>
              <Link to="/NRI_Desk">
                <button className="Nav_btn">NRI</button>
              </Link>
            </li>
            <li>
              <Link to="/Social">
                <button className="Nav_btn">Social Responsibility</button>
              </Link>
            </li>
            <li>
              <Link to="/Rewards">
                <button className="Nav_btn">Rewards</button>
              </Link>
            </li>
            <li>
              <Link to="/Blog">
                <button className="Nav_btn">Blogs</button>
              </Link>
            </li>
            <li>
              <Link to="/FAQs">
                <button className="Nav_btn">FAQs</button>
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
           <ul className={matches ? "Navbar_Buttons" : "none"}>
            <li>
              <Link to="/">
                <button className="Nav_btn" style={{ opacity: "1" }}>
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <button className="Nav_btn">Service</button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button className="Nav_btn">About us</button>
              </Link>
            </li>
            <li>
              <Link to="/NRI_Desk">
                <button className="Nav_btn">NRI</button>
              </Link>
            </li>
            <li>
              <Link to="/Social">
                <button className="Nav_btn">Social Responsibility</button>
              </Link>
            </li>
            <li>
              <Link to="/Rewards">
                <button className="Nav_btn">Rewards</button>
              </Link>
            </li>
            <li>
              <Link to="/Blog">
                <button className="Nav_btn">Blogs</button>
              </Link>
            </li>
            <li>
              <Link to="/FAQs">
                <button className="Nav_btn">FAQs</button>
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
          <diV
            className="MenuIcon"
            onClick={() => {
              Setexpand(false);
            }}
          >
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
                <button className="Nav_btn">Service</button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button className="Nav_btn">About us</button>
              </Link>
            </li>
            <li>
              <Link to="/NRI_Desk">
                <button className="Nav_btn">NRI</button>
              </Link>
            </li>
            <li>
              <Link to="/Social">
                <button className="Nav_btn">Social Responsibility</button>
              </Link>
            </li>
            <li>
              <Link to="/Rewards">
                <button className="Nav_btn">Rewards</button>
              </Link>
            </li>
            <li>
              <Link to="/Blog">
                <button className="Nav_btn">Blogs</button>
              </Link>
            </li>
            <li>
              <Link to="/FAQs">
                <button className="Nav_btn">FAQs</button>
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

      <div className="Banner">
        <div className="Banner_Heading">
          <h1 className="Banner_H1">
            Dreams come true when you invest with us!
          </h1>
          <p1>
            Reimagine Real Estate just the way you want it with VR Realty and
            Investment Advisory. With top properties to choose from, expert
            end-to-end services, REIT (Real Estate Investment Trust) investment
            guidance, well-defined real estate advisory, and investment
            services, we have created polished customer interrelationships with
            our firm.
          </p1>
        </div>
      </div>
      <div className="Banner_Label">
        <h2 className="Banner_Label_Content">
          “The potential of a property is as good as the person investing in
          it.” Expertise you need. Service you deserve!
        </h2>
      </div>
      <div className="Our_Story">
        <div className="Our_Story_Group">
          <div>
            <img
              className="Our_Story_Img"
              src={Our_Story}
              alt="Our_Story_Img"
            />
          </div>
          <div className="Our_Story_Txt">
            <h1>Our Story</h1>
            <hr className="Underline_HR"></hr>
            <p2>
              We are a group of experienced real estate professionals coming
              from diverse backgrounds and educational fields. Our expertise
              brought us together in the real estate world to create a sublime
              experience for customers who are looking for their dream homes.
              Our main idea is to promote the notion of scalable real estate
              marketing through partnerships with real estate agents across
              India and the globe.
            </p2>
            <Link to="/about">
              <button className="Know_More_btn">
                Know more <ArrowRightAltIcon className="arrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="to_invest">
        <div className="Find_Place_Heading">
          <diV className="Find_Place_H1">
            <h1>Find your next place to invest</h1>
            <hr className="Underline_HR"></hr>
          </diV>
        </div>
        <div className="Find_Place_Image_Cards">
          <Index />
        </div>
      </div>

      <div className="Our_Service_Group">
        <div className="Our_Service_Txt">
          <h1>Our Service</h1>
          <hr className="Underline_HR"></hr>
          <p2>
            We are way more than just a real estate firm! At VR Realty and
            Investment Advisory, we provide a wide range of real estate,
            investment, and asset management scalable services, especially
            through our very own co-worker partnership system. Our end-to-end
            services assure customers top property, marketing, sales for all
            your real estate projects, joint ventures, and guidance on investing
            in REITs. REIT (Real Estate Investment Trust) is realty investments
            without owning property.
          </p2>
          <Link to="/service">
            <button className="Know_More_btn">
              Know more <ArrowRightAltIcon className="arrow" />
            </button>
          </Link>
        </div>
        <div>
          <img
            className="Our_Service_Img"
            src={Our_Service}
            alt="Our_Service_Img"
          />
        </div>
      </div>

      <div className="Unique">
        <div>
          <diV className="Unique_Heading">What makes us unique?</diV>
        </div>
        <div className="Unique_P">
          <p1>
            We provide valuable real estate solutions that are carefully thought
            over by real estate experts making us an established name in the
            real estate markets. With our end-to-end services and scalability,
            we have a foremost presence in North India and Bangalore, with an
            international presence in Canada. Growth never stops here, neither
            does the hustle, as our expansion across the globe is a constant
            process. Our payments systems are transparent to provide full
            disclosure to our clients. To stand out in the real estate world, we
            not only provide real estate services but also investment advisory
            services, guidance on investing in REITs and when to get out of
            them, asset management, and consultancy services.
          </p1>
        </div>
      </div>
      <div className="Core_Values">
        <h1>Core Values</h1>
        <diV className="values">
          <div className="first_value">
            <h3 className="value_no">01</h3>
            <p2>
              We provide the most superior and finest quality of services in
              everything we do. We strive to get better every day as learning
              never stops. Our zeal and enthusiasm drive us to be the next big
              renowned real estate company across the globe. Our mindset for
              each new day is to break barriers and overcome challenges with
              ease through our thorough consultancy expertise.
            </p2>
          </div>
          <div className="second_value">
            <h3 className="value_no">02</h3>
            <p2>
              Our environment while working with our clients involves a complete
              customer-centric approach. We believe in the notion “customer is
              God”. Putting our customers in the center of focus helps us to
              improve on our work and incorporate ideas and perspectives that
              can be beneficial to the projects we work on. At VR Realty and
              Investment Advisory, we follow this as a culture and learning
              experience more than just a strategy.{" "}
            </p2>
          </div>
          <div className="third_value">
            <h3 className="value_no">03</h3>
            <p2>
              With a diversified set of individuals working within our company,
              we have a broad outlook on everything we take up. Diversity has
              always been our trophy to success. With teamwork and collaboration
              of all the members of our team, it establishes opportunities to
              expand new horizons within our small world. It is through such
              diversity of people, views, thoughts, actions, and stances that we
              build a scalable and sustainable environment in our company.{" "}
            </p2>
          </div>
        </diV>
      </div>
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
            <h1>Offers</h1>
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
            <Link to="/Social">
              <button className="Know_More_btn">
                Learn more <ArrowRightAltIcon className="arrow" />
              </button>
            </Link>
          </div>
        </div>
      </diV>
      <diV className="Market_Insights">
        <diV>
          <h1 className="Insights_Heading">Market Insights</h1>
          <diV className="Insight_hr">
            <hr className="Underline_HR"></hr>
          </diV>
        </diV>
        <diV className="Cards_Home">
          <Card
            Card_Image={Card1}
            Card_Heading="Real Estate in Bangalore..."
            Card_para="Bangalore, also known as the Electronic City and IT hub of India, is not only know..."
          />
          <Card
            Card_Image={Card2}
            Card_Heading="The Impact of REIT on Re.."
            Card_para="Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne..."
          />
          <Card
            Card_Image={Card3}
            Card_Heading="Title for the blog post"
            Card_para="Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne..."
          />
        </diV>
        <diV className="Insight_btn">
          <Link to="/Blog">
            <button className="Know_More_btn">
              Read more <ArrowRightAltIcon className="arrow" />
            </button>
          </Link>
        </diV>
      </diV>
   
      <div className="Client_Say">
        <diV className="poup_pics">
          <img className="pic1" src={pic1} alt="pic1" />
          <img className="pic2" src={pic2} alt="pic1" />
          <img className="pic3" src={pic3} alt="pic1" />
          <img className="pic4" src={pic4} alt="pic1" />
          <img className="pic5" src={pic5} alt="pic1" />
        </diV>
        <h1 className="Home_Testimonial_Heading"> What Clients say about us</h1>
        <diV className="Insight_hr">
          <hr className="Underline_HR"></hr>
        </diV>
        <diV className="testimonial">
          <diV className="Home_Testimonial">
          <Carousel  swipeable={true}
          emulateTouch={true}
          autoPlay={false}
          centerMode={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}>
          <h3 className="Home_Testimonial_h3">
              “It was one of the best experiences that I have received from a
              company in a while. The process was smooth and they answered every
              tiny query I had regarding the buying process. The guidance on
              REITs was very helpful. It was an effortless journey that left me
              with satisfying results.”
            </h3>
            <h3 className="Home_Testimonial_h3">
              “It was one of the best experiences that I have received from a
              company in a while. The process was smooth and they answered every
              tiny query I had regarding the buying process. The guidance on
              REITs was very helpful. It was an effortless journey that left me
              with satisfying results.”
            </h3>
            <h3 className="Home_Testimonial_h3">
              “It was one of the best experiences that I have received from a
              company in a while. The process was smooth and they answered every
              tiny query I had regarding the buying process. The guidance on
              REITs was very helpful. It was an effortless journey that left me
              with satisfying results.”
            </h3>
            <h3 className="Home_Testimonial_h3">
              “It was one of the best experiences that I have received from a
              company in a while. The process was smooth and they answered every
              tiny query I had regarding the buying process. The guidance on
              REITs was very helpful. It was an effortless journey that left me
              with satisfying results.”
            </h3>
            <h3 className="Home_Testimonial_h3">
              “It was one of the best experiences that I have received from a
              company in a while. The process was smooth and they answered every
              tiny query I had regarding the buying process. The guidance on
              REITs was very helpful. It was an effortless journey that left me
              with satisfying results.”
            </h3>
        
</Carousel>
          
           
          </diV>
        </diV>
      </div>
    </div>
  );
}

export default Home;
