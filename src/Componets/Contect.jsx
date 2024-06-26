import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
const Contect = () => {
  const [textToCopy, setTextToCopy] = useState("0xFD1929755F73f974648daD00ab491a7C44a00eeD");
  const [copyStatus, setCopyStatus] = useState(false);

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
    setTextToCopy("");
    alert("copid")
  };
  return (
    <>
      <section className=" Contract_section position-relative  mt_2">
        <Container className=" pt-152 pb-154" id="con">
          <h2 data-aos="zoom-in-down" className=" ff-maro fw-semibold text-48 lh-57 text-center mb-0 color-lightwhite">
            <span className=" color-yellow">$CLAIR</span> Smart Contract Address
          </h2>
          <div data-aos="zoom-in-down" className=" d-flex justify-content-center mt-4">
            <div className="copy_input_box w-100">
              <input
                type="text"
                value={textToCopy}
                onChange={(e) => setTextToCopy(e.target.value)}
                placeholder="0xFD1929755F73f974648daD00ab491a7C44a00eeD"
                className=" w-100  bg-transparent color-lightgrey ff-maro fw-normal text-16 lh-24 border-0 copyinput"
              />
            </div>
            <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
            
              <button className=" ml_17 common_btn  ff-maro fw-bold text-16 lh-24 color-lightblack">
                Copy
              </button>
            </CopyToClipboard>
          </div>
          <p data-aos="zoom-in-down" className=" ff-maro text-16 mt-32  fw-normal text-14 lh-24 mb-0 text-center color-darkgrey">
            Built on the Ethereum blockchain and powered by the most advanced AI
            technology, Baby Sinclair has the{" "}
            <span className=" d-lg-block">
              potential to make millions in both early stages and long-term
              investment. Our strategic burn system, which{" "}
            </span>
            <span className=" d-lg-block">
              {" "}
              will burn millions of $CLAIR quarterly, aims to increase its value
              significantly. Don't miss out! Get in early and{" "}
            </span>{" "}
            secure your chance to become the next millionaire.
          </p>
        </Container>
        <div className="hero_left_ellipe contect_ellipe1"></div>
      </section>
    </>
  );
};

export default Contect;
