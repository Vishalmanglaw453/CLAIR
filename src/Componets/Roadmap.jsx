import React from "react";
import { Container } from "react-bootstrap";
import chart from "../assets/images/png/rodmap-img.webp";
import phase1 from "../assets/images/svg/phase1.svg"
import phase2 from "../assets/images/svg/phase2.svg"
import phase3 from "../assets/images/svg/phase3.svg"
const Roadmap = () => {
  return (
    <>
      <section className=" roadmap_bg_img position-relative">
        <Container className=" pb-366 pt-66" id="rodmap">
          <h2 className=" ff-maro fw-semibold text-48 text-center color-grey mb-0 lh-57">
            Roadmap
          </h2>
          <div className=" d-flex  flex-lg-nowrap  flex-wrap  justify-content-center mt-100  gap-90">
            <div className="roadmap_box p-4 mt-184  ">
              <p className=" ff-maro fw-medium  text-32  lh-48 mb-0  text-white">
                Phase 1
              </p>
              <div className=" d-flex  align-items-center gap-2 mt-3">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                  Team Recruitment
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                  Social Media
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                  Audit Smart Contract
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                  Whitepaper
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                  Presale Launch
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                  Community Growth
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                  AI Avatars Release
                </p>
              </div>
              <img className="  d-lg-block d-none" src={phase1} alt="phase1" />
            </div>
            <div className="roadmap_box mt-78 p-4">
              <p className=" ff-maro fw-medium  text-32  lh-48 mb-0  text-white">
              Phase 2
              </p>
              <div className=" d-flex  align-items-center gap-2 mt-3">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                Official Launch
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                Burns 5%
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                Major DEX & CEX Listings
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                Coinmarketcap
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                CoinGecko
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                Influencers Marketing
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                More AI Avatars Release
                </p>
              </div>
              <img className="  d-lg-block d-none" src={phase2} alt="phase2" />
            </div>
            <div className="roadmap_box p-4 mt-84  ">
              <p className=" ff-maro fw-medium  text-32  lh-48 mb-0  text-white">
              Phase 3
              </p>
              <div className=" d-flex  align-items-center gap-2 mt-3">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                Burns (5% quarterly)
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                Rewards Program
                </p>
              </div>
              <div className=" d-flex  align-items-center gap-2 mt-2">
                <div className="roadmap_textdot"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                Multiple Partnerships
                </p>
              </div>
              <div className=" d-flex   gap-2 mt-2">
                <div className="roadmap_textdot mt-2"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                Create your own AI Avatar Voiceover.
                </p>
              </div>
              <div className=" d-flex   gap-2 mt-2">
                <div className="roadmap_textdot mt-2"></div>{" "}
                <p className=" mb-0  fw-medium text-16 ff-maro lh-24 color-grey  ">
                AI Metaverse Avatar Play-to-Earn
                </p>
              </div>
            
              <img className="  d-lg-block d-none" src={phase3} alt="phase3" />
            </div>

          </div>
        </Container>
        <div className=" d-flex justify-content-center">
        <img className=" d-lg-block d-none w-100" src={chart} alt="rodmapchart" /></div>
      </section>
    </>
  );
};

export default Roadmap;
