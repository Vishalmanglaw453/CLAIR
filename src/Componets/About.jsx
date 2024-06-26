import React from "react";
import { Container } from "react-bootstrap";
import cartoon from "../assets/images/png/cartoon.webp"
const About = () => {
  return (
    <>
      <section className=" bg-black mt_2">
        <Container className=" pb-54 pt-100 position-relative" id="about">
          <h2 data-aos="zoom-in-down" className=" ff-maro fw-semibold text-48  lh-57 mb-0 text-center  color-lightwhite ">
            About <span className=" color-yellow">$CLAIR</span>
          </h2>
          <p data-aos="zoom-in-down" className=" ff-maro text-16  mt-lg-3 fw-normal text-14 lh-24 mb-0 text-center color-darkgrey">
            As you navigate through the avatars, you'll find each one has a
            unique voice, bringing laughter and a touch{" "}
            <span className=" d-lg-block">
              of sarcasm to the otherwise serious discussions in the crypto
              space.
            </span>
          </p>
          <p data-aos="zoom-in-down" className=" ff-maro text-16 mt-12 mb-12  fw-normal text-14 lh-24  text-center color-darkgrey">
            In a landscape where tensions can run high, Baby Sinclair’s memes
            serve as a reminder that, sometimes,{" "}
            <span className=" d-lg-block">
              {" "}
              the best way to confront challenges is with a good laugh.
            </span>
          </p>
          <p data-aos="zoom-in-down" className=" ff-maro text-16  fw-normal text-14 lh-24 mb-0 text-center color-darkgrey">
            In this meme-driven world, laughter is not just a reaction; it's a
            powerful tool for change, and Baby Sinclair is wielding{" "}
            <span className=" d-lg-block">
              {" "}
              it with style. The bad players better watch out; the crypto
              defender is here, armed with memes and ready to act.
            </span>
          </p>
          <div data-aos="zoom-in-down" className=" d-flex justify-content-center  mt-32">
            <button className="common_btn  ff-maro fw-bold text-16 lh-24 color-lightblack  ">
              Learn More
            </button>
          </div>
          <img className=" d-lg-block d-none" src={cartoon} alt="cartoonpos" />
        </Container>
      </section>
    </>
  );
};

export default About;
