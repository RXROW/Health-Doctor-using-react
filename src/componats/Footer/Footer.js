import React from "react";
import { Container } from "react-bootstrap";
import FooterLogo from "../../assites/logo.png";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";
import {  BiLogoLinkedinSquare } from "react-icons/bi";
import {  BiLogoWhatsappSquare } from "react-icons/bi";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="row">
          <div className="col-md-3 col-sm-6  ">
            <img src={FooterLogo} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="footer-contact">
              <div className="icon-box">
                <BsFillTelephoneOutboundFill />
              </div>
              <div className="text-box">
                <h5>Contact Us</h5>
                <h3>+01 123 456 7890</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 links-box  ">
            <h2> Quick Links</h2>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Booking</li>
              <li>Faq's</li>
              <li>Blogs</li>
              <li>Out Team</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6  links-box ">
            <h2> Our Service</h2>
            <ul>
              <li>Dental Care</li>
              <li>Cardiac Clinic</li>
              <li>Massege Therapy</li>
              <li>Cardiology</li>
              <li>Precise Diagnosis</li>
              <li>Abmbulance Services</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6  ">
            <h2   >   Subcribe</h2>
            <div className="formfooter">
             <input type="email" placeholder="Enter Your Email"/>
           <button>Submit </button> 
           </div>
           <div className="iconFooter ">
            
            <a href="#">
            <BiLogoFacebookSquare />  
              </a>   
              <a href="#">
              <BiLogoWhatsappSquare/>   
              </a>  
              <a href="#">
              <BiLogoLinkedinSquare/>  
              </a>  
              
               
            
        
           </div>
          </div>
        </div>
        <p className="copy"> Copyright © 2023 Design & Developed by  (Xrow) Eslam</p>
      </Container>
    </footer>
  );
};

export default Footer;
