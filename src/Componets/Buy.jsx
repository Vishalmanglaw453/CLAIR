import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Arrowlogo,
  Boxlogo,
  Counting_dot,
  Dollorlogo,
  Tlogo,
} from "../common/Icon";
import yellow_arrow from "../assets/images/svg/rang-yellow-arrow.svg";
import white_arrow from "../assets/images/svg/rang-white-arrow.svg";
import { useState, useEffect } from "react";
const Buy = () => {
  const initialTime = { hours: 12, minutes: 49, seconds: 19 };
  const [timeLeft, setTimeLeft] = useState(initialTime);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        clearInterval(countdown);
      } else {
        if (timeLeft.seconds > 0) {
          setTimeLeft((prevTime) => ({
            ...prevTime,
            seconds: prevTime.seconds - 1,
          }));
        } else {
          if (timeLeft.minutes > 0) {
            setTimeLeft((prevTime) => ({
              hours: prevTime.hours,
              minutes: prevTime.minutes - 1,
              seconds: 59,
            }));
          } else {
            setTimeLeft((prevTime) => ({
              hours: prevTime.hours - 1,
              minutes: 59,
              seconds: 59,
            }));
          }
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timeLeft]);

  return (
    <>
      <section className=" bg-black mt_2">
        <Container className=" d-flex justify-content-center pt-66 pb-3">
          <div className="big_box" data-aos="zoom-in-down">
            <Row>
              <Col
                md={5}
                className=" d-flex  flex-column align-items-lg-start align-items-center"
              >
                <div className="clair_box">
                  <div className=" d-flex justify-content-between align-items-center">
                    <div>
                      <p className=" mb-0  ff-maro  fw-normal text-16 lh-24 color-grey">
                        1 $Clair
                      </p>
                      <p className=" ff-maro text-16 lh-24 color-yellow mb-0 mt-1">
                        0.00387 $
                      </p>
                    </div>
                    <div className=" clair_box_border"></div>
                    <div>
                      <p className=" mb-0  ff-maro  fw-normal text-16 lh-24 color-grey">
                        Raised Amount
                      </p>
                      <p className=" ff-maro text-16 lh-24 color-yellow mb-0 mt-1">
                        332,123$
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" d-flex align-items-center  gap-14 mt-3">
                  <div className="small_common_box d-flex justify-content-center align-items-center">
                    <Dollorlogo />
                  </div>
                  <div className="small_common_box d-flex justify-content-center align-items-center">
                    <Tlogo />
                  </div>
                  <div className="small_common_box d-flex justify-content-center align-items-center">
                    <Arrowlogo />
                  </div>
                  <div className="small_common_box d-flex justify-content-center align-items-center">
                    <Boxlogo />
                  </div>
                </div>
                <button className="Buy_btn ff-maro fw-bold text-16 lh-24 color-lightblack mt_32">
                  Buy Now
                </button>
              </Col>
              <Col md={7} className=" d-flex justify-content-md-end">
                <div className="price">
                  <div className=" pl-15 pe-4 d-flex justify-content-between align-items-center">
                    <div>
                      <p className=" mb-0  ff-maro  fw-normal text-16 lh-24 color-grey">
                        Tokens are Sold
                      </p>
                      <p className=" ff-maro text-16 lh-24 color-yellow mb-0 mt-1">
                        98,212,738
                      </p>
                    </div>
                    <div>
                      <p className=" mb-0  ff-maro  fw-normal text-16 lh-24 color-grey">
                        Tokens Remaining
                      </p>
                      <p className=" ff-maro text-16 lh-24 color-yellow mb-0 mt-1">
                        80,212,738
                      </p>
                    </div>
                  </div>
                  <div className=" position-relative">
                    <input type="range" />
                    <img
                      className=" d-sm-block d-none "
                      src={yellow_arrow}
                      alt="yellow_arrow"
                    />
                    <img
                      className=" d-sm-block d-none "
                      src={white_arrow}
                      alt="white_arrow"
                    />
                  </div>
                  <p className=" fw-normal mt-1 ff-maro text-14 lh-21 mb-0 color-darkgrey">
                    Purchase $Clair fast until the price increase.
                  </p>
                  <div className=" d-flex flex-sm-row flex-column  align-items-sm-center mt-3 ">
                    <div className=" d-flex pe-3 align-items-center gap-10">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2761_62)">
                          <path
                            d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM16.281 17.781C16.134 17.9265 15.942 18 15.75 18C15.558 18 15.366 17.9265 15.219 17.781L10.719 13.281C10.5795 13.14 10.5 12.9495 10.5 12.75V5.25C10.5 4.836 10.836 4.5 11.25 4.5C11.664 4.5 12 4.836 12 5.25V12.4395L16.281 16.7205C16.5735 17.013 16.5735 17.487 16.281 17.781Z"
                            fill="#F1F1F1"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2761_62">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className=" mb-0 ff-maro fw-normal text-16  lh-208 color-lightwhite">
                        Price <span className=" d-lg-block "> increase in</span>
                      </p>
                    </div>
                    <div className=" mt-sm-0 mt-3 ps-2 d-flex gap-2">
                      <div className=" d-flex flex-column gap-1 align-items-center">
                        <p className=" ff-maro  fw-normal text-14 lh-21 color-darkgrey  mb-0">
                          Days
                        </p>
                        <div className="counting_box d-flex justify-content-center align-items-center  ">
                          <p className=" ff-maro mb-0 fw-normal text-24 lh-36  text-white">
                            00
                          </p>
                        </div>
                      </div>
                      <Counting_dot />
                      <div className=" d-flex flex-column gap-1 align-items-center">
                        <p className=" ff-maro  fw-normal text-14 lh-21 color-darkgrey  mb-0">
                          Hours
                        </p>
                        <div className="counting_box d-flex justify-content-center align-items-center  ">
                          <p className=" ff-maro mb-0 fw-normal text-24 lh-36  text-white">
                            {timeLeft.hours}
                          </p>
                        </div>
                      </div>
                      <Counting_dot />
                      <div className=" d-flex flex-column gap-1 align-items-center">
                        <p className=" ff-maro  fw-normal text-14 lh-21 color-darkgrey  mb-0">
                          Mins
                        </p>
                        <div className="counting_box d-flex justify-content-center align-items-center  ">
                          <p className=" ff-maro mb-0 fw-normal text-24 lh-36  text-white">
                            {timeLeft.minutes}
                          </p>
                        </div>
                      </div>
                      <Counting_dot />
                      <div className=" d-flex flex-column gap-1 align-items-center">
                        <p className=" ff-maro  fw-normal text-14 lh-21 color-darkgrey  mb-0">
                          Secs
                        </p>
                        <div className="counting_box d-flex justify-content-center align-items-center  ">
                          <p className=" ff-maro mb-0 fw-normal text-24 lh-36  text-white">
                            {timeLeft.seconds}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div></div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Buy;
