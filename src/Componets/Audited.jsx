import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Auditedlogo from "../assets/images/png/Audited-logo.webp";
import Slider from "react-slick";
import slideimg1 from "../assets/images/svg/coinbase-slider1.svg"
import slideimg2 from "../assets/images/svg/coinbase-slider2.svg"
import slideimg3 from "../assets/images/svg/coinbase-slider3.svg"
import slideimg4 from "../assets/images/svg/coinbase-slider4.svg"
import slideimg5 from "../assets/images/svg/coinbase-slider5.svg"
import slideimg6 from "../assets/images/svg/coinbase-slider6.svg"
import autbg1 from "../assets/images/png/autited-bg-1.webp"
import autbg2 from "../assets/images/png/autited-bg-2.webp"

const Audited = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 3000,
    autoplaySpeed: 0,
    slidesToShow: 1.5,
    cssEase: "linear",
  };

  return (
    <>
      <section className=" Audited_bgimg  position-relative mt_2" id="aud">
        <div className="hero_left_ellipe Audited_ellipe1 "></div>
        <Container className=" pt-158 pb-83" id="ser">
          <Row>
            <Col lg={6} className=" d-flex justify-content-center position-relative">
              <img data-aos="zoom-in-down" src={Auditedlogo} alt="Auditedimglogo" />
              <img className=" d-xxl-block d-none" src={autbg1} alt="autbg1" />
            </Col>
            <Col lg={6} className=" mt-0 mt-4">
              <div >
                <div className="">
                  <p data-aos="zoom-in-down" className=" ff-maro text-20 fw-normal lh-30  mb-0 color-grey">
                    Rest easy knowing that $CLAIR is
                  </p>
                  <p data-aos="zoom-in-down" className=" mt-10 fw-semibold text-32 lh-48 mb-0 color-yellow">
                    Fully Audited and 100% Secure.
                  </p>
                  <p data-aos="zoom-in-down" className=" mt-10 ff-maro fw-normal text-20 lh-30 mb-0  color-grey">
                    Zero Room for Rug Pulls: Invest with Confidence.
                  </p>

                 <div data-aos="zoom-in-down"> <button  className="common_btn mt-32 ff-maro fw-bold text-16 lh-24 color-lightblack ">
                    Audit
                  </button></div>
                </div>{" "}
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="aud-line"></div>
        </Container>
        <Container className=" pt-49  pb-160" id="white">
          <Row>
            <Col lg={7} className=" d-flex justify-content-center">
              <div>
                <p data-aos="zoom-in-down" className=" ff-maro fw-semibold text-32 lh-48 color-lightwhite mb-0">
                  Listing on{" "}
                  <span className=" color-yellow">Major Exchanges</span>
                </p>
                <p data-aos="zoom-in-down" className=" clair_text ff-maro text-20 lh-30 fw-normal mb-0 color-grey">
                  Baby Sinclair’s Team is in action to secure the{" "}
                  <span className=" color-yellow">$CLAIR </span> listing on
                  major exchanges. Exciting milestones ahead.
                </p>
              </div>{" "}
            </Col>
            <Col lg={5}>
              <div data-aos="zoom-in-down" className=" coinbase_box mt-lg-0 mt-4">
                <Slider {...settings}>
                  <div className=" w-content">
                    <img className=" w-100" src={slideimg1} alt="sliderimg1" />
                  </div>
                  <div className=" w-content">
                    <img className=" w-100" src={slideimg2} alt="sliderimg2" />
                  </div>
                  <div className=" w-content">
                    <img className=" w-100" src={slideimg3} alt="sliderimg3" />
                  </div>
                  <div className=" w-content">
                    <img className=" w-100" src={slideimg4} alt="sliderimg4" />
                  </div>
                  <div className=" w-content">
                    <img className=" w-100" src={slideimg5} alt="sliderimg5" />
                  </div>
                  <div className=" w-content">
                    <img className=" w-100" src={slideimg6} alt="sliderimg6" />
                  </div>
                </Slider>
                <div className=" d-flex align-items-center  mt25  gap-3">
                  <div className=" slider_bor_1"></div>
                  <div className=" slider_bor_2"></div>
                  <div className=" slider_bor_3"></div>
                </div>
                <img className=" d-xxl-block d-none" src={autbg2} alt="autbg2" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="hero_left_ellipe Audited_ellipe2 "></div>
      </section>
    </>
  );
};

export default Audited;
