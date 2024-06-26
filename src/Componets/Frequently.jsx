import React from "react";
import { Container } from "react-bootstrap";
import smallquestionmark from "../assets/images/png/small-q.webp";
import bigquestionmark from "../assets/images/png/big-q.webp";
const Frequently = () => {
  return (
    <>
      <section className=" accordion_bg  position-relative mt_2">
        <Container className=" pt-165 pb-165 ">
          <h2
            data-aos="zoom-in-down"
            className=" ff-maro fw-semibold pb-60 text-48 lh-57 color-grey mb-0 text-center"
          >
            Frequently Asked <span className=" color-yellow">Questions</span>
          </h2>

          <div
            className="accordion d-flex flex-column align-items-center accordion-flush"
            id="accordionFlushExample"
          >
            <div data-aos="zoom-in-down" className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  WHAT IS $CLAIR?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ff-maro text-16 lh-24 color-darkgrey">
                  Built on the Ethereum blockchain and powered by the most
                  advanced AI technology, Baby Sinclair has the potential to
                  make millions.{" "}
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-down" className="accordion-item mt-4">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Arcu in pellentesque sit odio.
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body  ff-maro text-16 lh-24 color-darkgrey">
                  Built on the Ethereum blockchain and powered by the most
                  advanced AI technology, Baby Sinclair has the potential to
                  make millions.
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-down" className="accordion-item mt-4">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Lorem gravida feugiat aliquet arcu porttitor sodales tellus
                  habitant sed.
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body  ff-maro text-16 lh-24 color-darkgrey">
                  Built on the Ethereum blockchain and powered by the most
                  advanced AI technology, Baby Sinclair has the potential to
                  make millions.
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-down" className="accordion-item mt-4">
              <h2 className="accordion-header" id="flush-headingFout">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Metus augue dictumst sit amet.
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body  ff-maro text-16 lh-24 color-darkgrey">
                  Built on the Ethereum blockchain and powered by the most
                  advanced AI technology, Baby Sinclair has the potential to
                  make millions.
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-down" className="accordion-item mt-4">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Elementum viverra tellus tincidunt nunc odio at id ipsum.
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body  ff-maro text-16 lh-24 color-darkgrey">
                  Built on the Ethereum blockchain and powered by the most
                  advanced AI technology, Baby Sinclair has the potential to
                  make millions.
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-down" className="accordion-item mt-4">
              <h2 className="accordion-header" id="flush-headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Sagittis morbi aliquam facilisis ornare lacus tempus massa.
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body  ff-maro text-16 lh-24 color-darkgrey">
                  Built on the Ethereum blockchain and powered by the most
                  advanced AI technology, Baby Sinclair has the potential to
                  make millions.
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-down" className="accordion-item mt-4">
              <h2 className="accordion-header" id="flush-headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSeven"
                  aria-expanded="false"
                  aria-controls="flush-collapseSeven"
                >
                  Elementum at dui varius consequat fringilla.
                </button>
              </h2>
              <div
                id="flush-collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body  ff-maro text-16 lh-24 color-darkgrey">
                  Built on the Ethereum blockchain and powered by the most
                  advanced AI technology, Baby Sinclair has the potential to
                  make millions.
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="hero_left_ellipe Audited_ellipe1 "></div>
        <div className="hero_left_ellipe Audited_ellipe2 "></div>
      </section>
    </>
  );
};

export default Frequently;
