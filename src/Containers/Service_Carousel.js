import Carousel from "react-multi-carousel";
import Service_Card from "../Components/Service_Card";
import Service_Card1 from "../Assets/Service/Shortlisting.png"
import Service_Card2 from "../Assets/Service/Site visits.png"
import Service_Card3 from "../Assets/Service/Transactions.png"
import Service_Card4 from "../Assets/Service/Registration.png"
import Service_Card5 from "../Assets/Service/Loan.png"
import Service_Card6 from "../Assets/Service/Bulk bookings.png"
import Service_Card7 from "../Assets/Service/NRI desk.png"
import Service_Card8 from "../Assets/Service/Liaising.png"
import "../Components/Card.css"
import "../Components/Img_Card.css"
import arrow_left from "../Assets/Home/Arrow_Left.png"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./Home/Home.css"
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [

  <Service_Card Service_Card_Image={Service_Card1}  Service_Card_Heading="Shortlisting"  />,
  <Service_Card Service_Card_Image={Service_Card2}  Service_Card_Heading="Site visits  "   />,
  <Service_Card Service_Card_Image={Service_Card3}  Service_Card_Heading="Transactions"   />,
  <Service_Card Service_Card_Image={Service_Card4}  Service_Card_Heading="Registration"   />,
  <Service_Card Service_Card_Image={Service_Card5}  Service_Card_Heading="Loan"   />,
  <Service_Card Service_Card_Image={Service_Card6}  Service_Card_Heading="Bulk bookings"   />,
  <Service_Card Service_Card_Image={Service_Card7}  Service_Card_Heading="NRI desk"   />,
  <Service_Card Service_Card_Image={Service_Card8}  Service_Card_Heading="Liaising  "   />,
  
];
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group"> 
      <div
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        <button
              className="Schroll_Left"
            >
              <img className="arrow_left" src={arrow_left} alt="arrow_left" />
            </button>
      </div>
      <div onClick={() => next()}> <button
              className="Schroll_right"
            >
              <ArrowRightAltIcon className="arrow" />
            </button></div>
    </div>
  );
};


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Service_Carousel = ({ deviceType }) => {
  return (
    <Carousel
    
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      arrows={false}
      customButtonGroup={<ButtonGroup />}
      renderButtonGroupOutside
      
    >
      {images.slice(0, 5).map(image => {
        return (
          images.map((Service_Card) => {
            return Service_Card;
          })
        );
      })}
    </Carousel>
  );
};


export default Service_Carousel;
