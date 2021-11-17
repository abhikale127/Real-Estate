import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import "../Service/Service.css";
import Our_Service from "../../Assets/NRI/FAQ_Img.png";
import "../NRI_Desk/NRI_Desk.css";
import add_Icon from "../../Assets/Service/Add_Icon.png";
import RemoveIcon from "@mui/icons-material/Remove";
import { QuestionAnswer } from "@material-ui/icons";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

function FAQ() {
  const [lines, setLines] = useState([false]);
  const [line1, setsline1] = useState(false);
  const [line2, setsline2] = useState(false);
  const [line3, setsline3] = useState(false);
  const [line4, setsline4] = useState(false);
  const [line5, setsline5] = useState(false);
  const [line6, setsline6] = useState(false);
  const [line7, setsline7] = useState(false);
  const [line8, setsline8] = useState(false);

  const [buyer, setbuyer] = useState(true);
  const [seller, setseller] = useState(false);
  const [agent, setagent] = useState(false);

  const [auther, setAuther] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/faq/`)
      .then((response) => {
        // handle success
        console.log(response.data);
        setAuther(response.data);
        setLines(Array.fill(false, response.data.length));
        console.log(auther);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar FAQ={true} />
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
            <h1>Help Center</h1>
            <hr className="Underline_HR"></hr>
            <p2>
              Wide range of services for a seamless property experience, idque
              instituit docere sic: omne animal, simul atque integre iudicante
              itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam
              et voluptatem accusantium doloremque.Torquatos nostros? quos
              dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se
              repellere, idque instituit docere sic: omne animal, simul atque
              integre iudicante itaque aiunt hanc quasi involuta aperiri, altera
              occulta quaedam et voluptatem accusantium doloremque.
            </p2>
          </div>
        </div>
      </div>

      <div className="Frequently_Asked_Questions">
        <diV>
          <h1 className="">Frequently Asked Questions</h1>
          <diV className="">
            <hr className="Underline_HR"></hr>
          </diV>
        </diV>
        <div className="List_Heading">
          <button
            className="Title_Lists"
            onClick={() => {
              setbuyer(!buyer);
              setagent(false);
              setseller(false);
            }}
          >
            {" "}
            <p2 style={buyer ? { color: "#006FF7" , opacity:1 } : { color: "" }}>
              {" "}
              BUYER
            </p2>{" "}
          </button>
          <div className="vl"></div>
          <button
            className="Title_Lists"
            onClick={() => {
              setseller(!seller);
              setbuyer(false);
              setagent(false);
            }}
          >
            {" "}
            <p2 style={seller ? { color: "#006FF7" ,opacity:1 } : { color: "" }}>
              {" "}
              SELLER
            </p2>{" "}
          </button>
          <div className="vl"></div>
          <button
            className="Title_Lists"
            onClick={() => {
              setagent(!agent);
              setbuyer(false);
              setseller(false);
            }}
          >
            {" "}
            <p2 className="Agent" style={agent ? { color: "#006FF7" ,opacity:1 } : { color: "" }}>
              {" "}
              AGENT
            </p2>{" "}
          </button>
        </div>
        <div className="Questions">
          <diV className={buyer ? "Show" : "none"}>
            <div className="Q_Line_Box">
              {auther.map((obj, index) => {
                return (
                  <div key={index}>
                    <div className="Q_Line">
                      <h3>{obj.question}</h3>
                      {lines[index] ? (
                        <RemoveIcon
                          fontSize="large"
                          className="RemoveIcon"
                          onClick={() => {
                            let newLines = [...lines];
                            newLines[index] = false;
                            setLines([...newLines]);
                          }}
                        />
                      ) : (
                        <img
                          className="add_Icon"
                          src={add_Icon}
                          alt="add"
                          onClick={() => {
                            let newLines = [...lines];
                            newLines[index] = true;
                            setLines([...newLines]);
                          }}
                        />
                      )}
                    </div>
                    <div className={lines[index] ? "Description_Line" : "none"}>
                      {ReactHtmlParser(obj.answer)}
                    </div>
                    <hr className="NRI_hr"></hr>
                  </div>
                );
              })}
            </div>
            </diV>

           
          <diV className={seller ? "Show" : "none"}>
            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>Q1. What is VR REALTY AND INVESTMENT ADVISORY?</h3>
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
                VR REALTY AND INVESTMENT ADVISORY is a real estate investment and advisory which provides end-to-end services relating to real estate, investments, property buying, and selling. We also cover solutions for REIT and overall work to provide a good customer experience.{" "}
                </p>
              </div>
              <hr className="NRI_hr"></hr>
            </div>

            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>Q2. Why VR REALTY AND INVESTMENT ADVISORY? </h3>
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
                We understand that dealing with properties can be quite a hassle. That is why our team of diverse advisors and agents not only helps you buy or sell a property but also provides you insights and advice for better investment and keeps all your demands as a priority. {" "}
                </p>
              </div>
              <hr className="NRI_hr"></hr>
            </div>

            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>Q3. What documents would be needed to sell a property on VR REALTY AND INVESTMENT ADVISORY? </h3>
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
                The original Sale Deed, Title Deed, relevant tax receipts, and Encumbrance Certificate.
                </p>
              </div>
              <hr className="NRI_hr"></hr>
            </div>

            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>Q4. Who needs to pay the stamp duty? The seller or the buyer? </h3>
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
                The buyer is needed to pay the stamp duty.{" "}
                </p>
              </div>
              <hr className="NRI_hr"></hr>
            </div>

            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>Q5. Is it mandatory to register documents for the sale of the property?</h3>
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
                Yes. You can get it done at the sub-registrar's office of the concerned district.
                </p>
              </div>
              <hr className="NRI_hr"></hr>
            </div>

            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>Q6. I want to sell my property. How can VR REALTY AND INVESTMENT ADVISORY?</h3>
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
                You can go on the website of VR REALTY AND INVESTMENT ADVISORY, List yourself as a seller, and fill out the form containing the details. Once done, your property would be listed for sale and the VR REALTY AND INVESTMENT ADVISORY team would contact you in case of potential buyers. 
                </p>
              </div>
            </div>
          </diV>

          <diV className={agent ? "Show" : "none"}>
            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>
                  How does VR Realty and Investment Advisory help agents?{" "}
                </h3>
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
                  At VR Realty and Investment Advisory, we can help you level up
                  your real estate game by providing our excellent client
                  network to unleash your potential as an agent. We want to
                  create a full fledged end-to-end network of real estate agents
                  in the country through our extensive co-worker system. An
                  agent can send us either their client or property requirements
                  so that we can find the perfect customers for them. Our value
                  added services help to engage our agents with other
                  professionals in the real estate world. Lastly, a RERA
                  certification would hurt no one.{" "}
                </p>
              </div>
              <hr className="NRI_hr"></hr>
            </div>

            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>How do I sign up as an agent? </h3>
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
                  You can sign up as an agent with us on our VR Realty and
                  Investment Advisory website. You can also call us at …. Or
                  mail us on… to register!{" "}
                </p>
              </div>
              <hr className="NRI_hr"></hr>
            </div>

            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>
                  How can I post my property requirements on the website?{" "}
                </h3>
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
                  Once you register with us as an agent, you are now part of our
                  extensive network of top real estate agents in the country.
                  You can either call us and send us all your property details
                  and requirements or upload them directly on the website, which
                  we will then get back to.{" "}
                </p>
              </div>
              <hr className="NRI_hr"></hr>
            </div>

            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>
                  Will agents be charged for posting properties on VR Realty and
                  Investment Advisory?
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
                  No one is charged for using our platform or posting property
                  requirements. A license fee may be charged to registered
                  verified users of the platform.{" "}
                </p>
              </div>
              <hr className="NRI_hr"></hr>
            </div>

            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>How does the commission work for real estate agents?</h3>
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
                  Based on the transaction that has taken place, the commission
                  amount will be paid to you after assessing the legal terms.
                </p>
              </div>
              <hr className="NRI_hr"></hr>
            </div>

            <div className="Q_Line_Box">
              <div className="Q_Line">
                <h3>
                  Can we become a RERA certified agent with VR Realty and
                  Investment Advisory?{" "}
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
                  Yes you can. This is one of the biggest perks of being a part
                  of our real estate firm!{" "}
                </p>
              </div>
            </div>
          </diV>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
