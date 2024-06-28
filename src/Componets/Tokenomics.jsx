import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Clair_common } from "../common/Icon";
import tokenimg from "../assets/images/png/Tokenomics_img.webp";
import cartoon from "../assets/images/png/sinclair-cartoon.webp"
import img_1 from "../assets/images/png/sinclairimg1.png"
import plus from "../assets/images/svg/plus_svg.svg"
import img_2 from "../assets/images/png/sinclairimg2.png"
const Tokenomics = () => {
  return (
    <>
      <section className="Tokenomics_bg  mt_2" id="tok">
        <Container className=" pt-104 pb-60" id="blog" >
          <Row>
            <Col lg={5} className=" order-lg-1  order-2 pt-20">
              <h2 data-aos="zoom-in-down" className=" ff-maro mb-0 fw-semibold  text-48 lh-57 color-lightwhite">
                Tokenomics
              </h2>
              <div data-aos="zoom-in-down" className=" mt-lg-3 d-flex  align-items-center gap-3">
                <p className=" mb-0 ff-maro text-24 lh-36 color-grey">
                  Baby Sinclair
                </p>
                <button className=" Clair_btn ff-maro text-24 lh-36">
                  $Clair
                </button>
              </div>
              <p data-aos="zoom-in-down" className=" mt-lg-4 mt-2 ff-maro fw-medium text-16 lh-24 color-grey   mb-0">
                Total Tokens
              </p>
              <p data-aos="zoom-in-down" className="  color-yellow ff-maro fw-semibold text-40 lh-48 mb-0 mt-1">
                100,000,000,000
              </p>
              <div data-aos="zoom-in-down" className=" mt-32">
                <div className="   d-flex gap-12  align-items-center">
                  <Clair_common />
                  <p className=" ff-maro d-flex align-items-end gap-12   color-grey mb-0">
                    <span className=" fw-medium text-24 lh-36 ">1%</span>{" "}
                    <span className=" text-16 fw-normal lh-24">Presale</span>
                  </p>
                </div>
                <div className=" d-flex gap-12  pt-12 align-items-center">
                  <Clair_common />
                  <p className=" ff-maro d-flex align-items-end gap-12   color-grey mb-0">
                    <span className=" fw-medium text-24 lh-36 ">3%</span>{" "}
                    <span className=" text-16 fw-normal lh-24">Marketing</span>
                  </p>
                </div>
                <div className=" d-flex gap-12  pt-12 align-items-center">
                  <Clair_common />
                  <p className=" ff-maro d-flex align-items-end gap-12   color-grey mb-0">
                    <span className=" fw-medium text-24 lh-36 ">5%</span>{" "}
                    <span className=" text-16 fw-normal lh-24">
                      Team - locked for 24 months
                    </span>
                  </p>
                </div>
                <div className=" d-flex gap-12  pt-12 align-items-center">
                  <Clair_common />
                  <p className=" ff-maro d-flex align-items-end gap-12   color-grey mb-0">
                    <span className=" fw-medium text-24 lh-36 ">10%</span>{" "}
                    <span className=" text-16 fw-normal lh-24">
                      Investors - locked for 24 months
                    </span>
                  </p>
                </div>  
                <div className=" d-flex gap-12  pt-12 align-items-center">
                  <Clair_common />
                  <p className=" ff-maro d-flex align-items-end gap-12   color-grey mb-0">
                    <span className=" fw-medium text-24 lh-36 ">21%</span>{" "}
                    <span className=" text-16 fw-normal lh-24">
                      Exchange listings & liquidity
                    </span>
                  </p>
                </div>
                <div className=" d-flex gap-12  pt-12 align-items-center">
                  <Clair_common />
                  <p className=" ff-maro d-flex align-items-end gap-12   color-grey mb-0">
                    <span className=" fw-medium text-24 lh-36 ">60%</span>{" "}
                    <span className=" text-16 fw-normal lh-24">
                      Rewards and burns
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={7} className=" order-lg-2 order-1  d-flex justify-content-lg-end justify-content-center">
              <img data-aos="zoom-in-down" src={tokenimg} alt="tokenimg" />
            </Col>
          </Row>
        </Container>
        <Container className=" pb-96">
            <div data-aos="zoom-in-down" className="token_box">
                <div className=" d-flex flex-column flex-lg-row align-items-center justify-content-between">
                  
                  <div className=" d-flex align-items-center gap-20">
                    <div className="sinclair_box">
                      <img className=" w-100" src={img_1} alt="sanclair" />
                    </div>
                    
                    <img src={plus} alt="plus" />
                    <div className="sinclair_box">
                      <img className=" w-100" src={img_2} alt="sanclair" />
                    </div>
                  </div>
                    <div data-aos="zoom-in-down" className=" mx-xl-0 mx-sm-4 mt-lg-0 mt-4 d-flex flex-column gap-10">
                        <p className=" ff-maro fw-semibold text-20 lh-30 mb-0  color-lightwhite">Baby Sinclair Stands Strong with the Shiba Inu Community</p>
                        <p className=" ff-maro text-16 lh-24 text-16 fw-normal color-grey ">10% of every $CLAIR token sold post-presale will be dedicated to burning SHIB.</p>
                    </div>
                </div>
            </div>
        </Container>
      </section>
    </>
  );
};

export default Tokenomics;
