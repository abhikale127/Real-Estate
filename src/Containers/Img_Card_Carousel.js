
import "react-multi-carousel/lib/styles.css";
import UAParser from "ua-parser-js";
import Carousel from "./Carousel";


const Index = ({ deviceType }) => {
  return (   
        <Carousel deviceType={deviceType} />
     
  );
};
Index.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
export default Index;
