import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className=" footer_bg mt_2">
        <Container className=" pb-4 pt-124">
          <h2 className=" ff-maro fw-semibold  text-60 lh-72 mb-0 color-yellow text-center">
            $CLAIR
          </h2>
          <p className=" ff-maro fw-normal text-16 lh-24 text-center color-darkgrey mb-0  pt-20">
            In this meme-driven world, laughter is not just a reaction; it's a
            powerful tool for chang
            <span className=" d-lg-block">
              and Baby Sinclair is wielding it with style. The bad players
              better watch out;
            </span>
            the crypto defender is here, armed with memes and ready to act.
          </p>

          <ul className=" d-flex align-items-center flex-wrap gap_32 ps-0 justify-content-sm-center mt-50  mb-0 pb-40">
            <li><a href="#about" className=" ff-maro nav_text fw-medium text-16 lh-24 color-lightgrey">About</a></li>
            <li><a href="#tok" className=" ff-maro nav_text fw-medium text-16 lh-24 color-lightgrey">Tokenomics</a></li>
            <li><a href="#aud" className=" ff-maro nav_text fw-medium text-16 lh-24 color-lightgrey">Audit</a></li>
            <li><a href="#rodmap" className=" ff-maro nav_text fw-medium text-16 lh-24 color-lightgrey">Roadmap</a></li>
            <li><a href="#white" className=" ff-maro nav_text fw-medium text-16 lh-24 color-lightgrey">White Paper</a></li>
            <li><a href="#privacy" className=" ff-maro nav_text fw-medium text-16 lh-24 color-lightgrey">Privacy   </a></li> 
            <li><a href="#Cookies" className=" ff-maro nav_text fw-medium text-16 lh-24 color-lightgrey">Cookies</a></li>
            <li><a href="#Disclaimer" className=" ff-maro nav_text fw-medium text-16 lh-24 color-lightgrey">Disclaimer</a></li> 
     
          </ul>
          <div className="aud-line"></div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
