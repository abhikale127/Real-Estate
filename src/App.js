import React from "react";
import './Styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Containers/Home/Home";
import About from "./Containers/About_us/About_us";
import Service from "./Containers/Service/Service";
import Blog from "./Containers/Blog/Blogs";
import Footer from "./Components/Footer";
import Rewards from "./Containers/Rewards/Rewards"
import NRI_Desk from "./Containers/NRI_Desk/NRI_Desk"
import FAQs from "./Containers/FAQs/FAQs"
import Blog_Details from "./Containers/Blog_Details";
import Social from "./Containers/Social/Social";
import Contact from "./Containers/Contact_Us/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    
    <Router>
    
    <ScrollToTop>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      
      <Route path="/about" exact>
        <About />
      </Route>
     
      <Route path="/service" exact>
        <Service />
      </Route>
      <Route path="/Blog" exact>
        <Blog />
      </Route>
      <Route path="/Rewards" exact>
        <Rewards />
      </Route>
      <Route path="/NRI_Desk" exact>
        <NRI_Desk />
      </Route>
      <Route path="/FAQs" exact>
        <FAQs />
      </Route>
      <Route path="/Blog_Details" exact>
        <Blog_Details />
      </Route>
      <Route path="/Social" exact>
        <Social />
      </Route>
      <Route path="/Contact" exact>
        <Contact />
      </Route>
      <Redirect to="/" />
    </Switch>
    <Footer />
    </ScrollToTop>
  </Router>


  );
}

export default App;
