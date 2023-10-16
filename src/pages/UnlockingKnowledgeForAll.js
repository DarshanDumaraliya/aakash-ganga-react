import NewsLetter from "../components/global/NewsLetter";

import {
  openScienceObjective,
  whatIsOpenScience,
  openScienceComponents,
  openAccessData,
  didYouKnowData,
  publishOpenSurceReasonData,
  howOpenAccessWorks,
  Headings,
} from "../components/unlockingknowforall/data";

import PeraTextData from "../components/global/PeraTextData";
import SubHeader from "../components/global/SubHeader";
import Title from "../components/global/Title";

function UnlockingKnowledgeForAll() {
  return (
    <>
      <main className="main">
        <SubHeader
          title={Headings.OPEN_SCIENCE_UNLOCKING_KNOWLEDGE}
          className={"opensci"}
        />

        <div className="content-area">
          <div className="container">
            <PeraTextData data={openScienceObjective} />

            <Title
              title={Headings.WHAT_IS_OPEN_SCIENCE}
              className={"large-title"}
            />

            <PeraTextData data={whatIsOpenScience} />

            <Title
              title={Headings.COMPONENTS_OF_OPEN_SCIENCE}
              className={"small-title1"}
            />

            <PeraTextData data={openScienceComponents} />

            <Title
              title={Headings.PATHWAY_TO_KNOWLEDGE}
              className={"large-title"}
            />

            <PeraTextData data={openAccessData} />

            <Title title={Headings.DID_YOU_KNOW} className={"large-title"} />

            <PeraTextData data={didYouKnowData} />

            <Title
              title={Headings.WHY_SHOULD_YOU_PUBLISH_OPEN_ACCESS}
              className={"large-title"}
            />

            <PeraTextData data={publishOpenSurceReasonData} />

            <Title
              title={Headings.HOW_OPEN_ACCESS_WORKS}
              className={"large-title"}
            />

            <PeraTextData data={howOpenAccessWorks} />

            <h2 className="large-title h2p">
              Read more about <p>Creative Common Licenses</p>
            </h2>
            <div className="register-button">
              <button>Check now</button>
            </div>
            <div className="row quiz">
              <div className="col-md-4 col-12">
                <img src="assets/images/ready1.png" />
              </div>
              <div className="col-md-8 col-12">
                <span>
                  <p className="pera-text takequiz">
                    <span className="blue-text">
                      Take our quiz to understand why
                    </span>
                    <strong> Open Science</strong>
                    <br />
                    <span className="blue-text">
                      matters and why you should consider publishing <br />
                      your work using{" "}
                    </span>
                    <strong>Open Science</strong>
                    <span className="blue-text">principles?</span>
                  </p>
                </span>
                <div className="register-button register-unlocking-btn">
                  <a
                    href="https://docs.google.com/forms/d/1Cw0_2GfXAL8tAOutPuUn_nbFdhlIKn6phYWF8G7GUqA/edit"
                    target="_blank"
                    className="take_a_quize"
                  >
                    Take the Quiz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* NewsLetter Start */}
      <NewsLetter />
      {/* Footer Redline Start */}
    </>
  );
}

export default UnlockingKnowledgeForAll;
