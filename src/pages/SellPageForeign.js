import NewsLetter from "../components/global/NewsLetter";

import {
  aboutAkashGangaData,
  automateSubmissionSystemData,
  automatePublishingEditorData,
  automatedProfanitySimilarityData,
  openPeerReviewData,
} from "../components/sellPageForeign/data";

import PeraTextData from "../components/global/PeraTextData";
import JoinPublishingCommunityForm from "../components/sellPageForeign/JoinPublishingCommunityForm";

function SellPageForeign() {
  return (
    <>
      <main className="main  ">
        <div className="">
          <div className="container">
            <div className="sell-banner-wrp">
              <div className="sell-banner">
                {/* <!-- <img src="assets/images/sell-banner.png" alt="sell-banner"> --> */}
                <img
                  src="assets/images/foreign-university.gif"
                  alt="sell-banner"
                />
              </div>
              <div className="sell-banner-text">
                <h3 className="title">
                  Publ<span>i</span>sh Your Open <br></br> Access Journal With
                  Us
                </h3>
                <p>
                  Empowering Universities,<br></br> Institutes, and Societies
                  Globally
                </p>
                <div
                  className="ag_special_offer_btn"
                  style={{ flexDirection: "row" }}
                >
                  <a href="javascript:;" className="ag_btn_red">
                    Connect Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="container container-full Transforming-btm-col">
            <div className="ag_heading_center_wrap mt-5">
              <h2>
                Transform<span>i</span>ng Global Scholarly Research
              </h2>
            </div>
            <div className="Transforming-btm-text text-center mb-5">
              <h4>
                Are you looking for an Open Access Publisher to launch your own
                journal?{" "}
                <p>
                  {" "}
                  Are you tired of having your Open Access Journal Proposals{" "}
                </p>{" "}
                <p className="dospace">rejected by traditional publishers?</p>
              </h4>
              <p className="pera-text foraing spacing-more">
                Well, look no further. Partner with Aakashganga to achieve your
                Journal Publishing Objectives.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row about-sec align-items-center">
            <div className="col-lg-6">
              <h4>About Aakashganga</h4>
              <PeraTextData data={aboutAkashGangaData} />

              <div
                className="ag_special_offer_btn mt-3"
                style={{ flexDirection: "row" }}
              >
                <a href="javascript:;" className="ag_btn_red">
                  Connect Now
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="assets/images/sell-logo.png"
                className="sell-logo"
                alt="logo"
              />
              <span>Bringing Your Research Ideas To Life</span>
            </div>
          </div>
        </div>

        <div className="global-publish-challenges">
          <div className="ag_heading_center_wrap my-5">
            <h2>Global Publishing Challenges</h2>
          </div>

          <div className="container">
            <div className="row main-global-publish-challenge challenge-1">
              <div
                className="col-lg-6 global-publisher-col"
                style={{
                  boxShadow: "0px 0px 12px #00000039",
                  borderRadius: "20px",
                }}
              >
                <h4>
                  Automated submission <p>system for articles</p>
                </h4>
                <PeraTextData data={automateSubmissionSystemData} />
              </div>
              <div
                className="col-lg-6 global-publisher-col publisher-2"
                style={{
                  boxShadow: "0px 0px 12px #00000039",
                  borderRadius: "20px",
                }}
              >
                <h4>
                  Automated Publishing Editor Review and Peer Review Selection
                </h4>
                <PeraTextData data={automatePublishingEditorData} />
              </div>
            </div>
            <div className="row main-global-publish-challenge challenge-2">
              <div
                className="col-lg-6 global-publisher-col publisher-3"
                style={{
                  boxShadow: "0px 0px 12px #00000039",
                  borderRadius: "20px",
                }}
              >
                <h4>
                  Fully automated Profanity and Similarity <p> Index checker</p>
                </h4>
                <PeraTextData data={automatedProfanitySimilarityData} />
              </div>
              <div
                className="col-lg-6 global-publisher-col publisher-4"
                style={{
                  boxShadow: "0px 0px 12px #00000039",
                  borderRadius: "20px",
                }}
              >
                <h4>
                  Post Publishing <p>Open Peer Review</p>
                </h4>
                <PeraTextData data={openPeerReviewData} />
              </div>
            </div>
          </div>
        </div>

        <div className="container container-full">
          <div className="ag_heading_center_wrap mt-3 mb-5">
            <h2>Still not convinced? Read on</h2>
          </div>

          <div className="row">
            <div className="col-lg-12 convinced-img-wrp convinced-col-1">
              <div className="convinced-img-col">
                <img src="assets/images/convinced-1.png" alt="convinced_home" />
              </div>
              <div className="convinced-right-text convinced-text">
                <div className="convinced-text-col">
                  <h4>A Future Ready Home For Your Journals</h4>
                  <p>
                    We leverage technology to bring you a smooth, effortless and
                    transparent publishing experience. Our automated workflow
                    simplifies complex manual tasks and will meet all your
                    current and future journal publishing needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 convinced-img-wrp convinced-col-2">
              <div className="convinced-left-text convinced-text">
                <div className="convinced-text-col">
                  <h4>Global Visibility</h4>
                  <p>
                    Each journal within our network is meticulously curated and
                    aligned with quality standards that contribute to a
                    favourable outlook for indexing. This is done through a
                    dedicated focus on content quality, rigorous peer-review
                    processes, and compliance with industry best practices,
                    reaching researchers worldwide.
                  </p>
                </div>
              </div>
              <div className="convinced-img-col">
                <img src="assets/images/convinced-2.png" alt="convinced_home" />
              </div>
            </div>

            <div className="col-lg-12 convinced-img-wrp convinced-col-3">
              <div className="convinced-img-col">
                <img src="assets/images/convinced-3.png" alt="convinced_home" />
              </div>
              <div className="convinced-right-text convinced-text">
                <div className="convinced-text-col">
                  <h4>Peer Reviewers a Plenty</h4>
                  <p>
                    One of the biggest hurdles societies face is finding
                    reliable and efficient Peer Reviewers. It is a common pain
                    point. Say goodbye to that worry because we have a vast
                    network of expert reviewers ready to contribute their
                    expertise to your research.
                  </p>
                  <p>
                    What’s more, we offer both{" "}
                    <strong>Pre Publication Double Anonymous</strong> , and{" "}
                    <strong>Post Publication Open Review </strong> subscribing
                    to the opportunities promoted by Open Science.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 convinced-img-wrp convinced-col-4">
              <div className="convinced-left-text convinced-text">
                <div className="convinced-text-col">
                  <h4>Exercise Full Control</h4>
                  <p>
                    We firmly believe in putting you in the driver’ seat. With
                    us, you have full control. You can effortlessly manage
                    submissions, handpick, and oversee your editorial board, and
                    experience lightning-fast publishing speed and turnaround
                    time.
                  </p>
                </div>
              </div>
              <div className="convinced-img-col">
                <img src="assets/images/convinced-4.png" alt="convinced_home" />
              </div>
            </div>
          </div>

          <div className="ag_heading_center_wrap community-col sell-btm-form mt-5 mb-5">
            <h2>
              Please fill out this simple form and take the first step in{" "}
              <p> joining hands with one of the fastest growing</p> open access
              journal publishing community.
            </h2>
          </div>

          <JoinPublishingCommunityForm />
        </div>

        <div className="container">
          <div className="mt-5 mb-5 text-center">
            <p className="pera-text">
              For more questions on our processes, policies and other aspects,
              please refer to our <strong>FAQ section.</strong>
            </p>
          </div>
          {/* <!-- <div className="row my-5 align-items-center foreign-university">
      <div className="col-lg-6 p-3"  style={{ boxShadow: '0px 0px 12px #00000039', borderRadius: '20px'}}>
        <div className="nation-wrp">
          <div className="nation-img">
            <img src="assets/images/university.png" alt="university" style={{ width: '100%'}} />
          </div>
        </div>
      </div>
      <div className="col-lg-6 foreign-university-text">
        <h4>Are You A Foreign University, Society Or Institute?</h4>
        <div className="ag_special_offer_btn" style={{ flexDirection: 'row'}}>
           <a href="javascript:;" className="ag_btn_red">Click Here</a>
        </div>
      </div>
    </div> --> */}
        </div>
      </main>
      {/* NewsLetter Start */}
      <NewsLetter />
      {/* Footer Redline Start */}
    </>
  );
}

export default SellPageForeign;
