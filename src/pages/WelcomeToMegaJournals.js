import NewsLetter from "../components/global/NewsLetter";
import { SUB_HEADINGS } from "../constant";
import SubHeader from "../components/global/SubHeader";

import MeghaJournalObjective from "../components/welcometomeghajournals/MeghaJournalObjective";
import MeghaJournalOpenScienceObjectives from "../components/welcometomeghajournals/MeghaJournalOpenScienceObjectives";
import MeghaJournalTable from "../components/welcometomeghajournals/MeghaJournalTable";

function WelcomeToMegaJournals() {
  return (
    <>
      <main className="main">
        <SubHeader title={SUB_HEADINGS.WELCOME_TO_MEGA_JOURNALS} />

        <div className="content-area welcome-mega-journal">
          <div className="container">
            <MeghaJournalObjective />

            <h2 className="large-title">
              {SUB_HEADINGS.WE_REALLY_SUPPORT_OPEN_SCIENCE}
            </h2>

            <MeghaJournalOpenScienceObjectives />

            <div className="register-button">
              <button>Publish article</button>
            </div>

            <MeghaJournalTable />

            <p className="pera-text">
              Our Mega Journals offer an unparalleled opportunity for
              researchers like you to make a substantial impact on the global
              research landscape. By embracing inclusivity, efficiency, and
              expansive reach, Aakashganga Mega Journals empower you to share
              your insights with a diverse and engaged audience, ultimately
              contributing to the advancement of knowledge across disciplines.
            </p>

            <p className="pera-text">
              Ready to amplify your research impact? Join us in our Mega
              Journals journey!
            </p>

            <div className="register-button">
              <button>Publish article</button>
            </div>

            <p className="pera-text text-center">
              For more questions on our processes, policies and other aspects,
              please refer to our
              <strong className="underline">FAQ section.</strong>
            </p>
          </div>
        </div>
      </main>
      {/* NewsLetter Start */}
      <NewsLetter />
      {/* Footer Redline Start */}
    </>
  );
}

export default WelcomeToMegaJournals;
