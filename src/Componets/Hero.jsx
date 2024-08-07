import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/images/svg/nav-logo.svg";
import { useState, useEffect } from "react";
import dropdown from "../assets/images/svg/nav-lan-logo.svg";
import bigimg from "../assets/images/png/hero_big_img.webp";
import lyar from "../assets/images/png/hero-live-lyar.webp";
import ttob from "../assets/images/svg/hero-toptobottomsvg.svg";
const Hero = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
  }
  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }

  return (
    <>
      <header className="hero_bg_img position-relative">
        <div className=" nav_box">
          <Container>
            <div className=" d-flex justify-content-between align-items-center">
              <div>
                <img className="cursel_pointer" src={logo} alt="logo" />
              </div>
              <ul
                className={`${
                  nav ? "start-0" : "start_100"
                } mb-0 ps-0   d-flex  gap-32  mobile_view `}
              >
                <li>
                  <a
                    onClick={show}
                    href="#about"
                    className=" ff-acuminbold fw-700 text-16 lh-19  color-grey nav_text"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={show}
                    href="#tok"
                    className=" ff-acuminbold fw-700 text-16 lh-19  color-grey nav_text"
                  >
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a
                    onClick={show}
                    href="#aud"
                    className=" ff-acuminbold fw-700 text-16 lh-19  color-grey nav_text"
                  >
                    Audit
                  </a>
                </li>
                <li>
                  <a
                    onClick={show}
                    href="#rodmap"
                    className=" ff-acuminbold fw-700 text-16 lh-19  color-grey nav_text"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    onClick={show}
                    href="#white"
                    className=" ff-acuminbold fw-700 text-16 lh-19  color-grey nav_text"
                  >
                    White Paper
                  </a>
                </li>
                <li className=" dropdown ml-28">
                  <img className="cursel_pointer" src={dropdown} alt="dropdown" />
                  <div class="dropdown-content">
                    <p className=" mb-0  color-grey   text-uppercase ff-maro text-16 fw-normal lh-24">
                      spanish
                    </p>
                  </div>
                </li>
              </ul>

              <div
                onClick={show}
                className="menu d-block d-lg-none position-relative  z-3"
              >
                <span></span>
                <span className="my-2"></span>
                <span></span>
              </div>
            </div>
          </Container>
        </div>
        <Container id="home">
          <h2
            data-aos="zoom-in-down"
            className="  mb-0 text-center mt-50   text-60 lh-72 ff-maro fw-bold color-lightwhite"
          >
            Presale is <span className=" color-yellow">Live</span>
          </h2>
          <p
            data-aos="zoom-in-down"
            className=" mb-0 mt-lg-3 text-center ff-maro fw-normal  lh-24 color-lightgrey"
          >
            Led by the most advanced AI technology, with a unique burn system to
            potentially increase its
            <span className="  d-lg-block">
              value significantly. Secure your chance to become the next
              millionaire!
            </span>
          </p>
          <div
            data-aos="zoom-in-down"
            className=" d-flex justify-content-center mt-35"
          >
            <button className="common_btn d-flex  ff-maro fw-bold text-16 lh-24 color-lightblack align-items-center gap-10">
              <span>Buy $Clair</span>
              <span>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2717_4)">
                    <path
                      d="M1.33333 0.833252C0.873096 0.833252 0.5 1.20635 0.5 1.66659C0.5 2.12682 0.873096 2.49992 1.33333 2.49992H2.81608C2.93741 2.49992 3.05567 2.5381 3.15409 2.60904C3.25252 2.67999 3.32613 2.78011 3.36449 2.89521L6.11198 11.1392C6.23399 11.5053 6.2495 11.8994 6.15592 12.2737L5.92969 13.1803C5.59773 14.5081 6.63132 15.8333 8 15.8333H18C18.4602 15.8333 18.8333 15.4602 18.8333 14.9999C18.8333 14.5397 18.4602 14.1666 18 14.1666H8C7.67551 14.1666 7.4672 13.9003 7.5459 13.5855L7.71651 12.9041C7.74542 12.7886 7.81208 12.6862 7.90591 12.6129C7.99974 12.5397 8.11535 12.4999 8.23438 12.4999H17.1667C17.5255 12.5001 17.8441 12.2706 17.9577 11.9303L20.1794 5.26359C20.3593 4.72377 19.9574 4.16633 19.3883 4.16659H5.96224C5.84091 4.16659 5.72265 4.12841 5.62422 4.05747C5.52579 3.98652 5.45218 3.88641 5.41381 3.7713L4.62435 1.40291C4.5108 1.06255 4.19214 0.833064 3.83333 0.833252H1.33333ZM7.16667 16.6666C6.24619 16.6666 5.5 17.4128 5.5 18.3333C5.5 19.2537 6.24619 19.9999 7.16667 19.9999C8.08714 19.9999 8.83333 19.2537 8.83333 18.3333C8.83333 17.4128 8.08714 16.6666 7.16667 16.6666ZM17.1667 16.6666C16.2462 16.6666 15.5 17.4128 15.5 18.3333C15.5 19.2537 16.2462 19.9999 17.1667 19.9999C18.0871 19.9999 18.8333 19.2537 18.8333 18.3333C18.8333 17.4128 18.0871 16.6666 17.1667 16.6666Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2717_4">
                      <rect
                        width="20"
                        height="20"
                        fill="white"           
                        transform="translate(0.5)"
                      /> 
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </button>
          </div>
          <div
            className=" d-flex justify-content-center  z-0 "
            data-aos="zoom-in-down"
          >
            <img className=" w-100 " src={bigimg} alt="personimg" />
            
          </div>
        </Container>
        <div className=" hero_left_ellipe hero_ellipe_1"></div>
        <div className=" d-flex justify-content-center">
          <img src={lyar} alt="herolyar" />
        </div>
        <a href="#about" className=" d-lg-block d-none herobtn">
              <img src={ttob} alt="ttob_btn" />
            </a>
      </header>
    </>
  );
};

export default Hero;
