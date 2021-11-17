import Carousel from "react-multi-carousel";
import Img_Card from "../Components/Img_Card"
import Img_Card1 from "../Assets/Home/banglore1.png"
import Img_Card2 from "../Assets/Home/Ban_Road.png"
import Img_Card3 from "../Assets/Home/Electronic City.png"
import Img_Card4 from "../Assets/Home/Cubbon_Park.png"
import Img_Card5 from "../Assets/Home/KR Puram.png"
import Right_Icon from "../Assets/Home/Right_Icon.png"
import "../Components/Img_Card.css"
import arrow_left from "../Assets/Home/Arrow_Left.png"

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

  <Img_Card Img_Card_Image={Img_Card1}  Img_Card_Heading="Vidhna Soudha"   />,
  <Img_Card Img_Card_Image={Img_Card2}  Img_Card_Heading="Bannerghatta Road"   />,
  <Img_Card Img_Card_Image={Img_Card3}  Img_Card_Heading="Electronic City"   />,
  <Img_Card Img_Card_Image={Img_Card4}  Img_Card_Heading="Cubbon Park"   />,
  <Img_Card Img_Card_Image={Img_Card5}  Img_Card_Heading="KR Puram"   />,
 
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
              <img className="arrow_left" src={Right_Icon} alt="arrow_left" />
            </button></div>
    </div>
  );
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
    
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      customButtonGroup={<ButtonGroup />}
      renderButtonGroupOutside
      arrows={false}
      
      
    >
      {images.slice(0, 5).map(image => {
        return (
          images.map((Img_Card) => {
            return Img_Card;
          })
        );
      })}
    </Carousel>
  );
};


export default Simple;

