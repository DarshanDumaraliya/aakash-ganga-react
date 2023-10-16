import { aboutAkashGangaData } from "../components/sellPageForeign/data";

import PeraTextData from "../components/global/PeraTextData";

function SellPage() {
  return (
    <>
      <main className="main  ">
        <div className="">
          <div className="container">
            <div className="sell-banner-wrp">
              <div className="sell-banner">
                <img src="assets/images/university.gif" alt="sell-banner" />
                {/* <!-- <video src="assets/images/university.mp4"></video> --> */}
              </div>
              <div className="sell-banner-text">
                <h3 className="title">
                  Publ<span>i</span>sh Your Open Access Journal With Us
                </h3>
                <p>Empowering Universities, Institutes, and Societies</p>
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
                Transform<span>i</span>ng Scholarly Research Together
              </h2>
            </div>
            <div className="Transforming-btm-text text-center mb-5">
              <h4>
                Are you a University, Society or an Institute looking for{" "}
                <p>
                  World Class Journal Publishing Infrastructure at Affordable
                  Prices?
                </p>
              </h4>
              <p className="pera-text">
                Well, look no further! We are here to be your ultimate
                publishing partners, offering you end-to-end services to achieve
                your Journal Publishing Objective.
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
                className="sell_logo"
                alt="logo"
              />
              <span>Bringing Your Research Ideas To Life</span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="specific-issue">
            <div className="specificc-issue-img">
              <img
                src="assets/images/speccificc-issue.png"
                alt="speccificc-issue"
              />
            </div>
            <div className="specific-issue-text">
              <h3>Specific Issues Confronting Indian Journal Publishing</h3>
            </div>
          </div>
        </div>

        <div className="container nation-one">
          <div className="ag_heading_center_wrap mt-5 mb-5">
            <h2>One Nation One Subscription</h2>
          </div>
          <div className="row mt-5 mb-4 align-items-center">
            <div className="col-lg-5">
              <div className="nation-wrp">
                <div className="nation-img">
                  <img src="assets/images/nation-one.png" alt="nation-one" />
                </div>
                <div className="nation-text text-center"></div>
              </div>
            </div>
            <div className="col-lg-7 nation-right-col">
              <p className="pera-text">
                India is in the final stages of rolling out a path breaking
                policy titled ‘One Nation, One Subscription.{" "}
                <strong className="underline">Click here</strong> to know more
                about this policy and to understand better how it affects you.
              </p>
              <p className="pera-text">
                “One Nation One Subscription” is an innovative policy launched
                by the Government of India with the aim of revolutionizing the
                access and availability of research publications in the country.
              </p>
              <p className="pera-text">
                It underscores the government’s commitment to fostering an
                inclusive and vibrant research ecosystem in India.
              </p>
              <p className="pera-text">
                The policy aims to eliminate disparities in access to knowledge
                and provide a level playing field for researchers nationwide
                regardless of the university they study in.
              </p>
              <p className="pera-text">
                It encourages institutions and societies to choose Indian
                publishers as their preferred publishing partners, supporting
                the development and recognition of homegrown research platforms.
              </p>
              <p className="pera-text">
                The policy is scheduled to be implemented from 1 st January
                2024.
              </p>
            </div>
          </div>
        </div>

        <div className="container choosing-main-col">
          <div className="ag_heading_center_wrap mt-5 mb-5">
            <h2>Choosing An Indian Publisher</h2>
          </div>
          <div
            className="row choosing-main-col-row my-5 px-lg-5 px-3"
            style={{ justifyContent: "center" }}
          >
            <div className="col-lg-7 choosing-main-text">
              <p className="pera-text mb-5">
                Aakashganga is a mission dedicated to providing world className
                journal publishing Infrastructure at Indian prices.
              </p>
              <p className="pera-text mb-5">
                By choosing the Indian open access journals platform,
                Aakashganga, Universities, institutions and societies can not
                only align themselves with the national research agenda but also
                benefit from the comprehensive support, enhanced visibility, and
                cost-effective publishing options offered by us.
              </p>
              <p className="pera-text mb-5">
                The platform is designed to meet your needs for speed,
                affordability, transparency since it is built on a fully
                automated (95%) workflow.
              </p>
              <p className="pera-text mb-5">
                <b>Let us help realize your Journal Publishing objectives.</b>
              </p>
              <div
                className="ag_special_offer_btn mt-4"
                style={{ flexDirection: "row" }}
              >
                <a href="javascript:;" className="ag_btn_red">
                  Connect Now
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 choosingg-main-img p-4"
              style={{
                boxShadow: "0px 0px 12px #00000039",
                borderRadius: "20px",
              }}
            >
              <div className="nation-wrp">
                <div className="nation-img">
                  <img src="assets/images/publisher.png" alt="publisher.png" />
                </div>
                <div className="nation-text text-center"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container container-full">
          <div className="ag_heading_center_wrap mt-3 mb-5">
            <h2>Still not convinced? Read on</h2>
          </div>

          <div className="row mt-4">
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

          <div
            className="row my-4 p-4 align-items-center main-form-btm"
            style={{
              boxShadow: "0px 0px 12px #00000039",
              borderRadius: "24px",
            }}
          >
            <div className="col-lg-6 p-0">
              <div className="nation-wrp">
                <div className="nation-img">
                  <img src="assets/images/sell-form.png" alt="sell-form" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 bottom-form-col ml-5">
              <form>
                <div className="form-row">
                  <div className="col">
                    <label>
                      Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your answer"
                    />
                  </div>
                  <div className="col">
                    <label>
                      Email<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your answer"
                    />
                  </div>
                  <div className="col">
                    <label>
                      Phone Number<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your answer"
                    />
                  </div>
                  <div className="col">
                    <label>
                      Name of University/Institute/Society
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your answer"
                    />
                  </div>
                  <div className="col">
                    <label>
                      Designation<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your answer"
                    />
                  </div>
                  <div className="col">
                    <label>
                      Your Message<span>*</span>
                    </label>
                    <textarea
                      type="textares"
                      className="form-control"
                      placeholder="Write your message"
                      style={{ height: "140px" }}
                    ></textarea>
                  </div>
                  <div
                    className="ag_special_offer_btn"
                    style={{
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <a
                      href="javascript:;"
                      className="ag_btn_red"
                      style={{ width: "100%" }}
                    >
                      Connect Now
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="mt-4 mb-5 text-center">
            <p className="pera-text">
              For more questions on our processes, policies and other aspects,
              please refer to our <strong>FAQ section.</strong>
            </p>
          </div>
          <div className="row my-5 align-items-center foreign-university">
            <div
              className="col-lg-6 p-3"
              style={{
                boxShadow: "0px 0px 12px #00000039",
                borderRadius: "20px",
              }}
            >
              <div className="nation-wrp">
                <div className="nation-img">
                  <img
                    src="assets/images/university.png"
                    alt="university"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 foreign-university-text">
              <h4>Are You A Foreign University, Society Or Institute?</h4>
              <div
                className="ag_special_offer_btn"
                style={{ flexDirection: "row" }}
              >
                <a href="javascript:;" className="ag_btn_red">
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer Redline Start */}
    </>
  );
}

export default SellPage;
