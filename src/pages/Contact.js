import React from "react";
import GetTouchFrom from "../components/ContactComponent/GetTouchFrom";
import ContactUsPage from "../components/ContactComponent/ContactUsPage";
import {CiLocationOn} from "react-icons/ci";
import "./contactStyle.css";
const Contact = () => {
  return (
    <div className="contactUsMain">
      <div className="pageHeader">
        <h1>Contact Us</h1>
      </div>
      <div className="sectionTwo">
      <h1 className="sectionHeadingTwo">Get in touch</h1>
      <div className="contact-details">
        <div className="contact1">
          <CiLocationOn/>
          <p>Office No. 605, Al Akaria 2 Commercial Building Olaya St.,<br/> Riyadh 12244, Kingdom of Saudi Arabia P.O.Box: 2567</p>
        </div>
        <div className="contact2">
          <p>+966 11 419 0728</p>
        </div>
        <div className="contact3">
          <p>info@binyah.com.sa</p>
        </div>
        <div className="contact4">
          <p>Sunday to Thursday <br /> (08:00AM - 4:00PM)</p>
        </div>
      </div>
      </div>
      <ContactUsPage />
      {/* <GetTouchFrom /> */}
    </div>
  );
};

export default Contact;
