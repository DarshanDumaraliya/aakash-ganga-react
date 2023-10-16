import MainBanner from "../components/home/MainBanner";
import NewWays from "../components/home/NewWays";
import Opportunities from "../components/home/Opportunities";
import Partners from "../components/home/Partners";
import PublishJournal from "../components/home/PublishJournal";
import SevenMegaJournals from "../components/home/SevenMegaJournals";
import SpecialLaunch from "../components/home/SpecialLaunch";
import Testimonials from "../components/home/Testimonials";
import UnlockKnowledge from "../components/home/UnlockKnowledge";
import NewsLetter from "../components/global/NewsLetter";

function Home() {
  return (
    <>
      {/* Banner Start */}
      <MainBanner />
      {/* Built With Start */}
      <div className="ag_main_wrap ag_builtwith_wrap">
        <div className="container">
          <div className="row align-items-center mt-5">
            <div className="col-12 align-items-center">
              <div className="ag_builtwith_video">
                <video autoPlay muted loop>
                  <source
                    src="assets/images/built-with-love.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Partners Start */}
      <Partners />
      {/* Opportunities Start */}
      <div className="ag_main_wrap ag_opportunities_wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center mt-5">
            <div className="col-12 align-items-center mb-3">
              <div className="ag_heading_center_wrap">
                <h2 className="cus-title">
                  A Galaxy Of Opportun
                  <div className="custom-i-dot">i</div>ties
                </h2>
                <h2>
                  <span>Await You At AAKASHGANGA</span>
                </h2>
              </div>
            </div>
            <Opportunities />
          </div>
        </div>
      </div>
      {/* Special Launch Offer Start  */}
      <SpecialLaunch />
      {/* New Ways Start */}
      <NewWays />
      {/* Mega Journals Start */}
      <SevenMegaJournals />
      {/* Publish Your Journal Start */}
      <PublishJournal />
      {/* <!-- How Works Start --> */}
      <div className="ag_main_wrap ag_howworks_wrap mt-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div
              className="col-12 align-items-center aos-init"
              data-aos="fade-up"
            >
              <div className="ag_heading_center_wrap">
                <img src="assets/images/three-dots.png" alt="publish journal" />
                <h2>
                  How AAKASHGANGA Works?{" "}
                  <span>Publish Your Article In 6 Simple Steps</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="howitworks">
          <div className="">
            <div className="ag_howworks_btn">
              <a href="javascript:;" className="ag_btn_red">
                Publish Your Article
              </a>
              <p>
                Inclusive, Affordable And <i>Open For All</i>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Resource Hub Start --> */}
      <div className="ag_main_wrap ag_resourcehub_wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div
              className="col-12 align-items-center aos-init"
              data-aos="fade-up"
            >
              <div className="ag_heading_center_wrap">
                <h2>
                  Unlock Knowledge <span>At Your Go-To Resource Hub</span>
                </h2>
              </div>
            </div>
            <UnlockKnowledge />
          </div>
        </div>
      </div>
      {/* <!-- Warm Words Start --> */}
      <div className="ag_main_wrap ag_warmwords_wrap  mb-5">
        <div className="container">
          <div
            className="col-12 align-items-center detail-slider-title aos-init"
            data-aos="fade-up"
          >
            <div className="ag_heading_center_wrap">
              <h2>
                Warm Words <span>That Inspire</span>
              </h2>
            </div>
          </div>
          <div className="ag_main_wrapmain-col row justify-content-between align-items-center">
            <div className="col-xl-12 col-lg-12 col-sm-12">
              <div className="warm_slider">
                <div className="warm-slider-img slider-nav">
                  <img src="assets/images/warm-img-1.png" alt="warm-img-1" />
                  <img src="assets/images/warm-img-1.png" alt="warm-img-1" />
                  <img src="assets/images/warm-img-1.png" alt="warm-img-1" />
                  <img src="assets/images/warm-img-1.png" alt="warm-img-1" />
                  <img src="assets/images/warm-img-1.png" alt="warm-img-1" />
                  <img src="assets/images/warm-img-1.png" alt="warm-img-1" />
                </div>
                <div className="warm-slider-des slider-for">
                  <Testimonials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- NewsLetter Start --> */}
      <NewsLetter />
    </>
  );
}

export default Home;
