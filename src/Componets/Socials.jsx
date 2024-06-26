import React from "react";
import { Container } from "react-bootstrap";
import discod from "../assets/images/svg/discord.svg";
import teligram from "../assets/images/svg/teligram.svg";
import twitter from "../assets/images/svg/twitter.svg";
import cartoon from "../assets/images/png/cartoon.webp"
const Socials = () => {
  return (
    <>
      <section className=" bg-black mt_2 ">
        <Container className=" pt-114 pb_154  d-flex justify-content-center position-relative" id="pri" >
          <div className="social_box">
            <h3 data-aos="zoom-in-down" className=" mb-0 ff-maro text-48  lh-57 text-center fw-semibold color-grey">
              Our <span className=" color-yellow">Socials</span>
            </h3>
            <p data-aos="zoom-in-down" className=" ff-maro text-16 lh-24 fw-normal mt-lg-3 mt-1 text-center color-darkgrey">
              Join us on social media for exclusive giveaways and stay
              connected!
            </p>
            <p data-aos="zoom-in-down" className=" ff-maro fw-normal text-20 lh-30 mt-32 text-center color-yellow mb-0">
              “Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready
              for the Fun!"
            </p>
            <div data-aos="zoom-in-down" className=" d-flex align-items-center  gap-3 mt-32 justify-content-center">
                <a href="https://discord.com/" target="blank" className=" social_iconsbox d-flex justify-content-center align-items-center">
                  <img src={discod} alt="discod" />
                </a>
                <a href="https://twitter.com/?lang=en" target="blank" className=" social_iconsbox d-flex justify-content-center align-items-center">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="https://telegram.org/" target="blank" className=" social_iconsbox d-flex justify-content-center align-items-center">
                  <img src={teligram} alt="teligram" />
                </a>
            </div>
          </div>
        <img src={cartoon} alt="socialcartoon" />

        </Container>
      </section>
    </>
  );
};

export default Socials;
