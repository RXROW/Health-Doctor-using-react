import React from "react";
import { Container, Row } from "react-bootstrap";
import LogoFooter from '../../assites/logo.png'

const Footer = () => {
  return (
    <>
      <Footer>
        <Container>
          <Row>
            <div className="col-md-3 col-lg-6">
            <img src={LogoFooter}/>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when 
            looking at its layout. The point of using Lorem Ipsum
            </p>
            

            </div>
            <div className="col-md-8 col-lg-8"></div>
            <div className="col-md-8 col-lg-8"></div>
            <div className="col-md-8 col-lg-8"></div>
          </Row>
        </Container>
      </Footer>
    </>
  );
};

export default Footer;
