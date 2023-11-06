import React from "react";
import { Container } from "react-bootstrap";
import homeImg from "../assites/lainding.png";
import sqaur from "../assites/sqaur.png";

import plas from "../assites/plas.png";
import wav from "../assites/wavs.png";

import "./Home.css";
const Home = () => {
  return (
    <>
    <header>
      <Container>
        <div className="row">
          <div className="col-md-6 col-lg-6 text-box">
            <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
            <button>
              <a href="#">Read More</a> 
            </button>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="Header-box">
              <img src={homeImg} alt="Home Page" />
              <img className="sqar" src={sqaur} alt="Home Page" />
              <img className="plas" src={plas} alt="Home Page" />
              <img className="wav" src={wav} alt="Home Page" />
            </div>
          </div>
        </div>
      </Container>
    </header>
    </>
  );
};

export default Home;
